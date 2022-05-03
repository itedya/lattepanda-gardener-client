import {ref} from "vue";
import PinoutDto from "../dto/pinout.dto";

const usePinouts = (startData: PinoutDto[] = []) => {
    const pinouts = ref<PinoutDto[]>(startData);

    const addPinout = (payload: Partial<PinoutDto>) => {
        const obj = new PinoutDto(payload);
        pinouts.value.push(obj);
    }

    const removePinout = (index: number) => {
        pinouts.value.splice(index, 1);
        debugger;
    }

    return {
        pinouts: pinouts.value,
        addPinout,
        removePinout
    }
}

export default usePinouts;
