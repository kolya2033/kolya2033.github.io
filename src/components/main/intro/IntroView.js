import logo from '../../../assets/img/logo.png';

import React, { Component } from 'react'

class IntroView extends Component {
    render() {
        const {nav, fixedHeader, isActive, handleToggle} = this.props
        return (
            <>
                <div className="intro">
                    <div className={`header ${fixedHeader ? "fixed" : ''}`}>
                        <div className="header_inner">
                            <div className="header_logo">
                                <img className="header_logo_img" src={logo} alt="Logo"></img>
                                <div className="header_logo_title">tajam</div>

                            </div>

                            <div className={`nav ${isActive ? "active" : null}`}>
                                {nav.map((item, i) => (
                                    <a key={i} href="#" className="nav_link">{item}</a>
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

export default IntroView
