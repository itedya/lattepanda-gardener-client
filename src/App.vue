<template>
  <AppNavbar />

  <ArduinoConfiguration/>
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
