import { Invoice } from "../types";

const invoice : Invoice = {
  id: 10,
  name: "Componentes PC",
  client: {
    name: "Pepe",
    lastName: "Doe",
    address: {
      country: "USA",
      city: "Los Angeles",
      street: "One Stree",
      number: 12,
    }
  },
  company: {
    name: "New Egg",
    fiscalNumber: 12454321,
  },
  items: [
    {
      id: 1,
      product: "Cpu Intel i7",
      price: 499,
      quantity: 1
    },
    {
      id: 2,
      product: "Corsair Keyboard Mecánico",
      price: 150,
      quantity: 2
    },{
      id: 3,
      product: "Monitor ASUS",
      price: 350,
      quantity: 1
    }
]
};

export default invoice
