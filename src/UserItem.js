import Modal from "./Modal"

function TaskItem({onClose, open, name, mobile}) {

  return (
    <Modal modalLable='User Details' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h2>{name}</h2>
        <p>{mobile}</p>
      </div>
    </Modal>
  )
}

export default TaskItem
