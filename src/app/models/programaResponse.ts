import { Time } from "@angular/common";

export interface ProgramaResponse {
    id:             number;
    tituloPrograma: string;
    dia:            Date;
    horarioEmision: Time;
    duracion:       Time;
}

export class Convert {
    public static toProgramaResponse(json: string): ProgramaResponse[] {
        return JSON.parse(json);
    }

    public static programaResponseToJson(value: ProgramaResponse[]): string {
        return JSON.stringify(value);
    }
}