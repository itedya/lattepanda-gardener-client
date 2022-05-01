export default class SerialportDto {
    constructor(data: Partial<SerialportDto>) {
        if (data.path) this.path = data.path;
        if (data.friendlyName) this.friendlyName = data.friendlyName;
    }

    path: string;
    friendlyName: string;
}
