import { useTranslation } from 'react-i18next'
import work1 from '../../../assets/img/works/1.png'
import work2 from '../../../assets/img/works/2.png'
import work3 from '../../../assets/img/works/3.png'
import work4 from '../../../assets/img/works/4.jpg'
import work5 from '../../../assets/img/works/5.png'
import work6 from '../../../assets/img/works/6.png'

const Works = () => {
    const {t} = useTranslation()
    const worksImg = [work1, work2, work3, work4, work5, work6]
    return (
        <div className="works">
            <div className="works_items">
                <div className="work_item">
                    <div className="work_item_title">{t("works.title")}</div>
                    <div className="work_item_imgs">
                        {
                            worksImg.map(item => (
                                <img key={item} src={item} alt="Works" className="work_item_img"></img>
                            ))
                        }
                    </div>
                </div>
                <div className="work_item">
                    <div className="work_item_title">{t("works.title2")}</div>
                    <div className="work_item_imgs">
                        {
                            worksImg.map(item => (
                                <img key={item} src={item} alt="Works" className="work_item_img"></img>
                            ))
                        }
                    </div>
                </div>
            </div>
            <a hr ef="#" className="btn">{t("works.btn")}</a>
        </div>
    )
    
}

export default Works