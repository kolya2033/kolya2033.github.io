import withEsc from '../../hoc/withEsc'

const FormView = ({name, username, companyName, onItemChange, onEsc, formActive, onSubmit}) => {
    return (
        <div  className={formActive ? "form active" : "form"} onClick={onEsc}>
            <form 
                onClick={e => e.stopPropagation()}
                className="form_content"
                onSubmit={onSubmit}>
                <h3 className='form_title' >name</h3>
                <input 
                    className="form_inputt"
                    type="text" 
                    name="name"
                    value={name}
                    onChange={(e) => onItemChange('name' ,e)}/>

                <h3 className='form_title' >username</h3>
                <input 
                    className="form_inputt"
                    type="text" 
                    name="username"
                    value={username}
                    onChange={(e) => onItemChange('username' ,e)}/>

                <h3 className='form_title'>company</h3>
                <input 
                    className="form_inputt"
                    type="text" 
                    name="company"
                    value={companyName}
                    onChange={(e) => onItemChange('company' ,e)}/>
                
                <button 
                    type="submit"
                    className="btn">Subscribe</button>
            </form>
        </div>
    )
    
}

export default withEsc(FormView)