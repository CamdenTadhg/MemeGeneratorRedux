import {useState} from 'react';
import {useDispatch} from 'react-redux';
import './AddForm.css';

const AddForm = () => {
    const [formData, setFormData] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        console.log('form changed');
        setFormData(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted')
        dispatch({type: 'ADD', payload: formData})
        setFormData('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>Add To Do
                <input type='text' id='todo' name='todo' value={formData} onChange={handleChange}/>
            </label>
            <button>Add</button>
        </form>
    )
}

export default AddForm