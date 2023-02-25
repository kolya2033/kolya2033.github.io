import React, { Component } from 'react'

class FooterView extends Component {
    render() {
        return (
            <>
                <footer className="project_footer">
                    <p className="author">
                        Игнатенко Николай <br></br>
                        ссылка на оригинал дизайна: {this.props.design} <br></br>
                        ссылка на github аккаунт: {this.props.github}
                    </p>
                </footer>
            </>
        )
    }
}

export default FooterView