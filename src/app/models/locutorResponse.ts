export interface LocutorResponse {
    id:    number;
    dni:   string;
    name:  string;
    email: string;
}

export class Convert {
    public static toLocutorResponse(json: string): LocutorResponse[] {
        return JSON.parse(json);
    }

    public static locutorResponseToJson(value: LocutorResponse[]): string {
        return JSON.stringify(value);
    }
}
