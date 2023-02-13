import React, { Component } from 'react'
import web from '../../../assets/img/expertise/WebDesignDevelopment.png';
import branding from '../../../assets/img/expertise/BrandingIdentity.png';
import mobile from '../../../assets/img/expertise/MobileApp.png';
import search from '../../../assets/img/expertise/SearchEngineOptimization.png';
import game from '../../../assets/img/expertise/GameDevelopment.png';
import love from '../../../assets/img/expertise/MadeWithLove.png';

class Expertise extends Component {
    render() {
        return (
            <>
                <div className="expertise">
                    <div className="container">
                        <h3 className="expertise_title">Expertise</h3>
                        <div className="expertise_text">Lorem ipsum dolor sit amet proin gravida nibh vel velit</div>
                        <div className="expertise_board">
                            <div className="expertise_board_item expertise_board_item--border-right-bottom">
                                <div className="expertise_board_item_img">
                                    <img src={web} alt="Web design & development"></img>
                                </div>
                                <h4 className="expertise_board_item_title">Web design & development</h4>
                                <div className="expertise_board_item_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
                            </div>
                            <div className="expertise_board_item expertise_board_item--border-right-bottom">
                                <div className="expertise_board_item_img">
                                    <img src={branding} alt="Branding identity"></img>
                                </div>
                                <h4 className="expertise_board_item_title">Branding identity</h4>
                                <div className="expertise_board_item_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
                            </div>
                            <div className="expertise_board_item expertise_board_item--border-bottom">
                                <div className="expertise_board_item_img">
                                    <img src={mobile} alt="Mobile app" ></img>
                                </div>
                                
                                <h4 className="expertise_board_item_title">Mobile app</h4>
                                <div className="expertise_board_item_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
                            </div>
                            <div className="expertise_board_item expertise_board_item--border-right">
                                <div className="expertise_board_item_img">
                                    <img src={search} alt="Search engine optimization"></img>
                                </div>
                                <h4 className="expertise_board_item_title">Search engine optimization</h4>
                                <div className="expertise_board_item_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
                            </div>
                            <div className="expertise_board_item expertise_board_item--border-right">
                                <div className="expertise_board_item_img">
                                    <img src={game} alt="Game development"></img>
                                </div>
                                <h4 className="expertise_board_item_title">Game development</h4>
                                <div className="expertise_board_item_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
                            </div>
                            <div className="expertise_board_item">
                                <div className="expertise_board_item_img">
                                    <img src={love} alt="Made with love"></img>
                                </div>
                                <h4 className="expertise_board_item_title">Made with love</h4>
                                <div className="expertise_board_item_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
                            </div>

                        </div>
                    </div>   
                </div>
            </>
        )
    }
}

export default Expertise