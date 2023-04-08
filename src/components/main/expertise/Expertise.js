import web from '../../../assets/img/expertise/WebDesignDevelopment.png';
import branding from '../../../assets/img/expertise/BrandingIdentity.png';
import mobile from '../../../assets/img/expertise/MobileApp.png';
import search from '../../../assets/img/expertise/SearchEngineOptimization.png';
import game from '../../../assets/img/expertise/GameDevelopment.png';
import love from '../../../assets/img/expertise/MadeWithLove.png';

const Expertise = () => {
    const expertiseItems = [
        {
            img: web,
            title: "Web design & development",
            text: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean."
        },
        {
            img: branding,
            title: "Branding identity",
            text: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean."
        },
        {
            img: mobile,
            title: "Mobile app",
            text: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean."
        },
        {
            img: search,
            title: "Search engine optimization",
            text: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean."
        },
        {
            img: game,
            title: "Game development",
            text: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean."
        },
        {
            img: love,
            title: "Made with love",
            text: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean."
        }
    ]

    return (
        <div className="expertise">
            <div className="container">
                <h3 className="expertise_title">Expertise</h3>
                <div className="expertise_text">Lorem ipsum dolor sit amet proin gravida nibh vel velit</div>
                <div className="expertise_board">
                    {
                        expertiseItems.map(item => (
                            <div key={item.title} className="expertise_board_item expertise_board_item--border-right-bottom">
                                <div className="expertise_board_item_img">
                                    <img src={item.img} alt="Web design & development"></img>
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