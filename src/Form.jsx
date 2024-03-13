import { useState } from "react"
import { toast } from "react-toastify"

const Form = ({addItem}) => {
    const [newItem,setNewItem]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!newItem) {
          toast.error('provide something dumbass')
          return};
        addItem(newItem)
        setNewItem('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
        <input type="text" className="form-input" value={newItem} onChange={(e)=>{setNewItem(e.target.value)}}/>
        <button className="btn" type="submit">Add item</button>
        </div>
    </form>
  )
}
export default Form