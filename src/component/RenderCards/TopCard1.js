import React, { Component } from 'react';

class TopCard1 extends Component {

    ChangeColor = () => {
        var heartBtn = document.querySelector(".heart");
        if (heartBtn.hasAttribute("id")) {
            heartBtn.removeAttribute("id")
        } else {

            heartBtn.setAttribute("id", "heart-clicked")
        }
    }
    render() {
        return (
            <div className="after-men-card container" >
                <div className="row">
                    <h5>Men's Check-Shirt</h5>
                    <h5 className="pink">$24</h5>
                    <ul className="colors container" >
                        <li className="col m3 l4">
                            <label>
                                <input className="darkPink" name="group1" type="radio" />
                                <span  > </span>
                            </label>
                        </li>
                        <li className="col m3 l4">
                            <label>
                                <input className="red" name="group1" type="radio" />
                                <span> </span>
                            </label>
                        </li>
                        <li className="col m3 l4">
                            <label>
                                <input className="yellow" name="group1" type="radio" />
                                <span  > </span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="row ">
                    <div className="col s12 m12 l12">
                        <a class='dropdown-trigger btn btn-small btn-primary pop-btn container col s5 m5 l5 right pink-bg'
                            href='#!' data-target='dropdown1'>Size <i className="material-icons right" >details</i></a>
                        <ul id='dropdown1' class='dropdown-content '>
                            <li><a href="#!">XS</a></li>
                            <li><a href="#!">S</a></li>
                            <li><a href="#!">M</a></li>
                            <li><a href="#!">L</a></li>
                            <li><a href="#!">XL</a></li>
                        </ul>
                        <button className=" btn btn-small btn-primary pop-btn container right col s4 m4 l4 pink-bg">
                            Buy
                                    </button>
                    </div>

                </div>
                <div className="row">
                    <span className="col s12 m12 l12 l12" onClick={() => this.ChangeColor()}>
                        <i className="material-icons heart"
                        >favorite</i> </span>
                    <h6>Favorite</h6>
                </div>

            </div>
        )
    }
}

export default TopCard1;