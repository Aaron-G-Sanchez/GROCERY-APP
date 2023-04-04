import { useState } from 'react'
import AddItemModal from './AddItemModal'

const ListDisplay = () => {
  const [list, setList] = useState(['Eggs', 'Bacon', 'Ham'])
  const [isActive, setIsActive] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setIsActive(!isActive)
  }

  console.log(isActive)

  return (
    <>
      <section className="list-container">
        <h2>My List</h2>
        <section className="list-view">
          <section className="item-containter">
            {list?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </section>

          <button onClick={handleClick}>Add Item</button>
        </section>

        {isActive ? (
          <AddItemModal
            list={list}
            setList={setList}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        ) : null}
      </section>
    </>
  )
}

export default ListDisplay
