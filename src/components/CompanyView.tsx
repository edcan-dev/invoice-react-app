interface Props {
    company :{
        name: string,
        fiscalNumber: number
    },
    title: string 
}


const CompanyView = ({company, title} : Props) => {
  return (
    <>
        <div className='col'>
            <h3>{title}</h3>
            <ul className='list-group'>
              <li className='list-group-item active'>{company.name}</li>
              <li className='list-group-item'>{company.fiscalNumber}</li>
            </ul>
          </div>
    </>
  )
}

export default CompanyView