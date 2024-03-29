import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {arrowDownSelectClient, arrowUpSelectClient, deletClient, listSortCompany, listSortId, listSortName, listSortUsername, onDragStartHandler, onDropHandler, onModalProperty, selectClient} from '../../../store/reducers/clientsReducerSlice'
import TableView from './TableView'
import {selectClientId, selectClientOrder, selectlist } from '../../../store/reducers/selectors'
import { useTranslation } from 'react-i18next'
import { clientsApi } from '../../../services/clientsquery'

const Table = () => {

    const dispatch = useDispatch()

    const [modalActive, setModalActive] = useState(false)
    const [formActive, setFormActive] = useState(false)

    const { isError, isLoading, error} = clientsApi.useFetchAllClientsQuery('')
    const list = useSelector(selectlist)
    const clientId = useSelector(selectClientId)
    const clientOrder = useSelector(selectClientOrder)

    const {t} = useTranslation()

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

    if (isLoading) {
        return (
            <div className='loading'>{t("loading.loading")}</div>
        )
    }

    if (isError) {
        return (
            <div className='loading error'>{t("loading.error")}: "{error.status}"</div>
        )
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
            />
    )
}

export default Table