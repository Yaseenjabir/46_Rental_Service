interface Types {
  title: string;
  value: string;
  img?: string;
}

export const vehicleTypes: Types[] = [
  { title: "Mini Van", value: "miniVan" },
  { title: "Sedan", value: "sedan" },
  { title: "Suv", value: "suv" },
  { title: "Van", value: "van" },
  { title: "Bus", value: "bus" },
];

export const brands: Types[] = [
  { title: "Nissan Petrol", value: "nissanPetrol" },
  { title: "Land Cruiser", value: "landCruiser" },
  { title: "Toyota Prado", value: "prado" },
  { title: "Ranger Rover", value: "rangeRover" },
  { title: "GMC", value: "gmc" },
  { title: "Honda Odyssey", value: "hondaOdyssey" },
  { title: "Toyota Siana", value: "siana" },
  { title: "Mercedes S Class", value: "mercedes" },
];

export const locations: Types[] = [
  { title: "Dubai", value: "dubai" },
  { title: "Sharjah", value: "sharjah" },
  { title: "Alain", value: "alain" },
  { title: "Umm Al Quain", value: "ummAlQuain" },
  { title: "Abu Dhabi", value: "abuDhabi" },
  { title: "Fujairah", value: "fujairah" },
  { title: "Ras Al Khaima", value: "rasAlKhaima" },
];

export const ProjectVehicleTypes: Types[] = [
  {
    title: "Mini Van",
    value: "miniVan",
    img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-minivan.svg",
  },
  {
    title: "Sedan",
    value: "sedan",
    img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-sedan.svg",
  },
  {
    title: "Suv",
    value: "suv",
    img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-suv.svg",
  },
  {
    title: "Van",
    value: "van",
    img: "https://alweamtransport.com/assets/images/v-types/1699533779_alweam-icon-minivan.svg",
  },
  {
    title: "Bus",
    value: "bus",
    img: "https://alweamtransport.com/assets/images/v-types/1699534232_big-bus.svg",
  },
];
