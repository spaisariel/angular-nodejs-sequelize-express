import { Time } from "@angular/common";

export class ProgramaRequest {
    name: string;
    schedule: Time;
    duration: Time;
    day: string;
    directorId: number;
}