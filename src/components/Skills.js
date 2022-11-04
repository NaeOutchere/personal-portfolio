import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/100-percent.svg';
import meter2 from '../assets/img/90-percent.svg';
import meter3 from '../assets/img/80percent.svg';
import meter4 from '../assets/img/75-percent.svg';
import meter5 from '../assets/img/50-percent.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <div className='Container'>
                <div className='Row'>
                    <div className='col-12'>
                        <div className='skill-bx wow zoomIn'>
                            <h2>Skills</h2>
                            <p>
                            To achieve the creative responsive web apps, I spoke these languages so that computer may understand. 
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="" />
                                    
                                    <h5>HTML5 and CSS3</h5><box-icon name='html5' type='logo' color='#ffffff' ></box-icon><box-icon name='css3' type='logo' color='#ffffff' ></box-icon>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="" />
                                    <h5>Javascript</h5><box-icon name='javascript' type='logo' color='#ffffff' ></box-icon>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="" />
                                    <h5>Reactjs</h5><box-icon name='react' type='logo' color='#ffffff' ></box-icon>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="" />
                                    <h5>Tailwind CSS</h5><box-icon name='tailwind-css' type='logo' color='#ffffff' ></box-icon>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="" />
                                    <h5>Adobe Suite</h5><box-icon name='adobe' type='logo' color='#ffffff' ></box-icon>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="" />
                                    <h5>Python</h5><box-icon name='python' type='logo' color='#ffffff' ></box-icon>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="" />
                                    <h5>SQL</h5><box-icon name='postgresql' type='logo' color='#ffffff' ></box-icon>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="" />
                                    <h5>C</h5><box-icon name='c-plus-plus' type='logo' color='#ffffff' ></box-icon>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="" />
                                    <h5>Firebase</h5><box-icon name='firebase' type='logo' color='#ffffff' ></box-icon>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    );
}
