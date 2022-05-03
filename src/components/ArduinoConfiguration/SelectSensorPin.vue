<template>
  <div class="input-container">
    <label class="input-label">Sensor PIN</label>
    <select v-model="value" class="input">
      <option v-for="i in [...Array(25).keys()]" :value="i">D{{ i }}</option>
    </select>
  </div>
</template>

<script>
import {ref, watch} from "vue";

export default {
  props: ['modelValue'],

  setup(props, {emit}) {
    const value = ref();

    watch(props, (val) => {
      value.value = val.modelValue;
    }, {deep: true});

    watch(value, (val) => {
      emit("update:modelValue", val);
    })

    return {value};
  }
}
</script>
