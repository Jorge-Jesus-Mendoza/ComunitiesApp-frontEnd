import { GridColDef, GridRow } from "../interfaces";
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
  naturalized: '',
  sex: 'M',
  telephone: '',
  email: '',
  identity_card: false,
  son_number: '',
  persons: []
};

const exampleRows: GridRow[] = [
  {
    id: 1,
    identification_card: 12312,
    name: 'jesus nombre2',
    last_name: 'Apellido1 apellido2 ',
    calories: 356,
    fat: 16
  },
  {
    id: 2,
    identification_card: 231234,
    name: 'clara nombre2',
    last_name: 'Apellido1 apellido2 ',
    calories: 262,
    fat: 16
  },
  {
    id: 3,
    identification_card: 1231231,
    name: 'Eclair nombre2',
    last_name: 'Apellido1 apellido2 ',
    calories: 159,
    fat: 6
  },
  {
    id: 4,
    identification_card: 1232312,
    name: 'Ginger nombre2',
    last_name: 'Apellido1 apellido2 ',
    calories: 305,
    fat: 3.7
  },
];

const exampleColumns: GridColDef[] = [
  {
    field: 'identification_card',
    headerName: 'Cédula',
    cellProps: {
      numeric: true,
    }
  },
  { field: 'name', headerName: 'Nombre' },
  { field: 'last_name', headerName: 'Apellido', },
  { field: 'fat', headerName: 'Fat', },
  { field: 'action', headerName: 'Acción', },
];
export { Nationality, exampleColumns, exampleRows, familyInitialValues, identityCard };

