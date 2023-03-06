import React, { Component } from 'react'
import team from '../../../assets/img/team/teamPhoto.jpg'

class TeamItem extends Component {
    render() {
        return (
            <div className="team_item_container">
                <div className="team_item">
                    <img src={team} alt="" className="team_item_img"></img>
                    <h4 className="team_item_title">{this.props.title}</h4>
                    <h5 className="team_item_subtitle">{this.props.subTitle}</h5>
                </div>
            </div>
        )
    }
}

export default TeamItem