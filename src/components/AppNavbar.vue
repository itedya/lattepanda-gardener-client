<template>
  <div class="fixed top-0 left-0 w-full h-12 z-50 bg-slate-800 flex justify-between items-center px-5">
    <h1 class="text-xl font-semibold text-gray-100">Gardener</h1>
    <button class="focus:outline-none" @click="drawerOpen = !drawerOpen">
      <img :src="'./icons/menu.svg'" alt="Menu icon"/>
    </button>
    <div id="drawer" class="fixed left-0 bottom-h-screen z-40 bg-slate-800 w-full flex flex-row duration-500">
      <router-link to="/arduino-configuration" class="w-full p-3 text-center text-slate-100 font-semibold" href="#">Arduino Configuration</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, ref, watch} from "vue";

export default {
  setup() {
    const drawerOpen = ref(false);


    onMounted(() => {
      const drawer: HTMLDivElement = document.querySelector("#drawer")!;

      watch(drawerOpen, (val) => {
        if (val) {
          drawer.style.transform = "translate(0%, calc(100% + 48px))";
        } else {
          drawer.style.transform = "";
        }
      });
    });

    return {drawerOpen};
  }
}
</script>
