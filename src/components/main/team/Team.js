import React, { Component } from 'react'
import TeamItem from './TeamItem'


class Team extends Component {
    render() {
        return (
            <div className="team">
                <div className="container">
                    <h4 className="team_title">Meet our amazing team</h4>
                    <div className="team_text">Lorem ipsum dolor sit amet proin gravida nibh vel velit</div>
                    <div className="team_items">
                        <TeamItem title={"Semf Ucuk"} subTitle={"Ceo & founder"}/>
                        <TeamItem title={"Dik Adalin"} subTitle={"Engineering"}/>
                        <TeamItem title={"Jeng Kol"} subTitle={"Designer"}/>
                        <TeamItem title={"Pet Romak"} subTitle={"Marketing"}/>
                    </div>
                    <div className="team_subtext">Become part of our dream team, let’s join us !</div>
                    <a href="#" className="btn">We are hiring</a>
                </div>
            </div>
        )
    }
}

export default Team