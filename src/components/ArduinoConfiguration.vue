<template>
  <div class="p-3">
    <table>
      <thead>
      <tr>
        <th>Nazwa konfiguracji</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="configuration in configurations">
        <td>{{ configuration.name }}</td>
        <td>
          <button class="px-3 py-2 "></button>
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
