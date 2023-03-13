import { useDispatch } from 'react-redux'
import Form from '../form/Form'
import Modal from '../modal/Modal'

const TableView = (props) => {

    const dispatch = useDispatch()
    
    const {
        onFormChange,
        formActive,
        onModalChange,
        modalActive,
        deletClient,
        openModal,
        listSortId,
        listSortName,
        listSortUsername,
        listSortCompany,
        list,
        selectClient,
        dragStartHandler,
        dragEndHandler,
        dragOverHandler,
        dropHandler,
        clientOrder,
        clientId} = props
    return (
        <div className='table'>
            <Form 
                onFormChange={onFormChange} 
                formActive={formActive}/>

            <Modal 
                onModalChange={onModalChange} 
                modalActive={modalActive}/>
                
            <div className='tableBtn'>
                <button className='btn' onClick={() => onFormChange(true)}>add new client</button>
                <button className='btn' onClick={() => dispatch(deletClient(list, clientId))}>delet client</button>
            </div>
            <br />
            <div className='tableBtn'>
                <button className='btn' onClick={() => openModal('name')}>change name</button>
                <button className='btn' onClick={() => openModal('username')}>change username</button>
                <button className='btn' onClick={() => openModal('company')}>change company</button>
            </div>
            
            <table className="table_clients">
                <tr>
                    <td className="table_base" onClick={() => dispatch(listSortId(list))}>id</td>
                    <td className="table_base" onClick={() => dispatch(listSortName(list))}>name</td>
                    <td className="table_base" onClick={() => dispatch(listSortUsername(list))}>username</td>
                    <td className="table_base" onClick={() => dispatch(listSortCompany(list))}>company</td>
                </tr>
                {
                    list.map((item, i) => (
                        <tr 
                            onDragStart={(e) => dragStartHandler(e, item)}
                            onDragLeave={(e) => dragEndHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dropHandler(e, item)}
                            draggable={true} 
                            className={`cleint ${item.order === clientOrder ? "action" : ''}`} 
                            key={i} 
                            onClick={() => dispatch(selectClient(item.id, item.order))}>
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