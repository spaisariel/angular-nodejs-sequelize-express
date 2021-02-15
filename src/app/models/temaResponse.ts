export interface TemaResponse {
    id:     number;
    titulo: string;
    autor:  string;
}

export class Convert {
    public static toTemaResponse(json: string): TemaResponse[] {
        return JSON.parse(json);
    }

    public static temaResponseToJson(value: TemaResponse[]): string {
        return JSON.stringify(value);
    }
}