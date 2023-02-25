import React, { Component } from 'react'
import IntroView from './IntroView';

class Intro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nav: ['Home', 'About', 'Expertise', 'Teams', 'Works', 'People say', 'Contact']
        }
    }

    render() {
        const {fixedHeader, isActive, handleToggle} = this.props

        return (
            <>
                <IntroView fixedHeader={fixedHeader} isActive={isActive} handleToggle={handleToggle} nav={this.state.nav}/>

            </>
        )
    }
}

export default  Intro