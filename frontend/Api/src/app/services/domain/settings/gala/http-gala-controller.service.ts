import { HttpHeaders, HttpParameterCodec, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GalaController } from './gala.controller.service';
import { GalaDTO, GalaResponseDTO, CreateGalaDTO } from './gala';
import { GalaResponse } from './gala.model';

@Injectable()
export class HttpProductController implements GalaController {
    private readonly BASE_URL = `http://localhost:5000/api/gala`;
    public defaultHeaders = new HttpHeaders();
    public encoder: HttpParameterCodec;
    constructor(private httpClient: HttpClient) { }
    public createGala(request: CreateGalaDTO): Observable<GalaResponseDTO> {
        return this.httpClient.post(`${this.BASE_URL}/add`, request).pipe(
            map((res: GalaResponse) => res)
        );
    }
    public editGala(request: GalaDTO): Observable<GalaDTO> {
        return this.httpClient.put(`${this.BASE_URL}/${request._id}`, request).pipe(
            map((res: GalaDTO) => res)
        );
    }
    // tslint:disable-next-line: variable-name
    public deleteGala(_id: string) {
        return this.httpClient.post(`${this.BASE_URL}/delete/${_id}`, null).pipe();
    }
    public getGalas(): Observable<GalaDTO[]> {
        return this.httpClient.post(`${this.BASE_URL}`, null).pipe(
            map((res: GalaDTO[]) => res)
        );
    }

}
