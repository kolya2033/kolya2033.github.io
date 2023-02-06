import { Component } from 'react';
import logo from './assets/img/logo.png';
import about from'./assets/img/about.png';
import web from './assets/img/expertise/WebDesignDevelopment.png';
import branding from './assets/img/expertise/BrandingIdentity.png';
import mobile from './assets/img/expertise/MobileApp.png';
import search from './assets/img/expertise/SearchEngineOptimization.png';
import game from './assets/img/expertise/GameDevelopment.png';
import love from './assets/img/expertise/MadeWithLove.png';
import team from './assets/img/team/teamPhoto.jpg'
import work1 from './assets/img/works/1.png'
import work2 from './assets/img/works/2.png'
import work3 from './assets/img/works/3.png'
import work4 from './assets/img/works/4.jpg'
import work5 from './assets/img/works/5.png'
import work6 from './assets/img/works/6.png'
import testimonials1 from './assets/img/TestimonialsImg/1.png'
import testimonials2 from './assets/img/TestimonialsImg/2.png'
import testimonials3 from './assets/img/TestimonialsImg/3.png'
import testimonials4 from './assets/img/TestimonialsImg/4.png'
import testimonials5 from './assets/img/TestimonialsImg/5.png'
import zara from './assets/img/Client/Zara_Logo.svg.png'
import barneys from './assets/img/Client/1280px-Barneys_New_York_Logo.svg.png'
import calvin from './assets/img/Client/Calvin_klein_logo.svg.png'
import converse from './assets/img/Client/Converse_logo.svg.png'
import levis from "./assets/img/Client/1280px-Levi's_logo.svg.png"
import mango from './assets/img/Client/Logo_of_Mango_(new).svg.png'
import gucci from './assets/img/Client/1280px-Gucci_Logo.svg.png'
import nike from './assets/img/Client/1280px-Logo_NIKE.svg.png'
import puma from './assets/img/Client/Puma_Logo.svg.png'
import billabong from './assets/img/Client/Billabong.svg.png'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends Component {
    state = {
        isActive: false,
        fixedHeader: ''
    };

    componentDidMount() {
        window.addEventListener("scroll", this.isSticky);
        return () => {
        window.removeEventListener("scroll", this.isSticky);
        };
    }

    isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 250 ? "fixed" : "";
        this.setState({fixedHeader: stickyClass})
    };    

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    };

    render() {
       
        return (
        <div className="App">
            <header>
                <h1 className="project_title">Tajam</h1>
                <p className="project_description">
                    Описание проекта <br></br>
                    Tajam — это одностраничный шаблон дизайна для агентств,  созданный с помощью Photoshop. Эта халява включает в себя чистую целевую страницу, состоящую из разделов (о, команда, работы и т. д.). Бесплатный PSD, выпущенный Аджи Дармаван.
                </p>
            </header>

            <main>
                
                <div className="intro">
                    <div className={`header ${this.state.fixedHeader}`}>
                        <div className="header_inner">
                            <div className="header_logo">
                                <img className="header_logo_img" src={logo} alt="Logo"></img>
                                <div className="header_logo_title">tajam</div>

                            </div>

                            <div className={`nav ${this.state.isActive ? "active" : null}`}>
                                <a href="#" className="nav_link">Home</a>
                                <a href="#" className="nav_link">About</a>
                                <a href="#" className="nav_link">Expertise</a>
                                <a href="#" className="nav_link">Teams</a>
                                <a href="#" className="nav_link">Works</a>
                                <a href="#" className="nav_link">People say</a>
                                <a href="#" className="nav_link">Contact</a>
                            </div>
                            <button onClick={this.handleToggle} className={`nav_toggle ${this.state.isActive ? "active" : null}`} type="button">
                                <span className="nav_toggle_item"></span>
                            </button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="intro_inner">
                            <h1 className="intro_title">We Are Awesome Creative Agency</h1> 
                            <p className="intro_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
                            <a href="#" className="btn">learn more</a>
                        </div>
                    </div>
                </div>

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
                                <i class="fa-regular fa-circle-play"></i>
                                <h3 className="video_title">Watch our story</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="expertise">
                    <div className="container">
                        <h3 className="expertise_title">Expertise</h3>
                        <div className="expertise_text">Lorem ipsum dolor sit amet proin gravida nibh vel velit</div>
                        <div className="expertise_board">
                            <div className="expertise_board_item expertise_board_item--border-right-bottom">
                                <div className="expertise_board_item_img">
                                    <img src={web} alt="Web design & development"></img>
                                </div>
                                <h4 className="expertise_board_item_title">Web design & development</h4>
                                <div className="expertise_board_item_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
                            </div>
                            <div className="expertise_board_item expertise_board_item--border-right-bottom">
                                <div className="expertise_board_item_img">
                                    <img src={branding} alt="Branding identity"></img>
                                </div>
                                <h4 className="expertise_board_item_title">Branding identity</h4>
                                <div className="expertise_board_item_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
                            </div>
                            <div className="expertise_board_item expertise_board_item--border-bottom">
                                <div className="expertise_board_item_img">
                                    <img src={mobile} alt="Mobile app" ></img>
                                </div>
                                
                                <h4 className="expertise_board_item_title">Mobile app</h4>
                                <div className="expertise_board_item_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
                            </div>
                            <div className="expertise_board_item expertise_board_item--border-right">
                                <div className="expertise_board_item_img">
                                    <img src={search} alt="Search engine optimization"></img>
                                </div>
                                <h4 className="expertise_board_item_title">Search engine optimization</h4>
                                <div className="expertise_board_item_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
                            </div>
                            <div className="expertise_board_item expertise_board_item--border-right">
                                <div className="expertise_board_item_img">
                                    <img src={game} alt="Game development"></img>
                                </div>
                                <h4 className="expertise_board_item_title">Game development</h4>
                                <div className="expertise_board_item_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
                            </div>
                            <div className="expertise_board_item">
                                <div className="expertise_board_item_img">
                                    <img src={love} alt="Made with love"></img>
                                </div>
                                <h4 className="expertise_board_item_title">Made with love</h4>
                                <div className="expertise_board_item_text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</div>
                            </div>

                        </div>
                    </div>   
                </div>

                <div className="team">
                    <div className="container">
                        <h4 className="team_title">Meet our amazing team</h4>
                        <div className="team_text">Lorem ipsum dolor sit amet proin gravida nibh vel velit</div>
                        <div className="team_items">
                            
                            <div className="team_item_container">
                                <div className="team_item">
                                    <img src={team} alt="" className="team_item_img"></img>
                                    <h4 className="team_item_title">Semf Ucuk</h4>
                                    <h5 className="team_item_subtitle">Ceo & founder</h5>
                                </div>
                            </div>

                            <div className="team_item_container">
                                <div className="team_item">
                                    <img src={team} alt="" className="team_item_img"></img>
                                    <h4 className="team_item_title">Dik Adalin</h4>
                                    <h5 className="team_item_subtitle">Engineering</h5>
                                </div>
                            </div>

                            <div className="team_item_container">
                                <div className="team_item">
                                    <img src={team} alt="" className="team_item_img"></img>
                                    <h4 className="team_item_title">Jeng Kol</h4>
                                    <h5 className="team_item_subtitle">Designer</h5>
                                </div>
                            </div>

                            <div className="team_item_container">
                                <div className="team_item">
                                    <img src={team} alt="" className="team_item_img"></img>
                                    <h4 className="team_item_title">Pet Romak</h4>
                                    <h5 className="team_item_subtitle">Marketing</h5>
                                </div>
                            </div>

                        </div>
                        <div className="team_subtext">Become part of our dream team, let’s join us !</div>
                        <a href="#" className="btn">We are hiring</a>
                    </div>
                </div>

                <div className="works">
                    <div className="works_items">
                        <div className="work_item">
                            <div className="work_item_title">Our works</div>
                            <div className="work_item_imgs">
                                <img src={work1} alt="Woks" className="work_item_img"></img>
                                <img src={work2} alt="Woks" className="work_item_img"></img>
                                <img src={work3} alt="Woks" className="work_item_img"></img>
                                <img src={work4} alt="Woks" className="work_item_img"></img>
                                <img src={work5} alt="Woks" className="work_item_img"></img>
                                <img src={work6} alt="Woks" className="work_item_img"></img>
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

                <div className="container">
                    <div className="contact">
                        <div className="contact_item">
                            <div className="contact_form">
                                <h3 className="contact_form_title">Give us a good news</h3>
                                <input type="text" placeholder="Name" className="contact_form_input"></input>
                                <input type="email" placeholder="Email" className="contact_form_input"></input>
                                <input type="text" placeholder="Subject" className="contact_form_input"></input>
                                <textarea className="contact_form_textarea" placeholder="Your Massage" name="contact" id="1" cols="30" rows="10"></textarea>
                                <a href="#" className="btn">Submit</a>
                            </div>
                        </div>
                        <div className="contact_item">
                            <div className="clients">
                                <h3 className="clients_title">Our happy client</h3>
                                <div className="clients_items">
                                    <div className="clients_item">
                                        <div className="clients_item_img">
                                            <img src={zara} alt="Zara Logo"></img>
                                        </div>
                                        <div className="clients_item_img">
                                            <img src={barneys} alt="Barneys New York Logo"></img>
                                        </div>
                                        <div className="clients_item_img">
                                            <img src={calvin} alt="Calvin klein logo"></img>
                                        </div>
                                        <div className="clients_item_img">
                                            <img src={converse} alt="Converse logo"></img>
                                        </div>
                                        <div className="clients_item_img">
                                            <img src={levis} alt="Levi's logo"></img>
                                        </div>
                                    </div>
                                    <div className="clients_item">
                                        <div className="clients_item_img">
                                            <img src={mango} alt="Logo of Mango"></img>
                                        </div>
                                        <div className="clients_item_img">
                                            <img src={gucci} alt="Gucci Logo"></img>
                                        </div>
                                        <div className="clients_item_img">
                                            <img src={nike} alt="Logo NIKE"></img>
                                        </div>
                                        <div className="clients_item_img">
                                            <img src={puma} alt="Puma Logo"></img>
                                        </div>
                                        <div className="clients_item_img">
                                            <img src={billabong} alt="Billabong"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="footer">
                    <div className="container">
                        <div className="footer_items">
                            <div className="footer_item first">
                                <div className="footer_logo">
                                    <img className="footer_logo_img" src={logo} alt="Logo"></img>
                                    <h4 className="footer_logo_title">tajam</h4>
                                </div>
                                <p className="footer_text">lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit</p>
                            </div>
                            <div className="footer_item">
                                <h4 className="footer_title">our studio</h4>
                                <div className="footer_adres">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p>Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat
                                        11480 - Indonesia</p>
                                </div>
                                <div className="footer_phone">
                                    <i className="fa-solid fa-phone-flip"></i>
                                    <p>(+62) 21-2224 3333</p>
                                </div>
                            </div>
                            <div className="footer_item">
                                <h4 className="footer_title">stay in touch</h4>
                                <div className="footer_sub">
                                    <input type="text" placeholder="Subscribe our newsletter" className="footer_sub_input"></input>
                                    <a href="#" className="footer_sub_btn">
                                        <i className="fa-regular fa-paper-plane"></i>
                                    </a>
                                </div>
                                <div className="footer_social">
                                    <a href="#">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-dribbble"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-google-plus-g"></i>
                                    </a>
                                    <a href="#">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer_bottom">
                            <div className="footer_links">
                                <a href="#">Help</a>
                                <a href="#">Terms & condition</a>
                                <a href="#">Privacy</a>
                            </div>
                            <div className="footer_copyright">Copyright © 2015 - Tajem Creative</div>
                        </div>
                    </div>
                </div>

            </main>

            <footer className="project_footer">
                <p className="author">
                    Игнатенко Николай <br></br>
                    ссылка на оригинал дизайна: https://freebiesbug.com/psd-freebies/tajam-psd-website-template-for-agencies/ <br></br>
                    ссылка на github аккаунт: https://github.com/kolya2033
                </p>
            </footer>
        </div>
    );
  }
}

export default App;
