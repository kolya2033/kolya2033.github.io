import testimonials1 from '../../../assets/img/TestimonialsImg/1.png'
import testimonials2 from '../../../assets/img/TestimonialsImg/2.png'
import testimonials3 from '../../../assets/img/TestimonialsImg/3.png'
import testimonials4 from '../../../assets/img/TestimonialsImg/4.png'
import testimonials5 from '../../../assets/img/TestimonialsImg/5.png'
import TestimonialsImg from './TestimonialsImg'

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="testimonials_content">
                <h3 className="testimonials_title">“</h3>
                <p className="testimonials_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                <h4 className="testimonials_author">Jane Galadriel</h4>
                <h5 className="testimonials_profession">Ceo tengkurep</h5>
                <div className="testimonials_img">
                    <a href="#" className="testimonials_img_btn testimonials_img_btn--prev"></a>
                    <a href="#" className="testimonials_img_btn testimonials_img_btn--next"></a>
                    <TestimonialsImg testimonials={testimonials1}/>
                    <TestimonialsImg testimonials={testimonials2}/>
                    <TestimonialsImg testimonials={testimonials3} active={'active'}/>
                    <TestimonialsImg testimonials={testimonials4}/>
                    <TestimonialsImg testimonials={testimonials5}/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials