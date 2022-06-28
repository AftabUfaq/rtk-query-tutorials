import Modal from "./Modal"
import {useState} from 'react'
// src/AddTask.js
import { useAddUserMutation } from "./services/taskApi";

function AddUser({onClose, open}) {

  const [name, setTitle] = useState('')
  const [mobile, setDescription] = useState('')
  const [addUser] = useAddUserMutation();
  const handleAddTask = async (e) => {
    e.preventDefault();
    const user = {
      name,
      mobile,
      completed: false,
      id: Math.random()
    };
    await addUser(user);
    onClose();
  };
  return (
    <Modal modalLable='Add User' onClose={onClose} open={open}>
      <form className='addTask' name='addTask' onSubmit={handleAddTask}>
        <input 
          type='text' 
          name='name' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={name}
          placeholder='Enter name'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter mobile number'
          value={mobile}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddUser
