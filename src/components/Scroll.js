import React from "react";
import {Carousel} from 'antd';

export default function Scroll() {
    return (
        <div className='Scroll container-fluid'>
            <Carousel autoplay>
                <div className='Carousel Img1'>
                    <h2>Участвуй в жизни города!</h2>
                </div>
                <div className='Carousel Img2'>
                    <h2>Находи мероприятия рядом с собой!</h2>
                </div>
                <div className='Carousel Img3'>
                    <h2>Хватит сидеть дома!</h2>
                </div>
                <div className='Carousel Img4'>
                    <h2>Время узнать что-то новое!</h2>
                </div>
            </Carousel>
        </div>
    )
}