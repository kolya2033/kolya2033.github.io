import team from '../../../assets/img/team/teamPhoto.jpg'

const TeamItem = ({title, subTitle}) => {
    return (
        <div className="team_item_container">
            <div className="team_item">
                <img src={team} alt="" className="team_item_img"></img>
                <h4 className="team_item_title">{title}</h4>
                <h5 className="team_item_subtitle">{subTitle}</h5>
            </div>
        </div>
    )
}

export default TeamItem