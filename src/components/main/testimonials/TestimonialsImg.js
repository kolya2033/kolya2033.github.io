const TestimonialsImg = ({testimonials, active}) => {
    return (
        <div className="testimonials_img_item">
            <img src={testimonials} alt="TestimonialsImg" className={`testimonials_img_item_img ${active}`}></img>
        </div>
    )
}

export default TestimonialsImg