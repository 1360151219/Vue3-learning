<script setup lang='ts'>
import { defineProps, defineEmits, withDefaults } from 'vue'
import { Modifiers } from '@/models'
interface Props {
    modelValue: string,
    modelValueModifiers: Modifiers
}
const props = withDefaults(defineProps<Props>(), {
    modelValueModifiers: () => ({})
})

const emits = defineEmits(['update:modelValue'])
function emitValue(e) {
    let value = e.target.value
    if (props.modelValueModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    emits('update:modelValue', value)
}
</script>
<template>
    <div>
        <input type="text" :value="modelValue" @input="emitValue" />
    </div>
</template>
<style lang='scss' scoped>
</style>