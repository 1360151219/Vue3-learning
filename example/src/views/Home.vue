<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Setup msg="This is setup function" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Setup from "@/components/Setup.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Setup,
  },
});
</script>
