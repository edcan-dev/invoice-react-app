import { useState, useEffect } from "react";
import getInvoice, { calculateTotal } from "./services/getInvoice";
import InvoiceView from "./components/InvoiceView";
import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import ItemsTableView from "./components/ItemsTableView";
import TotalView from "./components/TotalView";
import { Invoice, Item } from "./types"; // Archivo de definición de tipos
import FormItemsView from "./components/FormItemsView";

const invoiceInitial = {
  client: {
    address: {
      city: "",
      country: "",
      number: 0,
      street: "",
    },
    lastName: "",
    name: "",
  },
  company: {
    fiscalNumber: 0,
    name: "",
  },
  id: 0,
  items: [],
  name: "",
};

const InvoiceApp = () => {
  // Destructuración del cliente
  const [invoice, setInvoice] = useState<Invoice>(invoiceInitial);

  const [isActive, setIsActive] = useState<boolean>(false);

  const [items, setItems] = useState<Array<Item>>([]);

  const [counter, setCounter] = useState<number>(4);

  const [total, setTotal] = useState<number>(0);

  const { id, name, client, company } = invoice;

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    console.log("LOs items ha sido modificado");
    setTotal(calculateTotal(items));
  }, [items]);

  const handlerAddItems = ({ product, price, quantity } : Item) : void => {
    setItems([
      ...items,
      {
        id: counter,
        product: product,
        price: price,
        quantity: quantity,
      },
    ]);
    setCounter(counter + 1);
  };

  const deleteItemsHandler = (id : number) => {
    setItems(items.filter(item => item.id !== id));

  }


  const onActiveForm = () => {
    setIsActive(!isActive);    
  }

  return (
    <>
      <div className="card">
        <div className="container card-header">
          <h1>Ejemplo Factura</h1>
          <InvoiceView name={name} id={id} />

          <div className="row my-5">
            <ClientView client={client} title="DATOS DEL CLIENTE" />
            <CompanyView company={company} title="DATOS DE LA EMPRESA" />
          </div>
          <ItemsTableView items={items} deleteHandler={deleteItemsHandler}/>
          <TotalView total={total} />
          <button  className="btn btn-secondary" onClick={onActiveForm} >
            {isActive ? 'Ocultar Form' : 'Agregar Item'}
            </button>
          { !isActive || <FormItemsView handler={handlerAddItems}/>}

        </div>
      </div>
    </>
  );
};

export default InvoiceApp;
