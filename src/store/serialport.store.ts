import {ref} from "vue";
import SerialportDto from "../dto/serialport.dto";
import api from "../api/api";

export class SerialportStore {
    private static data = ref<SerialportDto[]>();

    public static fetch(): Promise<SerialportDto[]> {
        return api.get(`/serialport`)
            .then(res => {
                const newData = res.data.map((ele: Partial<SerialportDto>) => new SerialportDto(ele));
                this.data.value = newData;
                return newData;
            });
    }

    public static all() {
        return this.data.value;
    }
}
