import { GridColDef } from "../interfaces";
import { Family, OptionItem } from "../interfaces/FamilyHomeInterfaces";

const Nationality: OptionItem[] = [
  {
    label: 'E',
    value: 'E'
  },
  {
    label: 'V',
    value: 'V'
  },
];
const identityCard: OptionItem[] = [
  {
    label: "Cedulado",
    value: true
  },
  {
    label: 'No Cedulado',
    value: false
  },
];

const familyNucleusOpt: OptionItem[] = [
  {
    label: 'Si',
    value: true
  },
  {
    label: 'No',
    value: false
  },
]

const familyInitialValues: Family = {
  id: '',
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
  family_nucleus: false,
  relationship: '',
  persons: []
};

const columnsPerson: GridColDef[] = [
  {
    field: 'identification_card',
    headerName: 'Documento de Identidad',
    cellProps: {
      numeric: true,
    }
  },
  {
    field: 'name',
    headerName: 'Nombre'
  },
  {
    field: 'last_name',
    headerName: 'Apellido',
  },
  {
    field: 'birthdate',
    headerName: 'Fecha de Nacimiento',
  },
  {
    field: 'naturalized',
    headerName: 'Nacionalidad',
  },
  {
    field: 'sex',
    headerName: 'Sexo',
  },
  {
    field: 'telephone',
    headerName: 'teléfono',
  },
  {
    field: 'email',
    headerName: 'Correo Electrónico',
  },
  {
    field: 'son_number',
    headerName: 'N# de Hijo',
    cellProps: {
      numeric: true,
    }
  },
  {
    field: 'action',
    headerName: 'Acción',
  },
];
export { Nationality, columnsPerson, familyInitialValues, familyNucleusOpt, identityCard };

