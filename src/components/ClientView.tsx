interface Props {
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
    title : string
}

const ClientView = ({client, title} : Props) => {

    const {name : clientName, lastName, address: { country, city , street, number}} = client;

  return (
    <>
    <div className='col'>
            <h3>{title}</h3>
            <ul className='list-group'>
              <li className="list-group-item active">{clientName} {lastName}</li>
              <li className="list-group-item">{city}, {country}</li>
              <li className="list-group-item">{street}</li>
              <li className="list-group-item">{number}</li>
            </ul>
    </div>

    </>
  )
}

export default ClientView