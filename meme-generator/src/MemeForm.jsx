import {useState} from 'react';
import './MemeForm.css';
import {useDispatch} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

const MemeForm = () => {
    let initialState = {
        img: "",
        topText: "",
        bottomText: ""
    }
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD', payload: {...formData, id: uuidv4()}});
        setFormData(initialState);
    }

    return (
        <form  onSubmit={handleSubmit}>
            <label htmlFor="img">Image URL:
                <input type="text" name="img" id="img" value={formData.img} onChange={handleChange}/>
            </label>
            <label htmlFor="topText">Top Text:
                <input type="text" name="topText" id="topText" value={formData.topText} onChange={handleChange}/>
            </label>
            <label htmlFor="bottomText">Bottom Text:
                <input type="text" name="bottomText" id="bottomText" value={formData.bottomText} onChange={handleChange}/>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default MemeForm;