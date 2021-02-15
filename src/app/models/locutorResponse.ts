export interface LocutorResponse {
    id:       number;
    dni:      string;
    nombre:   string;
    apellido: string;
}

export class Convert {
    public static toLocutorResponse(json: string): LocutorResponse[] {
        return JSON.parse(json);
    }

    public static locutorResponseToJson(value: LocutorResponse[]): string {
        return JSON.stringify(value);
    }
}
