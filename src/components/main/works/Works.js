import React, { Component } from 'react'
import work1 from '../../../assets/img/works/1.png'
import work2 from '../../../assets/img/works/2.png'
import work3 from '../../../assets/img/works/3.png'
import work4 from '../../../assets/img/works/4.jpg'
import work5 from '../../../assets/img/works/5.png'
import work6 from '../../../assets/img/works/6.png'

class Works extends Component {
    render() {
        return (
            <div className="works">
                <div className="works_items">
                    <div className="work_item">
                        <div className="work_item_title">Our works</div>
                        <div className="work_item_imgs">
                            <img src={work1} alt="Works" className="work_item_img"></img>
                            <img src={work2} alt="Works" className="work_item_img"></img>
                            <img src={work3} alt="Works" className="work_item_img"></img>
                            <img src={work4} alt="Works" className="work_item_img"></img>
                            <img src={work5} alt="Works" className="work_item_img"></img>
                            <img src={work6} alt="Works" className="work_item_img"></img>
                        </div>
                    </div>
                    <div className="work_item">
                        <div className="work_item_title">See All Project in dribbble </div>
                        <div className="work_item_imgs">
                            <img src={work1} alt="Works" className="work_item_img"></img>
                            <img src={work2} alt="Works" className="work_item_img"></img>
                            <img src={work3} alt="Works" className="work_item_img"></img>
                            <img src={work4} alt="Works" className="work_item_img"></img>
                            <img src={work5} alt="Works" className="work_item_img"></img>
                            <img src={work6} alt="Works" className="work_item_img"></img>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn">load more</a>
            </div>
        )
    }
}

export default Works