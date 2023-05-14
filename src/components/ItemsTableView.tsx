import RowItemView from "./RowItemView"

type Item = {
        product: string,
        price: number,
        quantity: number
    }

interface Props {
    items: Array<Item>,
    deleteHandler : (id: number) => void
}

const ItemsTableView = ({items, deleteHandler} : Props) => {


  return (
    <>
    <div className='container'>
      <h4>Productos de la factura</h4>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
            {
              items.map( item =>{
                return <RowItemView  key={item.product} item={item} deleteHandler={deleteHandler}/>})
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ItemsTableView