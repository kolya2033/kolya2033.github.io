import React, { Component } from 'react'
import about from '../../../assets/img/about.png'

class About extends Component {
    render() {
        return (
            <>
                <div className="about">
                    <div className="container">
                        <div className="about_inner">
                            <img src={about} alt="about logo" className="about_logo"></img>
                            <div className="about_contant">
                                <div className="about_title">OUR STORY</div>
                                <p className="about_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus</p>
                                <p className="about_text">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                <a href="#" className="btn">learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="about_video"></div>
                </div>

                <div className="player">
                    <div className="video">
                        <div className="container">
                            <div className="about_contant">
                                <i className="fa-regular fa-circle-play"></i>
                                <h3 className="video_title">Watch our story</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default About