import Modal from "./Modal";
import {useState} from 'react';
import './editTask.css';
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../firebase';

function EditTask({open, onClose, toEditTitle, toEditDescription, id}) {

  const [title, setTitle] = useState(toEditTitle);
  const [description, setDescription] = useState(toEditDescription);

  /* function to update document in firestore */

  const handleUpdate = async (event) => {
    event.preventDefault()
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await updateDoc(taskDocRef, {
        title: title,
        description: description
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
    <Modal modalLable='Edit Task' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editTask' name='updateTask'>
        <input
          type='text'
          name='title'
          onChange={handleInputChange}
          value={title}/>
        <textarea onChange={handleDescChange} value={description}></textarea>
        <button type='submit'>Update</button>
      </form>
    </Modal>
  )
}

export default EditTask;
