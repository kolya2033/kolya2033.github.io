import { useDispatch } from 'react-redux'
import Form from '../form/Form'
import Modal from '../modal/Modal'
import { useTranslation } from 'react-i18next'

const TableView = ({onFormChange, formActive, onModalChange, modalActive, deletClient, openModal, listSortId, listSortName, listSortUsername,  listSortCompany, list, selectClient, dragStartHandler, dragEndHandler, dragOverHandler, dropHandler, clientId}) => {

    const dispatch = useDispatch()
    const {t} = useTranslation()
    return (
        <div className='table'>
            <Form 
                onFormChange={onFormChange} 
                formActive={formActive}/>

            <Modal 
                onModalChange={onModalChange} 
                modalActive={modalActive}/>
                
            <div className='tableBtn'>
                <button className='btn' onClick={() => onFormChange(true)}>{t("table.btnAdd")}</button>
                <button className='btn' onClick={() => dispatch(deletClient(clientId))}>{t("table.btnDelet")}</button>
            </div>
            <br />
            <div className='tableBtn'>
                <button className='btn' onClick={() => openModal('name')}>{t("table.btnName")}</button>
                <button className='btn' onClick={() => openModal('username')}>{t("table.btnUsername")}</button>
                <button className='btn' onClick={() => openModal('company')}>{t("table.btnCompany")}</button>
            </div>
            
            <table className="table_clients">
                <tr>
                    <td className="table_base" onClick={() => dispatch(listSortId())}>{t("table.id")}</td>
                    <td className="table_base" onClick={() => dispatch(listSortName())}>{t("table.name")}</td>
                    <td className="table_base" onClick={() => dispatch(listSortUsername())}>{t("table.username")}</td>
                    <td className="table_base" onClick={() => dispatch(listSortCompany())}>{t("table.company")}</td>
                </tr>
                {
                    list.map((item) => (
                        <tr 
                            onDragStart={(e) => dragStartHandler(e, item)}
                            onDragLeave={(e) => dragEndHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dropHandler(e, item)}
                            draggable={true} 
                            className={`cleint ${item.id === clientId ? "action" : ''}`}
                            key={item.id} 
                            onClick={() => selectClient(item)}>
                            <td className="cleint_item">{item.id}</td>
                            <td className="cleint_item">{item.name}</td>
                            <td className="cleint_item">{item.username}</td>
                            <td className="cleint_item">{item.company.name}</td>
                        </tr>
                    ))
                }
            </table>
        </div> 
    )

}

export default TableView