<template>
  <div class="modal" ref="modalElement">
    <div class="modal-content">
      <h1 class="text-xl font-semibold text-gray-200">Create arduino config</h1>

      <div class="flex flex-col w-full">
        <label class="input-label">Communication port</label>
        <select v-model="comPort" class="rounded p-2 focus:outline-none bg-gray-700 text-gray-100 font-medium">
          <option v-for="serialport in ports" :value="serialport.path">{{ serialport.friendlyName }}</option>
        </select>
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
    const modalElement = ref<HTMLDivElement | null>(null);


    onMounted(() => {
      if (modalElement.value === null) throw new Error("Modal is null!");
      const { openModal } = useModal(modalElement.value, "create-arduino-configuration");

      eventBus.on("create-arduino-configuration:modal:show", openModal);
    });

    return {comPort, ports, modalElement};
  }
}
</script>

<style lang="scss">


.input-label {
  @apply font-semibold;
  @apply text-gray-100;
}

</style>
