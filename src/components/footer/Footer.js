import React, { Component } from 'react'
import FooterView from './FooterView'

class Footer extends Component {
    state = {
        design: 'https://freebiesbug.com/psd-freebies/tajam-psd-website-template-for-agencies/',
        github: 'https://github.com/kolya2033'
    }

    render() {
        const {design, github} = this.state
        return (
            <FooterView design={design} github={github}/>
        )
    }
}

export default Footer