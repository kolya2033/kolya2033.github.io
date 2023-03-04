import React, { Component } from 'react'
import IntroView from './IntroView';

class Intro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nav: ['Home', 'About', 'Expertise', 'Teams', 'Works', 'People say', 'Contact']
        }
    }

    imgLoaded = () =>  console.log('successful upload')

    imgLoadingError = () => console.log('loading error')

    render() {
        const {fixedHeader, isActive, handleToggle} = this.props
        const {nav} = this.state

        return (
            <IntroView 
                fixedHeader={fixedHeader} 
                isActive={isActive} 
                handleToggle={handleToggle} 
                nav={nav}
                imgLoaded={this.imgLoaded}
                imgLoadingError={this.imgLoadingError}
                />
        )
    }
}

export default  Intro