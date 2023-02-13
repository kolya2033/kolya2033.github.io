import React, { Component } from 'react'
import testimonials1 from '../../../assets/img/TestimonialsImg/1.png'
import testimonials2 from '../../../assets/img/TestimonialsImg/2.png'
import testimonials3 from '../../../assets/img/TestimonialsImg/3.png'
import testimonials4 from '../../../assets/img/TestimonialsImg/4.png'
import testimonials5 from '../../../assets/img/TestimonialsImg/5.png'

class Testimonials extends Component {
    render() {
        return (
            <>
                <div className="testimonials">
                    <div className="testimonials_content">
                        <h3 className="testimonials_title">“</h3>
                        <p className="testimonials_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                        <h4 className="testimonials_author">Jane Galadriel</h4>
                        <h5 className="testimonials_profession">Ceo tengkurep</h5>
                        <div className="testimonials_img">
                            <a href="#" className="testimonials_img_btn testimonials_img_btn--prev"></a>
                            <a href="#" className="testimonials_img_btn testimonials_img_btn--next"></a>
                            <div className="testimonials_img_item">
                                <img src={testimonials1} alt="TestimonialsImg" className="testimonials_img_item_img"></img>
                            </div>
                            <div className="testimonials_img_item">
                                <img src={testimonials2} alt="TestimonialsImg" className="testimonials_img_item_img"></img>
                            </div>
                            <div className="testimonials_img_item">
                                <img src={testimonials3} alt="TestimonialsImg" className="testimonials_img_item_img active"></img>
                            </div>
                            <div className="testimonials_img_item">
                                <img src={testimonials4} alt="TestimonialsImg" className="testimonials_img_item_img"></img>
                            </div>
                            <div className="testimonials_img_item">
                                <img src={testimonials5} alt="TestimonialsImg" className="testimonials_img_item_img"></img>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Testimonials