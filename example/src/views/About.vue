<script setup lang="ts">
import SetupSweet from "@/components/SetupSweet.vue";
import ModalButton from "@/components/Modal.vue";
import InputVue from "@/components/Input.vue";
import { ref } from 'vue'
let modelValue = ref('text here')
</script>
<template>
  <div class="about">
    <SetupSweet></SetupSweet>
    <modal-button></modal-button>
    <input-vue v-model:model-value.capitalize="modelValue"></input-vue>
    <div>This is input's value : {{ modelValue }}</div>
  </div>
</template>
