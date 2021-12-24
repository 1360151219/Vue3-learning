<script setup lang="ts">
import { defineProps,defineEmits,defineExpose,ref } from 'vue';
    const props=defineProps({
        text:{
            type:String,
            default:'here is Component communication'
        }
    })
    const emit=defineEmits(['textImport'])
    emit('textImport')
    // 只有通过defineExpost 外部组件才可以访问暴漏变量
    const a=ref(0)
    const b=1
    defineExpose({
        a,b
    })
</script>
<template>
    <div>{{text}}</div>
</template>
