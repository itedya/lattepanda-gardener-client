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
        <div class="input-container" v-for="(pinout, i) in pinoutManager.pinouts" :key="i">
          <hr class="my-3"/>
          <h3 class="text-gray-200 text-2xl font-semibold">Pinout {{ i + 1 }}</h3>
          <SelectSensorPin v-model="pinout.sensorPin"/>
          <div class="flex justify-end">
            <button class="btn btn-danger" @click="pinoutManager.removePinout(i)">Remove pinout</button>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-end">
        <button class="btn btn-success" @click="pinoutManager.addPinout({})">
          Add pinout
        </button>
      </div>

      <div class="flex justify-end">
        <button class="btn btn-success" @click="submitForm">
          <img :src="'./icons/plus.svg'" alt="Plus icon">
          Add configuration
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, onMounted, ref} from "vue";
import SerialportStore from "../../store/serialport.store";
import useEventBus from "../../composables/mitt";
import useModal from "../../composables/modal";
import CreateArduinoConfigurationRequest from "../../dto/create-arduino-configuration.request";
import ArduinoConfigurationStore from "../../store/arduino-configuration.store";
import usePinouts from "../../composables/pinout";
import SelectSensorPin from "./SelectSensorPin.vue";

export default {
  components: {SelectSensorPin},

  setup() {
    const eventBus = useEventBus();
    const ports = computed(() => SerialportStore.all());

    // form data
    const comPort = ref<string>();
    const name = ref<string>();
    const pinoutManager = usePinouts();

    // modal
    const modalElement = ref<HTMLDivElement | null>(null);
    let openModal: () => void;
    let closeModal: () => void;

    const submitForm = () => {
      const request = new CreateArduinoConfigurationRequest({
        name: name.value,
        serialport: comPort.value,
        pinouts: pinoutManager.pinouts
      });

      ArduinoConfigurationStore.create(request);

      closeModal();
    }

    onMounted(() => {
      if (modalElement.value === null) throw new Error("Modal is null!");
      ({openModal, closeModal} = useModal(modalElement.value, "create-arduino-configuration"));

      eventBus.on("create-arduino-configuration:modal:show", openModal);
    });

    return {comPort, ports, modalElement, name, submitForm, pinoutManager};
  }
}
</script>
