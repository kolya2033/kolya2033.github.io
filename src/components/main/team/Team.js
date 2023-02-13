import React, { Component } from 'react'
import team from '../../../assets/img/team/teamPhoto.jpg'


class Team extends Component {
    render() {
        return (
            <>
                <div className="team">
                    <div className="container">
                        <h4 className="team_title">Meet our amazing team</h4>
                        <div className="team_text">Lorem ipsum dolor sit amet proin gravida nibh vel velit</div>
                        <div className="team_items">
                            
                            <div className="team_item_container">
                                <div className="team_item">
                                    <img src={team} alt="" className="team_item_img"></img>
                                    <h4 className="team_item_title">Semf Ucuk</h4>
                                    <h5 className="team_item_subtitle">Ceo & founder</h5>
                                </div>
                            </div>

                            <div className="team_item_container">
                                <div className="team_item">
                                    <img src={team} alt="" className="team_item_img"></img>
                                    <h4 className="team_item_title">Dik Adalin</h4>
                                    <h5 className="team_item_subtitle">Engineering</h5>
                                </div>
                            </div>

                            <div className="team_item_container">
                                <div className="team_item">
                                    <img src={team} alt="" className="team_item_img"></img>
                                    <h4 className="team_item_title">Jeng Kol</h4>
                                    <h5 className="team_item_subtitle">Designer</h5>
                                </div>
                            </div>

                            <div className="team_item_container">
                                <div className="team_item">
                                    <img src={team} alt="" className="team_item_img"></img>
                                    <h4 className="team_item_title">Pet Romak</h4>
                                    <h5 className="team_item_subtitle">Marketing</h5>
                                </div>
                            </div>

                        </div>
                        <div className="team_subtext">Become part of our dream team, let’s join us !</div>
                        <a href="#" className="btn">We are hiring</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Team