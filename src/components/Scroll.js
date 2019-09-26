import React from "react";
import {Carousel} from 'antd';

export default function Scroll() {
    return (
        <div className='Scroll container-fluid'>
            <Carousel autoplay>
                <div className='Carousel Img1'>
                    <h3>1</h3>
                </div>
                <div className='Carousel Img2'>
                    <h3>2</h3>
                </div>
                <div className='Carousel Img3'>
                    <h3>3</h3>
                </div>
                <div className='Carousel Img4'>
                    <h3>4</h3>
                </div>
            </Carousel>
        </div>
    )
}