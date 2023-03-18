import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalView from './ModalView'
import withModal from '../../hoc/withModal'
import { changeClient } from '../../../store/reducers/clientsReducerSlice'

const Modal = (props) => {

    const dispatch = useDispatch() 
    const [value, setValue] = useState('')

    const {list, modalProperty, clientId} = useSelector(store => store)

    const onItemChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let modList = [...list]
        switch (modalProperty) {
            case 'name':
            case 'username':
                modList = modList.map(item => item.id === clientId ? {...item, [modalProperty]: value} : item)
                break;
            case 'company':
                modList = modList.map(item => item.id === clientId ? {...item, company:{...item.company, name: value}} : item)
            default:
                break;
        }
        dispatch(changeClient(modList));
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
