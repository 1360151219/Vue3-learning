<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="handleClick">{{ counter }}++</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import useCounter from "@/composables/useCounter";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props) {
    const { counter, handleClick } = useCounter();
    return {
      counter,
      handleClick,
    };
  },
  data() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
