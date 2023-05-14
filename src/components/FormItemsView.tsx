import { ChangeEvent, useState } from "react";
import { Item, ItemsState } from "../types";

type Props = {
    handler : ({ product, price, quantity }: Item) => void
}

const FormItemsView = ({handler} : Props) => {


    const [formItemsState, setFormItemsState] = useState<ItemsState>(
        {
            product: '',
            price: '',
            quantity: ''
        });

        const { product, price, quantity} = formItemsState;
        
        const onInputChange = ({ target: { name, value} } : ChangeEvent<HTMLInputElement>) => {

            console.log(name);
            console.log(value);
    
            setFormItemsState({
                ...formItemsState,
                [name] : value
            });
        }

        const onInvoiceItemsSubmit = ( ev : ChangeEvent<HTMLFormElement>) => {
            
            ev.preventDefault();

            // Parseo a Integer
            const intPrice = parseInt(price);
            const intQuantity = parseInt(quantity);

            if (Number.isNaN(intPrice)) {
                alert("Tipo de dato en precio incorrecto");
            } else if (Number.isNaN(intQuantity)) {
                alert("Tipo de dato en cantidad incorrecto");
            } else { 

                handler({
                    product: product,
                    price: parseInt(price),
                    quantity: parseInt(quantity)
                });
    
                
            }
            setFormItemsState(
                {
                    product: '',
                    price: '',
                    quantity: ''
                });
            
            
                //setCounter(counter + 1);
        }



  return ( 
    <>
    <form
                        action=""
                        className="w-20"
                        onSubmit={onInvoiceItemsSubmit}
                    >
                        <input
                            onChange={onInputChange}
                            type="text"
                            name="product"
                            value={product}
                            placeholder="Producto"
                            className="form-control m-3"
                        />
                        <input
                            onChange={onInputChange}
                            type="text"
                            name="price"
                            value={price}
                            placeholder="Precio"
                            className="form-control m-3"
                        />

                        <input
                            onChange={onInputChange}
                            type="text"
                            name="quantity"
                            value={quantity}
                            placeholder="Cantidad"
                            className="form-control m-3"
                        />
                        <button type="submit" className="btn btn-primary m-3">
                            Crear Item
                        </button>
                    </form>

    </>
  )
}

export default FormItemsView