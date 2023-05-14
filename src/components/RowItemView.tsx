import { Item } from "../types";

interface Props {

    item : Item,
    deleteHandler : (id: number) => void
}

const RowItemView = ({item, deleteHandler} : Props) => {

    const {id, product, price, quantity} = item;
  return (
    <>
        <tr key={product}>
                  <td>{product}</td>
                  <td>{price}</td>
                  <td>{quantity}</td>
                  <td><button className="btn btn-danger" onClick={ () => deleteHandler(id!)}>Eliminar</button></td>
        </tr>
    </>
  )
}

export default RowItemView