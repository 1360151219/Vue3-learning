<script setup lang="ts">
import { onMounted, ref } from "vue";
import TextItem from "./TextItem.vue";

let msg = ref("I am a msg"); // 响应式添加
function handleClick() {
  msg.value = "change Msg";
  //   console.log(msg);
}
function handleImport(){
  console.log('TextItem is imported')
}
const textItem=ref(null)
onMounted(function(){
  console.log(textItem)
  }   
)
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="handleClick">msg change</button>
    <TextItem @textImport="handleImport" ref="textItem" text="here is Parent Component"></TextItem>
  </div>
</template>



