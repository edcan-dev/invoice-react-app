export type Invoice = {
    id: number,
    name: string,
    client: {
      name: string,
      lastName: string,
      address: {
        country: string,
        city: string,
        street: string,
        number: number,
      }
    },
    company: {
      name: string,
      fiscalNumber: number,
    },
    items: Array<Item>,
    total? : number
};

export type ItemsState = {
  product: string,
  price: string,
  quantity: string
};

export type Item = {
  id?: number,
  product: string,
  price: number,
  quantity: number
}