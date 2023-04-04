import { useState } from 'react'

const AddItemModal = ({ list, setList, isActive, setIsActive }) => {
  const initialState = { name: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setList([...list, formValues.name])
    setFormValues(initialState)
    setIsActive(!isActive)
  }
  return (
    <>
      <section className="new-item-modal">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="form-item-name"
            name="name"
            type="text"
            value={formValues.name}
            placeholder="New Item"
          />
          <div className="modal-submit">
            <button type="submit">Add</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddItemModal
