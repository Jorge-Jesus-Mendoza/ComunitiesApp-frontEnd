export interface userItem {
  _id: string;
  rol_id: string;
  family_nucleus_id?: null;
  relationship_id?: null;
  politic_party_id?: null;
  social_organization_id?: null;
  address_id?: null;
  social_protection?: null;
  email: string;
  password: string;
  name: string;
  last_name: string;
  image?: null;
  sex: string;
  birthdate: Date;
  identification_card: string;
  naturalized: number;
  telephone: string;
  status: boolean;
  date_created: Date;
  date_updated?: null;
  date_deleted?: null;
  __v: number;
  token: string;
}

export interface registerUserItem {
  name: string;
  last_name: string;
  sex: string;
  birthdate: Date;
  identification_card: number | string;
  telephone: string;
  email: string;
  password: string;
  naturalized: number;
}

export const initialRegisterData: registerUserItem = {
  name: '',
  last_name: '',
  sex: '',
  birthdate: new Date(Date.now()),
  identification_card: '',
  telephone: '',
  email: '',
  password: '',
  naturalized: 1,
};

export interface loginItem {
  identification_card: string;
  password: string;
}

export const initialLoginData: loginItem = {
  identification_card: '',
  password: '',
};
