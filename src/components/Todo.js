import { useState } from 'react';
import Modal from '../components/Modal';

let Todo = (props) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    function deleteHandler() {
        setIsModalOpen(true);
    }
    return (
        <div>
            <div className="todo-para card">
                <h2 className="card-title">
                    { props.title }
                </h2>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={deleteHandler} data-toggle="modal" data-target="#deleteModal">
                        Delete
                    </button>
                </div>
            </div>
            { isModalOpen && <Modal /> }
        </div>
    );
}

export default Todo;
