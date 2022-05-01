import {ref} from "vue";
import SerialportDto from "../dto/serialport.dto";
import api from "../api/api";

export class SerialportStore {
    private static data = ref<SerialportDto>();

    private static fetch(): Promise<SerialportDto[]> {
        return api.get(`/serialport`)
            .then(res => {
                const newData = res.data.map((ele: Partial<SerialportDto>) => new SerialportDto(ele));
                this.data.value = newData;
                return newData;
            });
    }

    private static all() {
        return this.data.value;
    }
}
