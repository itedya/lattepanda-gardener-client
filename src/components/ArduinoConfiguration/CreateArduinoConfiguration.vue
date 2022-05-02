<template>
  <div class="modal" ref="modalElement">
    <div class="modal-content">
      <h1 class="text-xl font-semibold text-gray-200">Create arduino config</h1>

      <div class="flex flex-col w-full">
        <div class="input-container">
          <label class="input-label">Config name</label>
          <input type="text" class="input" v-model="name"/>
        </div>
        <div class="input-container">
          <label class="input-label">Communication port</label>
          <select v-model="comPort" class="input">
            <option v-for="serialport in ports" :value="serialport.path">{{ serialport.friendlyName }}</option>
          </select>
        </div>
      </div>

      <div class="flex justify-end">
        <button class="btn btn-success">
          <img :src="'./icons/plus.svg'" alt="Plus icon">
          Add configuration
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, onMounted, ref} from "vue";
import {SerialportStore} from "../../store/serialport.store";
import useEventBus from "../../composables/mitt";
import useModal from "../../composables/modal";

export default {
  setup() {
    const eventBus = useEventBus();
    const ports = computed(() => SerialportStore.all());
    const comPort = ref();
    const name = ref();
    const modalElement = ref<HTMLDivElement | null>(null);


    onMounted(() => {
      if (modalElement.value === null) throw new Error("Modal is null!");
      const {openModal} = useModal(modalElement.value, "create-arduino-configuration");

      eventBus.on("create-arduino-configuration:modal:show", openModal);
    });

    return {comPort, ports, modalElement, name};
  }
}
</script>
