<template>
    <VirtualScrollList :width="375" :height="667"></VirtualScrollList>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { getList } from './api/list/list'
import VirtualScrollList from './components/VirtualScrollList/index.vue'

</script>

<style scoped></style>
