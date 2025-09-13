

const MDModal = ( {title, content, closeFunction}) => {
  return (
    <section>
        <div>{title}</div>
        <div>{content}</div>
        <button onClick={closeFunction}>Close</button>
    </section>    
  )
}

export default MDModal