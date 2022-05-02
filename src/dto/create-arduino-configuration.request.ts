export default class CreateArduinoConfigurationRequest {
    constructor(data: Partial<CreateArduinoConfigurationRequest>) {
        if (data.name) this.name = data.name;
        if (data.serialport) this.serialport = data.serialport;
    }

    name: string;
    serialport: string;
}
