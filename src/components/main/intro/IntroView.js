import { useTranslation } from 'react-i18next';
import logo from '../../../assets/img/logo.png';

const IntroView = ({nav, fixedHeader, isActive, handleToggle, imgLoadingError, imgLoaded}) => {
    const {t, i18n} = useTranslation();
    return (
        <div className="intro">
            <div className={`header ${fixedHeader ? "fixed" : ''}`}>
                <div className="header_inner">
                    <div className="header_logo">
                        <img onError={imgLoadingError} onLoad={imgLoaded} className="header_logo_img" src={logo} alt="Logo"></img>
                        <div className="header_logo_title">tajam</div>

                    </div>

                    <div className={`nav ${isActive ? "active" : null}`}>
                        <button className='language' onClick={() => i18n.changeLanguage("ua")}>ua</button>
                        <button className='language' onClick={() => i18n.changeLanguage("en")}>en</button>

                        {nav.map((item, i) => (
                            <a key={i} href="#" className="nav_link">{t(`intro.${item}`)}</a>
                        ))}
                    </div>

                    <button onClick={handleToggle} className={`nav_toggle ${isActive ? "active" : null}`} type="button">
                        <span className="nav_toggle_item"></span>
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="intro_inner">
                    <h1 className="intro_title">{t("intro.title")}</h1> 
                    <p className="intro_text">{t("intro.text")}</p>
                    <a href="#" className="btn">{t("intro.btn")}</a>
                </div>
            </div>
        </div>
    )
}

export default IntroView
