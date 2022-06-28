import {useState} from 'react'
import UserItem from './UserItem'
import EditUser from './EditUser'
import {useUpdateUserMutation,useDeleteUserMutation} from './services/taskApi';

function Task({id, name, mobile, completed}) {

  const [checked, setChecked] = useState(completed)
  const [open, setOpen] = useState({edit:false, view:false})
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteTask = (e) => {
    e.preventDefault();
    deleteUser(id);
    handleClose();
  };
  
  const handleClose = () => {
    setOpen({edit:false, view:false})
  }
  const handleUpdateTask = (e) => {
    e.preventDefault();
    const task = {
      name,
      mobile,
      completed: checked,
      id
    };
    updateUser(task);
  }
  return (
    <div className={`task ${checked && 'task--borderColor'}`}>
      <div>
        <input 
          id={`checkbox-${id}`} 
          className='checkbox-custom'
          name="checkbox" 
          checked={checked} 
          onChange={handleUpdateTask}
          type="checkbox" />
        <label 
          htmlFor={`checkbox-${id}`} 
          className="checkbox-custom-label" 
          onClick={() => setChecked(!checked)} ></label>
      </div>
      <div className='task__body'>
        <h2>{name}</h2>
        <p>{mobile}</p>
        <div className='task__buttons'>
          <div className='task__deleteNedit'>
            <button 
              className='task__editButton' 
              onClick={() => setOpen({...open, edit: true})}>
              Edit
            </button>
            <button className='task__deleteButton' onClick={handleDeleteTask}>Delete</button>
          </div>
          <button 
            onClick={() => setOpen({...open, view: true})}>
            View
          </button>
        </div>
      </div>

      {open.view &&
        <UserItem 
          onClose={handleClose} 
          name={name} 
          mobile={mobile} 
          open={open.view} />
      }

      {open.edit &&
        <EditUser 
          onClose={handleClose} 
          toEditTitle={name} 
          toEditDescription={mobile} 
          open={open.edit}
          id={id} />
      }

    </div>
  )
}

export default Task