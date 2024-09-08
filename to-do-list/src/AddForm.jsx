import {useState} from 'react';
import './AddForm.css';

const AddForm = () => {
    const {formData, setFormData} = useState([]);

    const handleChange = (event) => {
        setFormData(event.target.value);
    }

    return (
        <form>
            <label htmlFor='todo'>Add To Do
                <input type='text' id='todo' name='todo' value={FormData.todo} onChange={handleChange}/>
            </label>
            <button>Add</button>
        </form>
    )
}

export default AddForm