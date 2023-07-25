import {GridColDef} from '../interfaces';
import {OptionItem} from '../interfaces/FamilyHomeInterfaces';
import {Program} from '../interfaces/ProgramsHomeInterfaces';

const priorities: OptionItem[] = [
  {
    label: 'Muy Baja',
    value: '1',
  },
  {
    label: 'Baja',
    value: '2',
  },
  {
    label: 'Normal',
    value: '3',
  },
  {
    label: 'Alta',
    value: '4',
  },
  {
    label: 'Muy alta',
    value: '5',
  },
];

const programInitialValues: Program = {
  id_municipality: '',
  id_parish: '',
  priority: '',
  name: '',
};

const columsPrograms: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Nombre',
  },
  {
    field: 'priority',
    headerName: 'Prioridad',
  },
  {
    field: 'date_created',
    headerName: 'Fecha de Creación',
  },
  {
    field: 'action',
    headerName: 'Acción',
  },
];
export {programInitialValues, columsPrograms, priorities};
