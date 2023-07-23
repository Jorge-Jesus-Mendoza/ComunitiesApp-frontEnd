import { Family, IdentityCardItem, NationalityItem } from "../interfaces/FamilyHomeInterfaces";

const Nationality: NationalityItem[] = [
  {
    label: 'E',
    value: 'E'
  },
  {
    label: 'V',
    value: 'V'
  },
];
const identityCard: IdentityCardItem[] = [
  {
    label: "Cedulado",
    value: true
  },
  {
    label: 'No Cedulado',
    value: false
  },
];

const familyInitialValues: Family = {
  name: '',
  last_name: '',
  birthdate: new Date(Date.now()),
  identification_card: '',
  nationality: '',
  sex: '',
  telephone: '',
  email: '',
  identity_card: false,
  son_number: 1,
  persons: []
};
export { Nationality, familyInitialValues, identityCard };

