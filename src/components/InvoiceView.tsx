
interface Props {
    id: number,
    name: string
}



const InvoiceView = ({id, name}: Props) => {
  return (

    <>
        <ul className= "list-group">
            <li className='list-group-item'>Id: {id}</li>
            <li className='list-group-item'>Name: {name}</li>
        </ul>
    </>
  )
}

export default InvoiceView