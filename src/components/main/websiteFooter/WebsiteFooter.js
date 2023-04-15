import { useTranslation } from 'react-i18next';
import logo from '../../../assets/img/logo.png';

const WebsiteFooter = () => {
    const {t} = useTranslation()
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_items">
                    <div className="footer_item first">
                        <div className="footer_logo">
                            <img className="footer_logo_img" src={logo} alt="Logo"></img>
                            <h4 className="footer_logo_title">tajam</h4>
                        </div>
                        <p className="footer_text">{t("webFooter.text")}</p>
                    </div>
                    <div className="footer_item">
                        <h4 className="footer_title">{t("webFooter.contactTitle")}</h4>
                        <div className="footer_adres">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>{t("webFooter.contactAdres")}</p>
                        </div>
                        <div className="footer_phone">
                            <i className="fa-solid fa-phone-flip"></i>
                            <p>{t("webFooter.contactPhone")}</p>
                        </div>
                    </div>
                    <div className="footer_item">
                        <h4 className="footer_title">{t("webFooter.title")}</h4>
                        <div className="footer_sub">
                            <input type="text" placeholder={t("webFooter.input")} className="footer_sub_input"></input>
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
                        <a href="#">{t("webFooter.help")}</a>
                        <a href="#">{t("webFooter.terms")}</a>
                        <a href="#">{t("webFooter.privacy")}</a>
                    </div>
                    <div className="footer_copyright">Copyright © 2015 - Tajem Creative</div>
                </div>
            </div>
        </div>
    )
}

export default WebsiteFooter