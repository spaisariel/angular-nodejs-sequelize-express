export interface PropagandaResponse {
    id:      number;
    cuit:    string;
    empresa: string;
}

export class Convert {
    public static toPropagandaResponse(json: string): PropagandaResponse[] {
        return JSON.parse(json);
    }

    public static propagandaResponseToJson(value: PropagandaResponse[]): string {
        return JSON.stringify(value);
    }
}