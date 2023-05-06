import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {arrowDownSelectClient, arrowUpSelectClient, deletClient,addSortValue, listSortCompany, listSortId, listSortName, listSortUsername, onDragStartHandler, onDropHandler, onModalProperty, selectClient} from '../../../store/reducers/clientsReducerSlice'
import TableView from './TableView'
import {takeClientId, takeClientOrder, takeSortList } from '../../../store/reducers/selectors'
import asyncListLoaded from '../../../store/async/apiTable'
import { useTranslation } from 'react-i18next'

const Table = () => {

    const dispatch = useDispatch()

    const [modalActive, setModalActive] = useState(false)
    const [formActive, setFormActive] = useState(false)

    const list = useSelector(takeSortList)
    const clientId = useSelector(takeClientId)
    const clientOrder = useSelector(takeClientOrder)
    const error = useSelector(state => state.error)
    const loading = useSelector(state => state.loading)

    const {t} = useTranslation()

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

    if (loading) {
        return (
            <div className='loading'>{t("loading.loading")}</div>
        )
    }

    if (error) {
        return (
            <div className='loading error'>{t("loading.error")}</div>
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
            addSortValue={addSortValue}
            // listSortId={listSortId}
            // listSortName={listSortName}
            // listSortUsername={listSortUsername}
            // listSortCompany={listSortCompany}
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