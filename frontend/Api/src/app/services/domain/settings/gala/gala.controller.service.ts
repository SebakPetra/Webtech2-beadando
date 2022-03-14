import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {GalaResponse } from './gala.model';
import { CreateGalaDTO as CreateGalaDTO, GalaDTO as GalaDTO, } from './gala';

@Injectable()
export abstract class GalaController {
    public abstract getGalas(): Observable<GalaDTO[]>;
    public abstract createGala(request: CreateGalaDTO): Observable<GalaResponse>;
    public abstract editGala(request: GalaDTO): Observable<GalaDTO>;
    // tslint:disable-next-line: variable-name
    public abstract deleteGala(_id: string);
}
