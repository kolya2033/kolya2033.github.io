import { useTranslation } from 'react-i18next'
import about from '../../../assets/img/about.png'

const About = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="about_inner">
                        <img src={about} alt="about logo" className="about_logo"></img>
                        <div className="about_contant">
                            <div className="about_title">{t("about.title")}</div>
                            <p className="about_text">{t("about.text")}</p>
                            <p className="about_text">{t("about.text2")}</p>
                            <a href="#" className="btn">{t("about.btn")}</a>
                        </div>
                    </div>
                </div>
                <div className="about_video"></div>
            </div>

            <div className="player">
                <div className="video">
                    <div className="container">
                        <div className="about_contant">
                            <i className="fa-regular fa-circle-play"></i>
                            <h3 className="video_title">{t("about.video")}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default About