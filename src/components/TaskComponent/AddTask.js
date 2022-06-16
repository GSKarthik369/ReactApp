import Modal from "./Modal";
import {useState} from 'react';
import './addTask.css';
import {db} from '../../firebase';
import {collection, addDoc, Timestamp} from 'firebase/firestore';

function AddTask({onClose, open}) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  /* function to add new task to firestore */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, 'tasks'), {
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now()
      })
      onClose();
    } catch (error) {
      alert(error);
    }
  }

  const handleInputChange = (event) => {
    return (
        setTitle(event.target.value.toUpperCase())
    );
  }

  const handleDescChange = (event) => {
      return (
          setDescription(event.target.value)
      );
  }

  return (
    <Modal modalLable='Add Task' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask' name='addTask'>
        <input
          type='text'
          name='title'
          onChange={handleInputChange}
          value={title}
          placeholder='Enter title'/>
        <textarea
          onChange={handleDescChange}
          placeholder='Enter task decription'
          value={description}></textarea>
        <button type='submit'>Done</button>
      </form>
    </Modal>
  )
}

export default AddTask;
