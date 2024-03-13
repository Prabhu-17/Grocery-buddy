import { useState } from "react";
import Form from './Form' 
import { nanoid } from "nanoid";
import Item from "./Item";
import { ToastContainer,toast } from "react-toastify";


const getLocalStorage=()=>{
let list=localStorage.getItem('list')
if(list){
  list=JSON.parse(localStorage.getItem('list'))
}
else{
  list=[]
}
return list;
}
const setLocalStorage=(items)=>{
  localStorage.setItem('list',JSON.stringify(items))
}
const App = () => {
  const [items,setItems]=useState(getLocalStorage())

  const addItem=(itemName)=>{
    const newName={

      name:itemName,
      completed:false,
      id:nanoid(),
    }
    const newNames = [...items, newName]
    setItems(newNames)
    setLocalStorage(newNames)
    toast.success('Item added to the list')
  }
  const removeItem=(itemId)=>{
    const newName=items.filter((item)=>item.id!==itemId)
    setItems(newName)
    setLocalStorage(newName)
    toast.success('Removed from the list')
  }
  const editItem=(itemId)=>{
      const newNames=items.map((item)=>{
        if (itemId===item.id) {
          const newName={...item,completed:!item.completed}
          return newName;
        }
        return item;
      })
      setItems(newNames)
      setLocalStorage(newNames)
  }
  return <section className="section-center">
    <ToastContainer position="top-center"/>
    <Form addItem={addItem}/>
    <Item items={items} removeItem={removeItem} editItem={editItem}/>
  </section>;
};

export default App;
