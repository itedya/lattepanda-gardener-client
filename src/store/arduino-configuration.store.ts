import {ref} from "vue";
import ArduinoConfigurationDto from "../dto/arduino-configuration.dto";
import api from "../api/api";
import CreateArduinoConfigurationRequest from "../dto/create-arduino-configuration.request";

export default class ArduinoConfigurationStore {
    private static data = ref<ArduinoConfigurationDto[]>([]);

    public static all() {
        return this.data.value;
    }

    public static fetch() {
        return api.get(`/arduino`)
            .then(res => this.data = res.data.map((ele: Partial<ArduinoConfigurationDto>) => {
                return new ArduinoConfigurationDto(ele);
            }));
    }

    public static create(request: CreateArduinoConfigurationRequest) {
        return api.post(`/arduino`, request)
            .then(res => {
                const obj = new ArduinoConfigurationDto(res.data);
                this.data.value.push(obj);
                return obj;
            });
    }
}
