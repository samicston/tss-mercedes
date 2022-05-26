export interface CarDataDTO {
  name: string;
  model: string;
  price: string[];
  roadAgeFrom: string | Date;
  roadAgeTo: string | Date;
  withInsurance: boolean;
}
