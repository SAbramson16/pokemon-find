

function Card(props) {
  return (
    <>
      <div>
        <h2 className="m-5 text-3xl">{props.heading}</h2>
      </div>
      <div>{props.children}</div>
    </>
  )
}

export default Card;