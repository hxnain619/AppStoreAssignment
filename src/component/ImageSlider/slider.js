import React from 'react';
import M from 'materialize-css';
// import {data} from './../../data.js';
class ImageSlider extends React.Component {
    render() {
        return (<div>
            <div className="carousel" style={{
                background: "black"
            }}>
                {Images.map((image, index) => {
                    return(
                    <a className="carousel-item" key={index} href="#!"> <img src={image} alt="" /></a>
                    )
                })}
            </div>
        </div>)
    }
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
             M.Carousel.init(elems);

        })
    }
}

const Images = [
    "https://lorempixel.com/250/250/nature/1",
    "https://lorempixel.com/250/250/nature/2",
    "https://lorempixel.com/250/250/nature/3",
    "https://lorempixel.com/250/250/nature/4",
    "https://lorempixel.com/250/250/nature/5"
]


export default ImageSlider;