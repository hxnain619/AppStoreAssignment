import React from 'react';
import CustomizedStepper from './stepper';

class CheckOut extends React.Component {
    render() {
        return (<div className="container">
            <div className="cart-card card col s10 m10 l10" >
                <span className="heading" >
                    <h3 >Checkout </h3>
                    <div className="divider" ></div>
                    <div className="row stepper">
                        <CustomizedStepper />
                    </div>
                </span>
            </div>
        </div>
        )
    }
}

export default CheckOut;