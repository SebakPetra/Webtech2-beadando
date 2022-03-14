import { GalaDTO as GalaDTO, GalaResponseDTO as GalaResponseDTO } from './gala';

export interface Gala {
    _id: string;
    title: string;
    organizer: string;
    date: Date;
    price: number;
    sitting: number;
}

export interface GalaResponse {
    _id: string;
}
export function toGalas(productResponse: GalaDTO[]): Gala[] {
    return productResponse.map(dto => toGala(dto));
}

export function toGala(galaDTO: GalaDTO): Gala {
    return {
        _id: galaDTO._id,
        title: galaDTO.title,
        organizer: galaDTO.organizer,
        date: galaDTO.date,
        price: galaDTO.price,
        sitting: galaDTO.sitting
    };
}

export function toCreatedGala(galaDTO: GalaResponseDTO): GalaResponse {
    return {
        _id: galaDTO._id,
    };
}

