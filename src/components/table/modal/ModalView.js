import { useTranslation } from 'react-i18next'
import withEsc from '../../hoc/withEsc'

const ModalView = ({modalActive, onEsc, onSubmit, onItemChange, value}) =>  {
    const {t} = useTranslation()
    return (
        <div  className={modalActive ? "modal active" : "modal"} onClick={onEsc}>
            <form 
                onClick={e => e.stopPropagation()}
                className="modal_content"
                onSubmit={onSubmit}>
                <input 
                    className="modal_inputt"
                    type="text" 
                    name="property"
                    value={value}
                    onChange={(e) => onItemChange(e)}/>
                <button 
                    type="submit"
                    className="btn">{t("modal.btn")}</button>
            </form>
        </div> 
    )
    
}

export default withEsc(ModalView)