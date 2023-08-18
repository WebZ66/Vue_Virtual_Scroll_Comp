<template>
    <div class="list-item-container">
        <div class="list-item-container_content">
            <header class="list-item-container_content_text">
                <div class="title">{{ title }}</div>
                <div class="review">
                    <div class="review_number">{{ reads }}</div>
                    <div class="review_name">{{ from }}</div>
                    <div class="review_date">{{ date }}</div>
                </div>
            </header>
            <div class="list-item-container_content_img">
                <img src="" alt="加载失败" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
import type { Iprops } from './type'
const props = withDefaults(defineProps<Iprops>(), {})
const { title, reads, from, date, image } = toRefs(props.info)
</script>

<style lang="scss" scoped>
.list-item-container {
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    padding: 10px;
    &_content {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #c5c3c3;
        display: flex;
        justify-content: space-between;
        &_text {
            width: 220px;
            position: relative;
            .title {
                font-size: 16px;
                font-weight: bolder;
            }
            .review {
                width: 100%;
                position: absolute;
                bottom: 15px;
                display: flex;
                justify-content: space-between;
                color: #aaa;
                font-size: 10px;
            }
        }
        &_img {
            width: 110px;
            height: 70px;
            background-color: linen;
        }
    }
}

</style>
