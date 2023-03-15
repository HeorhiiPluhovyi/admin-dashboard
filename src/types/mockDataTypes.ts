export interface MockData {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
}

export interface MockDataContacts {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}

export interface MockDataInvoices {
  id: number;
  name: string;
  email: string;
  cost: string;
  phone: string;
  date: string;
}

export interface MockTransactions {
  txId: string;
  user: string;
  date: string;
  cost: string;
}

export interface MockBarData {
  country: string;
  "hot dog": number;
  "hot dogColor": string;
  burger: number;
  burgerColor: string;
  kebab: number;
  kebabColor: string;
  donut: number;
  donutColor: string;
}

export interface MockPieData {
  id: string;
  label: string;
  value: number;
  color: string;
}

interface Data {
  x: string;
  y: number;
}

export interface MockLineData {
  id: string;
  color: string;
  data: Data[];
}

export interface MockGeographyData {
  id: string;
  value: number;
}

export interface GeoFeatures {

}
