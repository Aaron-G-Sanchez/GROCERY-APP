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
        <section className="list-view">
          <h2>My List</h2>
          {/* <input
            type="text"
            placeholder="My List"
            className="list-name"
          ></input> */}

          {/* CONVERT THIS INPUT INTO THE LIST NAME */}

          <ul className="list-wrapper">
            {list?.map((item, index) => (
              <div className="item-container" key={index}>
                <input type="checkbox" className="checkbox" />
                <li className="item">{item}</li>
              </div>
            ))}
            <div className="item-container">
              {/* <input type="checkbox" className="checkbox" /> */}
              <input
                type="text"
                className="new-item-input"
                placeholder="Add Item"
              />
            </div>
          </ul>

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
