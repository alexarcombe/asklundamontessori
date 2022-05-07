import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faSeedling,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import CarouselItem from './CarouselItem';
import './Showcase.css';

function Showcase() {
  const isMobile = useIsMobileSize()

  return (
    <section id="showcase" className='showcase'>
      {
        isMobile ?
      <Carousel>
        <CarouselItem className="carousel-image-1">
          <h1 className="carousel-header">
            Välkommen till Asklunda Montessoriförskola
          </h1>
          <p className="text-white">En fristående förskola i Vellinge kommun</p>
        </CarouselItem>
        <CarouselItem className="carousel-image-2">
          <h1 className="carousel-header">VÅR PEDAGOGISKA VISION</h1>
          <p className="text-white">
            <FontAwesomeIcon icon={faSeedling} /> Med barnet i centrum i vår
            unika miljö, sår vi frön för livet
          </p>
          <p className="text-white">
            <FontAwesomeIcon icon={faGraduationCap} /> Tryggheten är grunden för
            all positiv utveckling och inlärning
          </p>
          <p className="text-white">
            <FontAwesomeIcon icon={faUsers} /> Varje barn ska få vara sitt bästa
            jag utifrån sina förutsättningar
          </p>
        </CarouselItem>
        {/* <CarouselItem className="carousel-image-3">
          <h1 className="carousel-header">VÅR VERKSAMHETSVISION</h1>
          <p className="text-white">
            Vi är en förskola som föräldrar väljer som sitt första val till sina
            barn
          </p>
        </CarouselItem> */}
      </Carousel> :
      <video src="https://s3.eu-north-1.amazonaws.com/asklundamontessori.se/asklunda-montessorif%C3%B6rskola.mp4" width='1920' height='1080' className='showcase__video' controls autoPlay />
      }
    </section>
  );
}

const useIsMobileSize = () => {
  const [state, setState] = React.useState(window.innerWidth < 576) 
  
  React.useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth < 576) {
        setState(true)
      } else {
        setState(false)
      }
    }
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [setState])

  return state
}

export default Showcase;