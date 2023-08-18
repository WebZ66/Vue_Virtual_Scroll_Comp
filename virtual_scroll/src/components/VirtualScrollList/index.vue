<template>
    <div @scroll.passive="handleScroll" ref="scrollContainer" class="virtual-scroll-list-container" :style="{ width: width + 'px', height: height + 'px' }">
        <div :style="{ 'padding-top': blankFillStyle.paddingTop, 'padding-bottom': blankFillStyle.paddingBottom }">
            <ListItem v-for="item in showDataList" :key="item.id" :info="item"></ListItem>
            <div v-if="isRequestStatus" class="empty-box">{{ message }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'
import type { IProps } from './type'
import ListItem from '../ListItem/index.vue'
import { getList } from '@/api/list/list'
defineOptions({
    name: 'VirtualScroll'
})
const props = withDefaults(defineProps<IProps>(), {
    width: 300,
    height: 300
})

onMounted(async () => {
    const result = await getMockData(num.value)
    list.push(...result)
    getContainerSize()
    window.onresize = getContainerSize
})

const list = reactive([])
const num = ref(20)
const isRequestStatus = ref(false)
const message = ref('小二正在努力,请稍后')

function getMockData(num: number) {
    isRequestStatus.value = true
    return getList(num)
        .then((res: any) => {
            isRequestStatus.value = false
            return res.list
        })
        .catch((err: any) => {
            isRequestStatus.value = false
            message.value = '你的网络出错了'
        })
}

const scrollContainer = ref(null)
//单条数据高度
const oneHeight = ref(100)
//计算容器的最大容积
const containSize = ref(0)
function getContainerSize() {
    containSize.value = ~~(scrollContainer.value.offsetHeight / oneHeight.value) + 2
}

/* 监听滚动事件动态截取数据 */
//记录当前滚动最上方元素的索引
const startIndex = ref(0)
//计算当前滚动最下方的元素
const endIndex = computed(() => {
    let end = startIndex.value + containSize.value
    return list[end] ? end : list.length - 1
})
//计算真实待显示的数组
const showDataList = computed(() => {
    return list.slice(startIndex.value, endIndex.value + 1)
})
//定义上空白高度
const blankFillStyle = computed(() => {
    return {
        paddingTop: startIndex.value * oneHeight.value + 'px',
        paddingBottom: (list.length - 1 - endIndex.value) * oneHeight.value + 'px'
    }
})

const busy = ref(false)
function handleScroll() {
    startIndex.value = ~~(scrollContainer.value.scrollTop / oneHeight.value)
    //如何判断滚动到底部 通过 滚动高度和滚动容器的总高度
    if (scrollContainer.value.scrollTop + scrollContainer.value.offsetHeight >= scrollContainer.value.scrollHeight) {
        if (!busy.value) {
            console.log(123)
            busy.value = true
            loadMoreData(20)
        }
    }
}
async function loadMoreData(num: number) {
    const res = await getMockData(num)
    list.push(...res)
    busy.value = false
}
</script>

<style lang="scss" scoped>
.virtual-scroll-list-container {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: #535353;
    }
    .empty-box {
        height: 80px;
        font-size: 18px;
        text-align: center;
        line-height: 80px;
    }
}
</style>
