import PinoutDto from "./pinout.dto";

export default class CreateArduinoConfigurationRequest {
    constructor(data: Partial<CreateArduinoConfigurationRequest>) {
        if (data.name) this.name = data.name;
        if (data.serialport) this.serialport = data.serialport;
        if (data.pinouts) this.pinouts = data.pinouts;
    }

    name: string;
    serialport: string;
    pinouts: PinoutDto[];
}
