import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ModalView from './ModalView'
import withModal from '../../hoc/withModal'
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
            onModalChange={onModalChange} 
            onSubmit={onSubmit} 
            onItemChange={onItemChange} 
            value={value}/>
    )

}

export default withModal(Modal)
