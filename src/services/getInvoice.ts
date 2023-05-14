import invoice from "../data/invoice"
import { Invoice, Item } from "../types";

const getInvoice = () : Invoice => {
    //console.log(invoice);

    let total = 0;

    invoice.items.forEach((item) => {
        total += item.price* item.quantity;
    })


    return { ...invoice, total};
}

export default getInvoice

export const calculateTotal = (items : Array<Item> ) => {
    
    let total = 0;

    items.forEach((item) => {
        total += item.price * item.quantity;
    });

    return total;
}