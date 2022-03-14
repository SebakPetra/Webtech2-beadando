export interface GalaDTO {
  _id: string;
  title: string;
  organizer: string;
  date: Date;
  price: number;
  sitting: number;
}

export interface CreateGalaDTO {
  title: string;
  organizer: string;
  date: Date;
  price: number;
  sitting: number;
}

export interface GalaResponseDTO {
  _id: string;
}
