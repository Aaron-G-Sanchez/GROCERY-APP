import { useState, useEffect } from 'react'
import AddItemModal from './AddItemModal'

const ListDisplay = () => {
  const [list, setList] = useState([])
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const storedList = localStorage.getItem('list')
    if (storedList) {
      setList(JSON.parse(storedList))
    } else {
      console.log('no list yet')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const handleClick = (e) => {
    e.preventDefault()
    setIsActive(!isActive)
  }

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
