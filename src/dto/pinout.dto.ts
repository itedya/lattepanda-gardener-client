export default class PinoutDto {
    constructor(data: Partial<PinoutDto>) {
        if (data.id) this.id = data.id;
        if (data.sensorPin) this.sensorPin = data.sensorPin;
        if (data.valvePin) this.valvePin = data.valvePin;
        if (data.arduinoConfigurationId) this.arduinoConfigurationId = data.arduinoConfigurationId;
    }

    id: number;
    sensorPin: number;
    valvePin: number;
    arduinoConfigurationId: number;
}
