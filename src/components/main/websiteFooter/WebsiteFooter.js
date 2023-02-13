import React, { Component } from 'react'
import logo from '../../../assets/img/logo.png';

class WebsiteFooter extends Component {
    render() {
        return (
            <>
                <div className="footer">
                    <div className="container">
                        <div className="footer_items">
                            <div className="footer_item first">
                                <div className="footer_logo">
                                    <img className="footer_logo_img" src={logo} alt="Logo"></img>
                                    <h4 className="footer_logo_title">tajam</h4>
                                </div>
                                <p className="footer_text">lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit</p>
                            </div>
                            <div className="footer_item">
                                <h4 className="footer_title">our studio</h4>
                                <div className="footer_adres">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p>Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat
                                        11480 - Indonesia</p>
                                </div>
                                <div className="footer_phone">
                                    <i className="fa-solid fa-phone-flip"></i>
                                    <p>(+62) 21-2224 3333</p>
                                </div>
                            </div>
                            <div className="footer_item">
                                <h4 className="footer_title">stay in touch</h4>
                                <div className="footer_sub">
                                    <input type="text" placeholder="Subscribe our newsletter" className="footer_sub_input"></input>
                                    <a href="#" className="footer_sub_btn">
                                        <i className="fa-regular fa-paper-plane"></i>
                                    </a>
                                </div>
                                <div className="footer_social">
                                    <a href="#">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-dribbble"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-google-plus-g"></i>
                                    </a>
                                    <a href="#">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer_bottom">
                            <div className="footer_links">
                                <a href="#">Help</a>
                                <a href="#">Terms & condition</a>
                                <a href="#">Privacy</a>
                            </div>
                            <div className="footer_copyright">Copyright © 2015 - Tajem Creative</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default WebsiteFooter