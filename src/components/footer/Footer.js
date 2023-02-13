import React, { Component } from 'react'

class Footer extends Component {
    state = {
        design: 'https://freebiesbug.com/psd-freebies/tajam-psd-website-template-for-agencies/',
        github: 'https://github.com/kolya2033'
    }

    render() {
        const {design, github} = this.state
        return (
            <>
                <footer className="project_footer">
                    <p className="author">
                        Игнатенко Николай <br></br>
                        ссылка на оригинал дизайна: {design} <br></br>
                        ссылка на github аккаунт: {github}
                    </p>
                </footer>
            </>
        )
    }
}

export default Footer