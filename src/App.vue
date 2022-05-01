<template>
  <AppNavbar />

  <div class="pt-12 min-h-screen w-full bg-slate-700">
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar";
import ArduinoConfiguration from "./components/ArduinoConfiguration";

export default {
  components: {ArduinoConfiguration, AppNavbar},

  setup() {

  }
}
</script>
