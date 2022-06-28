import Modal from "./Modal"
import {useState} from 'react'
import { useUpdateUserMutation } from "./services/taskApi";

function EditUser({open, onClose, toEditTitle, toEditDescription, id}) {

  const [name, setTitle] = useState(toEditTitle)
  const [mobile, setDescription] = useState(toEditDescription)
  const [updateUser] = useUpdateUserMutation();
  const handleUpdateTask = (e) => {
    e.preventDefault();
    const user = {
      name,
      mobile,
      completed: false,
      id
    };
    updateUser(user);
    onClose();
  };

  return (
    <Modal modalLable='Edit user' onClose={onClose} open={open}>
      <form className='editTask' name='updateTask' onSubmit={handleUpdateTask}>
        <input 
          type='text' 
          name='Name' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={name}/>
        <textarea onChange={(e) => setDescription(e.target.value)} value={mobile}></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditUser
