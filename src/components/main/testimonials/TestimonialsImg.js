import React, { Component } from 'react'

class TestimonialsImg extends Component {
    render() {
        return (
            <div className="testimonials_img_item">
                <img src={this.props.testimonials} alt="TestimonialsImg" className={`testimonials_img_item_img ${this.props.active}`}></img>
            </div>
        )
    }
}

export default TestimonialsImg