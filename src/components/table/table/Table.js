import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listLoaded,
        deletClient,
        listSortCompany,
        listSortId,
        listSortName,
        listSortUsername,
        onDragStartHandler,
        onDropHandler,
        onModalProperty,
        selectClient } from '../../../store/action/clientsAction'
import TableView from './TableView'

const Table = () => {

    const dispatch = useDispatch()

    const [modalActive, setModalActive] = useState(false)
    const [formActive, setFormActive] = useState(false)

    const {list, clientId, clientOrder, currentClient} = useSelector(state=> state)

    useEffect(() => {
        dispatch(listLoaded())
    }, [])
    useEffect(() => {
        window.addEventListener('keydown', onkeyDown)
        return function() {
            window.removeEventListener('keydown', onkeyDown)
        }
    })

    const onkeyDown = (e) => {
        if ((e.key === 'ArrowDown') && clientOrder < list.length) {
            let id
            list.forEach(item => {
                if(item.order === clientOrder + 1){
                    id =  item.id
                }
            })
            dispatch(selectClient(id, clientOrder + 1))
        } if ((e.key === 'ArrowUp') && clientOrder > 1) {
            let id 
            list.forEach(item => {
                if(item.order === clientOrder - 1){
                    id =  item.id
                }
            })
            dispatch(selectClient(id, clientOrder - 1))
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
        let modList = [...list]
        modList = modList.map(i => {
            if(i.id === item.id) {
                return {...i, order: currentClient.order}
            }
            if(i.id === currentClient.id) {
                return {...i, order: item.order}
            }
            return i
        })
        modList.sort((a, b) => a.order > b.order ? 1 : -1)
        dispatch(onDropHandler(modList, item))
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
            selectClient={selectClient}
            dragStartHandler={dragStartHandler}
            dragEndHandler={dragEndHandler}
            dragOverHandler={dragOverHandler}
            dropHandler={dropHandler}
            clientOrder={clientOrder}
            />
    )
}

export default Table