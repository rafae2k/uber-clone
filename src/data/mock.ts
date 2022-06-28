export type CarsClassesType = typeof CarsClasses[0];

export const CarsClasses = [
  {
    id: 'UberX-123',
    title: 'UberX',
    multiplier: 1,
    image: require('../../assets/images/cars/UberX.webp'),
  },
  {
    id: 'UberXL-456',
    title: 'Uber XL',
    multiplier: 1.5,
    image: require('../../assets/images/cars/UberXL.webp'),
  },
  {
    id: 'UberLUX-789',
    title: 'Uber Black',
    multiplier: 2,
    image: require('../../assets/images/cars/UberLux.webp'),
  },
];

export type RecentRidesType = typeof RecentRides[0];

export const RecentRides = [
  {
    id: '1',
    title: 'Home',
    address: 'Rua dos Patos, 123 - Patolandia - São Paulo - SP, Brasil',
  },
  {
    id: '2',
    title: 'Work',
    address: 'Rua Augusta, 532 - Consolação, São Paulo - SP, Brasil',
  },
  {
    id: '3',
    title: 'Parque do Ibirapuera',
    address: 'Av. Pedro Álvares Cabral - Vila Mariana, São Paulo - SP, Brasil',
  },
];
