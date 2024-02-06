import React,{useRef} from 'react'
import Input from './input'
import Modal from './Modal'

function NewProject(props) {
  const modal = useRef()

const inputTitle = useRef()
const inputDescription = useRef()
const inputDueDate = useRef()



const handleSave = () => {
  const enteredTitle = inputTitle.current.value;
  const enteredDescription = inputDescription.current.value;
  const enteredDueDate = inputDueDate.current.value;
  
//validation
if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''  ){
  modal.current.open();
  return;
}


  props.onAdd({
    title: enteredTitle,
    description: enteredDescription,
    dueDate: enteredDueDate

  })
}



  return (

    <>
    <Modal ref={modal} buttonCaption='close'>
    <h2 className='text-xl font-bold text-stone-500 my-4'> ivalid input </h2>

    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className='flex items-center justify-end gap-4 my-4'>
     <li> <button className='text-stone-800 hover:text-stone-950' onClick={props.onCancel}>Cancel</button> </li>
     <li> <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
      onClick={handleSave}>Save</button> </li>
        </menu>
        <div>
           <Input type='text' label="Title" ref={inputTitle}  />
           <Input label="Description" textarea ref={inputDescription} />
           <Input type='date' label="Due Date" ref={inputDueDate}  />
        </div>
    </div>
    
    </>
  )
} 

export default NewProject