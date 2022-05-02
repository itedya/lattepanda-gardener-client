<template>
  <CreateArduinoConfiguration />

  <div class="p-5 flex flex-col gap-2">
    <table class="rounded-xl bg-slate-800 w-full">
      <thead>
      <tr>
        <th class="p-3 text-gray-200 text-left">Configuration name</th>
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
      <tr v-if="configurations.length === 0">
        <td colspan="2" class="p-3 font-semibold text-white text-center">No configurations</td>
      </tr>
      </tbody>
    </table>

    <div class="w-full flex justify-end">
      <button @click="openCreateModal"
              class="px-3 py-2 bg-green-500 rounded-xl hover:bg-green-600 duration-300 flex flex-row gap-2 text-white font-semibold">
        <img :src="'./icons/plus.svg'" alt="Add icon"/>
        Add configuration
      </button>
    </div>
  </div>
</template>

<script>
import CreateArduinoConfiguration from "./ArduinoConfiguration/CreateArduinoConfiguration.vue";
import {computed, ref} from "vue";
import useEventBus from "../composables/mitt";
import SerialportStore from "../store/serialport.store";
import ArduinoConfigurationStore from "../store/arduino-configuration.store";

export default {
  components: {CreateArduinoConfiguration},

  setup() {
    const eventBus = useEventBus();
    const configurations = computed(() => []);
    const loading = ref(true);

    // todo: implement loading screen

    Promise.all([
      ArduinoConfigurationStore.fetch(),
      SerialportStore.fetch()
    ]).then(() => loading.value = false);

    const openCreateModal = () => {
      eventBus.emit("create-arduino-configuration:modal:show", null);
    }

    return {configurations, openCreateModal};
  }
}
</script>
