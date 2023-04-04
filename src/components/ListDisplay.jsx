import { useState } from 'react'

const ListDisplay = () => {
  const [list, setList] = useState(['Eggs', 'Bacon', 'ham'])

  return (
    <>
      <section className="list-container">
        <h2>My List</h2>
        <section className="list-view">
          {list.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </section>
      </section>
    </>
  )
}

export default ListDisplay
