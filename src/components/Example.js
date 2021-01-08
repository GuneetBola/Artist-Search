import React from 'react';
import {Carousel} from 'react-bootstrap';
import Bruno from '../assets/brunomars.png';
import Pen from '../assets/pentatonix.png';
import Drake from '../assets/drake.png';

const Examples = () => (
    <div className="examples">
        <Carousel>
            <Carousel.Item interval={1000}>
                <img style={{width: '200px'}}
                className="d-block w-100"
                src={Bruno}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Bruno Mars</h3>
                <p>Top tracks include: "When I Was Your Man" and "That's What I Like".</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img style={{width:'200px'}}
                className="d-block w-100"
                src={Pen}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Pentatonix</h3>
                <p>Top tracks include: "Amazing Grace (My chains are gone)" and "Mary, Did You Know?".</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img style={{width:'200px'}}
                className="d-block w-100"
                src={Drake}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Drake</h3>
                <p>Top tracks include: "Laugh Now Cry Later (feat. Lil Durk)" and "POPSTAR".</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
)

export default Examples;