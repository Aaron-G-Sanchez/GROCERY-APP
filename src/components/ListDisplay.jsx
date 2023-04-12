import { useState, useEffect } from 'react'
import AddItem from './AddItem'

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
                <li className="item">{item?.name}</li>
              </div>
            ))}
            <div className="item-container">
              <input
                type="checkbox"
                className="checkbox add-item"
                checked={false}
                onChange={() => setIsActive(!isActive)}
              />
              {isActive ? (
                <AddItem
                  list={list}
                  setList={setList}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />
              ) : null}
            </div>
          </ul>
        </section>
      </section>
    </>
  )
}

export default ListDisplay
