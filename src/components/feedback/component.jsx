import {useReducer} from 'react'
import {Rating} from '../rating/component.jsx'

function reducer(state, {type, payload}) {
    switch (type) {
        case 'name':
            return {...state, name: payload}
            break;
        case 'text':
            return {...state, text: payload}
            break;
        case 'rating':
            return {...state, rating: payload}
            break;
        default:
            return state
    }
}

const initForm = {
    name: '',
    text: '',
    rating: null
}

export const Feedback = () => {
    const [state, dispatch] = useReducer(reducer, initForm);

    const handleText = ev => dispatch({type: 'text', payload: ev.target.value});
    const handleName = ev => dispatch({type: 'name', payload: ev.target.value});
    const handleRating = ev => dispatch({type: 'rating', payload: Number(ev.target.value)});
    const handleSubmit = () => console.log(JSON.stringify(state));

    return <form action="#" onSubmit={handleSubmit} >
        <div>
            <label htmlFor="name">Name</label>
            <input id="name" onChange={handleName} type="text" value={state.name}/>
        </div>
        <div>
            <label htmlFor="text">Text</label>
            <textarea id="text" onChange={handleText}></textarea>
        </div>
        <div>
            <label>Rating</label>
            <Rating range={[1, 2, 3, 4, 5]} handler={handleRating} current={state.rating}/>
        </div>
        <div>
            <button type="submit">Save</button>
        </div>
    </form>
}
