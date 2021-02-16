export interface DirectorResponse {
    id:       number;
    dni:      string;
    name:   string;
    email:     string;
}

export class Convert {
    public static toDirectorResponse(json: string): DirectorResponse[] {
        return JSON.parse(json);
    }

    public static directorResponseToJson(value: DirectorResponse[]): string {
        return JSON.stringify(value);
    }
}
