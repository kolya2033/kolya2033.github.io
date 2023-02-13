import React, { Component } from 'react'
import logo from '../../../assets/img/logo.png';

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
                <div className="intro">
                        <div className={`header ${fixedHeader ? "fixed" : null}`}>
                            <div className="header_inner">
                                <div className="header_logo">
                                    <img className="header_logo_img" src={logo} alt="Logo"></img>
                                    <div className="header_logo_title">tajam</div>

                                </div>

                                <div className={`nav ${isActive ? "active" : null}`}>
                                    {this.state.nav.map((item) => (
                                        <a href="#" className="nav_link">{item}</a>
                                    ))}
                                </div>

                                <button onClick={handleToggle} className={`nav_toggle ${isActive ? "active" : null}`} type="button">
                                    <span className="nav_toggle_item"></span>
                                </button>
                            </div>
                        </div>
                        <div className="container">
                            <div className="intro_inner">
                                <h1 className="intro_title">We Are Awesome Creative Agency</h1> 
                                <p className="intro_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
                                <a href="#" className="btn">learn more</a>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}

export default  Intro