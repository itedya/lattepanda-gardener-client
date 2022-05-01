import {RouteRecordRaw} from "vue-router";
import ArduinoConfiguration from "../components/ArduinoConfiguration.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/arduino-configuration",
        component: ArduinoConfiguration,
    }
];

export default routes;
