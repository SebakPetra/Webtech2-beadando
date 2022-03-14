import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GalaDTO, GalaResponseDTO } from './gala';
import { GalaController } from './gala.controller.service';
import { toCreatedGala, toGalas } from './gala.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private controller: GalaController) { }

    getGalas(): Observable<GalaDTO[]> {
        return this.controller.getGalas().pipe(map((response: GalaDTO[]) => {
            return response ? toGalas(response) : null;
        }));
    }
    /*   title: GalaDTO.title,
      organizer: GalaDTO.organizer,
      date: GalaDTO.date,
      price: GalaDTO.price,
      sitting: GalaDTO.sitting */
    createGala(title: string, organizer: string, date: Date, price: number, sitting: number) {
        return this.controller.createGala({ title, organizer, date, price, sitting }).pipe(map((response: GalaResponseDTO) => {
            return response ? toCreatedGala(response) : null;
        }));
    }

    // tslint:disable-next-line: variable-name
    editGala(_id: string, title: string, organizer: string, isbn: string, date: Date, price: number, sitting: number) {
        return this.controller.editGala({ _id, title, organizer, date, price, sitting }).pipe();
    }

    // tslint:disable-next-line: variable-name
    deleteGala(_id: string) {
        return this.controller.deleteGala(_id).pipe();
    }

}
