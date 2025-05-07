import { ImageSourcePropType } from 'react-native';

export interface Holiday {
  name: string;
  date: string;
  image: ImageSourcePropType;
}

export const upcomingHolidays: Holiday[] = [
  {
    name: 'Día de Shōwa',
    date: '29 de abril de 2025',
    image: require('../../assets/images/showa_day.png'),
  },
  {
    name: 'Día de la Constitución',
    date: '3 de mayo de 2025',
    image: require('../../assets/images/constitution_day.png'),
  },
  {
    name: 'Día de la Naturaleza',
    date: '4 de mayo de 2025',
    image: require('../../assets/images/greenery_day.png'),
  },
  {
    name: 'Día de los Niños',
    date: '5 de mayo de 2025',
    image: require('../../assets/images/childrens_day.png'),
  },
  {
    name: 'Día del Mar',
    date: '21 de julio de 2025',
    image: require('../../assets/images/marine_day.png'),
  },
  {
    name: 'Día de la Montaña',
    date: '11 de agosto de 2025',
    image: require('../../assets/images/mountain_day.png'),
  },
];
