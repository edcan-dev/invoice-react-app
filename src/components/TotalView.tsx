
type Props = {
    total?: number
}

const TotalView = ({total} : Props) => {
  return (
    <>
        <div className='text-end'>
            <span className='badge bg-success'>{total}</span>
        </div>
    </>
  )
}

export default TotalView