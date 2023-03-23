import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ModalView from './ModalView'
import { changeClient } from '../../../store/reducers/clientsReducerSlice'

const Modal = (props) => {

    const dispatch = useDispatch() 
    const [value, setValue] = useState('')

    const onItemChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(changeClient(value));
        props.onModalChange(false);
        setValue('')
    }

    const {modalActive, onModalChange} = props
    return (
        <ModalView 
            modalActive={modalActive} 
            onEsc={() => onModalChange(false)} 
            onSubmit={onSubmit} 
            onItemChange={onItemChange} 
            value={value}/>
    )

}

export default Modal
