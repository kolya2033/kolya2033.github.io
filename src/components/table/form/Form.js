import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormView from './FormView'
// import { addNewClient } from '../../../store/action/clientsAction'
import withForm from '../../hoc/withForm'
import { addNewClient } from '../../../store/reducers/clientsReducerSlice'

const  Form = (props) => {

    const dispatch = useDispatch()
    const {list} = useSelector(store => store)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [companyName, setCompanyName] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const modList = [...list]
        let count = 0
        modList.forEach(item => item.id > count? count = item.id: count)
        dispatch(addNewClient({
            id: count + 1,
            order: modList.length + 1,
            name: name,
            username: username,
            company: {
                name: companyName
            }
        }));
        setName('')
        setUsername('')
        setCompanyName('')
        props.onFormChange(false);
    }

    const onItemChange = (item, e) => {
        switch (item) {
            case 'name':
                setName(e.target.value)
            break;
            case 'username':
                setUsername(e.target.value)
            break;
            case 'company':
                setCompanyName(e.target.value)
            break;
            default:
                break;
        }
    }

    const {onFormChange, formActive} = props
    return (
        <FormView name={name} username={username} companyName={companyName} onFormChange={onFormChange} onSubmit={onSubmit} onItemChange={onItemChange} formActive={formActive}/>
    )
}

export default withForm(Form) 