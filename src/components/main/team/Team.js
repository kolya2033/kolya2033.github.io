import { useTranslation } from 'react-i18next'
import TeamItem from './TeamItem'


const  Team = () => {
    const {t} = useTranslation()
    return (
        <div className="team">
            <div className="container">
                <h4 className="team_title">{t("team.title")}</h4>
                <div className="team_text">{t("team.text")}</div>
                <div className="team_items">
                    <TeamItem title={"Semf Ucuk"} subTitle={"Ceo & founder"}/>
                    <TeamItem title={"Dik Adalin"} subTitle={"Engineering"}/>
                    <TeamItem title={"Jeng Kol"} subTitle={"Designer"}/>
                    <TeamItem title={"Pet Romak"} subTitle={"Marketing"}/>
                </div>
                <div className="team_subtext">{t("team.subText")}</div>
                <a href="#" className="btn">{t("team.btn")}</a>
            </div>
        </div>
    )
}

export default Team