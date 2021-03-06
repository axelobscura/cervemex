import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselIntro() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg"
                    alt="Catálogo de la cerveza mexicana"
                    title="Catálogo de la cerveza mexicana"
                    style={{ height: '100vh !important' }}
                />
                <Carousel.Caption>
                    <h3>CERVEZA MEXICANA</h3>
                    <p>Catálogo de la cerveza mexicana</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="https://images.pexels.com/photos/1796698/pexels-photo-1796698.jpeg"
                    alt="Catálogo de la cerveza mexicana"
                    title="Catálogo de la cerveza mexicana"
                    style={{ height: '100vh !important' }}
                />

                <Carousel.Caption>
                    <h3>CERVEZA MEXICANA</h3>
                    <p>Catálogo de la cerveza mexicana</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="https://images.pexels.com/photos/250465/pexels-photo-250465.jpeg"
                    alt="Catálogo de la cerveza mexicana"
                    title="Catálogo de la cerveza mexicana"
                    style={{ height: '100vh !important' }}
                />

                <Carousel.Caption>
                    <h3>CERVEZA MEXICANA</h3>
                    <p>Catálogo de la cerveza mexicana</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}