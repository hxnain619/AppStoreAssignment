import React, { Component } from 'react';

class TopCard2 extends Component {
    
    ColorChange = () => {
        var heartBtn = document.querySelector(".heart");
        if(heartBtn.hasAttribute("id")){
            heartBtn.removeAttribute("id")
        }else {

            heartBtn.setAttribute("id", "heart-clicked2")
        }
    }
    render() {
        return (
            <div className="after-men-card2 center" >
                <div className="container" >
                    <div className="row" >
                        <span className="col s12 m12 l12" onClick={() => this.ColorChange()}>
                        <i className="material-icons heart">favorite</i> </span>
                        <button className="btn btn-large btn-primary pop-btn col s12 m12 l12 pink-bg" >Quick View</button>

                    </div>
                </div>
            </div>

        )
    }
}

export default TopCard2;