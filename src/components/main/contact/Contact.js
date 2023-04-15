import zara from '../../../assets/img/Client/Zara_Logo.svg.png'
import barneys from '../../../assets/img/Client/1280px-Barneys_New_York_Logo.svg.png'
import calvin from '../../../assets/img/Client/Calvin_klein_logo.svg.png'
import converse from '../../../assets/img/Client/Converse_logo.svg.png'
import levis from "../../../assets/img/Client/1280px-Levi's_logo.svg.png"
import mango from '../../../assets/img/Client/Logo_of_Mango_(new).svg.png'
import gucci from '../../../assets/img/Client/1280px-Gucci_Logo.svg.png'
import nike from '../../../assets/img/Client/1280px-Logo_NIKE.svg.png'
import puma from '../../../assets/img/Client/Puma_Logo.svg.png'
import billabong from '../../../assets/img/Client/Billabong.svg.png'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const {t} = useTranslation()
    const firstClientsList = [zara, barneys, calvin, converse, levis]
    const secondClientsList = [mango, gucci, nike, puma, billabong]
    return (
        <div className="container">
            <div className="contact">
                <div className="contact_item">
                    <div className="contact_form">
                        <h3 className="contact_form_title">{t("contact.title")}</h3>
                        <input type="text" placeholder={t("contact.inputName")} className="contact_form_input"></input>
                        <input type="email" placeholder={t("contact.inputEmail")} className="contact_form_input"></input>
                        <input type="text" placeholder={t("contact.inputSubject")} className="contact_form_input"></input>
                        <textarea className="contact_form_textarea" placeholder={t("contact.inputText")} name="contact" id="1" cols="30" rows="10"></textarea>
                        <a href="#" className="btn">{t("contact.btn")}</a>
                    </div>
                </div>
                <div className="contact_item">
                    <div className="clients">
                        <h3 className="clients_title">{t("contact.title2")}</h3>
                        <div className="clients_items">
                            <div className="clients_item">
                                {
                                    firstClientsList.map(item => (
                                        <div key={item} className="clients_item_img">
                                            <img src={item} alt="client"></img>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="clients_item">
                                {
                                    secondClientsList.map(item => (
                                        <div key={item} className="clients_item_img">
                                            <img src={item} alt="client"></img>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
    
}

export default Contact