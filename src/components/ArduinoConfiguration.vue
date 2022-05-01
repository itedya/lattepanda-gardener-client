<template>
  <div class="p-5">
    <table class="rounded-xl bg-slate-800 w-full">
      <thead>
      <tr>
        <th class="p-3 text-gray-200 text-left">Nazwa konfiguracji</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="config in configurations">
        <td class="p-3 text-gray-200"></td>
        <td class="p-3 text-gray-200 flex gap-2">
          <button class="px-3 py-2 bg-red-500 rounded-xl">
            <img :src="'./icons/trash.svg'" alt="Trash icon">
          </button>

          <button class="px-3 py-2 bg-orange-500 rounded-xl">
            <img :src="'./icons/edit.svg'" alt="Edit icon">
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const configurations = ref([]);

    return { configurations };
  }
}
</script>
