import { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <h1 className="project_title">Tajam</h1>
                    <p className="project_description">
                        Описание проекта <br></br>
                        Tajam — это одностраничный шаблон дизайна для агентств,  созданный с помощью Photoshop. Эта халява включает в себя чистую целевую страницу, состоящую из разделов (о, команда, работы и т. д.). Бесплатный PSD, выпущенный Аджи Дармаван.
                    </p>
                </header>
            </>
        )
    }
}

export default Header