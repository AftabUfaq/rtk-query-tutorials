import User from './User'
import AddUser from './AddUser'
import {useState} from 'react'
import { useUsersQuery } from "./services/taskApi";
function TaskManager() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const { data, error, isLoading, isSuccess } = useUsersQuery();
  return (
    <div className='taskManager'>
      <header>User Manager</header>
      <div className='taskManager__container'>
        <button 
          onClick={() => setOpenAddModal(true)}>
          Add user +
        </button>

        <div className='taskManager__tasks'>
      
          <div className='isErrorIsLoading'>
            {error && <p>An error occured</p>}
            {isLoading && <p>Loading...</p>}
          </div>
          {isSuccess && (
            <>
              {data.map((task) => (
                <User
                  id={task.id}
                  key={task.id}
                  completed={task.completed}
                  name={task.name} 
                  mobile={task.mobile}
                />
              ))}
            </>
          )}
        </div>
      </div>

      {openAddModal &&
        <AddUser onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    </div>
  )
}

export default TaskManager
