import { ValueType } from "react-native-dropdown-picker";

export interface Person {
  id: number | string;
  identification_card: number | string;
  name: string;
  last_name: string;
  birthdate: Date | string;
  naturalized: string;
  sex: string;
  telephone: string;
  email: string;
  identity_card: boolean;
  son_number: number | string;
  family_nucleus: boolean;
  relationship: string;
}

export interface OptionItem {
  label: string;
  value: ValueType;
}


export interface Family {
  id: string | number;
  name: string;
  last_name: string;
  birthdate: Date | string;
  identification_card: number | string;
  naturalized: string;
  sex: string;
  telephone: string;
  email: string;
  identity_card: boolean;
  son_number: number | string;
  family_nucleus: boolean;
  relationship: string;
  persons?: Person[];
}
