import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {arrowDownSelectClient, arrowUpSelectClient, deletClient, listLoaded, listSortCompany, listSortId, listSortName, listSortUsername, onDragStartHandler, onDropHandler, onModalProperty, selectClient} from '../../../store/reducers/clientsReducerSlice'
import TableView from './TableView'
import axios from 'axios'

const asyncListLoaded = () =>  {
    return async (dispatch) => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        const response = res.data.map((item, i) => ({...item, order: i + 1}))
        dispatch(listLoaded(response))
    }
}

const Table = () => {

    const dispatch = useDispatch()

    const [modalActive, setModalActive] = useState(false)
    const [formActive, setFormActive] = useState(false)

    const {list, clientId, clientOrder} = useSelector(state=> state)

    useEffect(() => {
        dispatch(asyncListLoaded())
    }, [])
    useEffect(() => {
        window.addEventListener('keydown', onkeyDown)
        return function() {
            window.removeEventListener('keydown', onkeyDown)
        }
    })

    const onkeyDown = (e) => {
        if ((e.key === 'ArrowDown') && clientOrder < list.length) {
            let client = list.find(item => item.order === clientOrder + 1)
            dispatch(arrowDownSelectClient(client.id))
        } if ((e.key === 'ArrowUp') && clientOrder > 1) {
            let client = list.find(item => item.order === clientOrder - 1)
            dispatch(arrowUpSelectClient(client.id))
        }
    }

    const onFormChange = (bool) => {
        setFormActive(bool)
    }
    
    const onModalChange = (bool) => {
        setModalActive(bool)
    }

    const openModal = (property) => {
        setModalActive(true)
        dispatch(onModalProperty(property))
    }

    const dragStartHandler = (e, item) => {
        dispatch(onDragStartHandler(item))
    }

    const dragEndHandler = (e) => {
    
    }

    const dragOverHandler = (e) => {
        e.preventDefault()
    }

    const dropHandler = (e, item) => {
        e.preventDefault()
        dispatch(onDropHandler(item))
    }
    

    return (
        
        <TableView 
            onFormChange={onFormChange} 
            formActive={formActive}  
            onModalChange={onModalChange} 
            modalActive={modalActive}
            deletClient={deletClient}
            openModal={openModal}
            listSortId={listSortId}
            listSortName={listSortName}
            listSortUsername={listSortUsername}
            listSortCompany={listSortCompany}
            list={list}
            clientId={clientId}
            selectClient={(item) => dispatch(selectClient({clientId: item.id, clientOrder: item.order}))}
            dragStartHandler={dragStartHandler}
            dragEndHandler={dragEndHandler}
            dragOverHandler={dragOverHandler}
            dropHandler={dropHandler}
            clientOrder={clientOrder}
            />
    )
}

export default Table