import { useState } from 'react'

const AddItem = ({ list, setList, isActive, setIsActive }) => {
  const initialState = { name: '', details: '', amount: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setList([...list, formValues])
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
        </form>
      </section>
    </>
  )
}

export default AddItem
