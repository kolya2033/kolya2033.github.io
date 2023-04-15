import web from '../../../assets/img/expertise/WebDesignDevelopment.png';
import branding from '../../../assets/img/expertise/BrandingIdentity.png';
import mobile from '../../../assets/img/expertise/MobileApp.png';
import search from '../../../assets/img/expertise/SearchEngineOptimization.png';
import game from '../../../assets/img/expertise/GameDevelopment.png';
import love from '../../../assets/img/expertise/MadeWithLove.png';
import { useTranslation } from 'react-i18next';

const Expertise = () => {
    const {t} = useTranslation()
    const expertiseItems = [
        {
            img: web,
            title: t("expertise.web"),
            text: t("expertise.cardTitle")
        },
        {
            img: branding,
            title: t("expertise.branding"),
            text: t("expertise.cardTitle")
        },
        {
            img: mobile,
            title: t("expertise.mobile"),
            text: t("expertise.cardTitle")
        },
        {
            img: search,
            title: t("expertise.search"),
            text: t("expertise.cardTitle")
        },
        {
            img: game,
            title: t("expertise.game"),
            text: t("expertise.cardTitle")
        },
        {
            img: love,
            title: t("expertise.love"),
            text: t("expertise.cardTitle")
        }
    ]

    return (
        <div className="expertise">
            <div className="container">
                <h3 className="expertise_title">{t("expertise.title")}</h3>
                <div className="expertise_text">{t("expertise.text")}</div>
                <div className="expertise_board">
                    {
                        expertiseItems.map(item => (
                            <div key={item.title} className="expertise_board_item expertise_board_item--border-right-bottom">
                                <div className="expertise_board_item_img">
                                    <img src={item.img} alt={`${item.title}`}></img>
                                </div>
                                <h4 className="expertise_board_item_title">{item.title}</h4>
                                <div className="expertise_board_item_text">{item.text}</div>
                            </div>
                        ))
                    }
                </div>
            </div>   
        </div>
    )
    
}

export default Expertise