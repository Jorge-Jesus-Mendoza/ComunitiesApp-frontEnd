export interface Person {
  id: number;
  name: string;
  last_name: string;
  birthdate: Date | string;
  identification_card: number | string;
  nationality: string;
  sex: string;
  telephone: string;
  email: string;
  identity_card: boolean;
  son_number: number | string;
}

export interface NationalityItem {
  label: string;
  value: string;
}

export interface IdentityCardItem {
  label: string;
  value: boolean;
}

export interface Family {
  name: string;
  last_name: string;
  birthdate: Date;
  identification_card: number | string;
  nationality: string;
  sex: string;
  telephone: string;
  email: string;
  identity_card: boolean;
  son_number: number | string;
  persons: Person[];
}
