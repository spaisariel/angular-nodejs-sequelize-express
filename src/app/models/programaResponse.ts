import { Time } from "@angular/common";

export interface ProgramaResponse {
    id:             number;
    name: string;
    schedule: Time;
    duration: Time;
    day: string;
    directorId: number;
}

export class Convert {
    public static toProgramaResponse(json: string): ProgramaResponse[] {
        return JSON.parse(json);
    }

    public static programaResponseToJson(value: ProgramaResponse[]): string {
        return JSON.stringify(value);
    }
}