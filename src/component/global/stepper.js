import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';

const styles = theme => ({
    root: {
        width: '10s0%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    connectorActive: {
        '& $connectorLine': {
            borderColor: theme.palette.secondary.main,
        },
    },
    connectorCompleted: {
        '& $connectorLine': {
            borderColor: theme.palette.secondary.main,
        },
    },
    connectorDisabled: {
        '& $connectorLine': {
            borderColor: theme.palette.grey[100],
        },
    },
    connectorLine: {
        transition: theme.transitions.create('border-color'),
    },
});

function getSteps() {
    return ['Delivery', 'Confirmation', 'Payment', 'Finish'];
}

class CustomizedStepper extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;
        const steps = getSteps();
        const connector = (
            <StepConnector
                classes={{
                    active: classes.connectorActive,
                    completed: classes.connectorCompleted,
                    disabled: classes.connectorDisabled,
                    line: classes.connectorLine,
                }}
            />
        );
        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} connector={connector}
                    alternativeLabel>

                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <div className="container">

                    {activeStep === steps.length - 4 ?
                        <div className="stepper-form">
                            <div className="row " >
                                <input className="col s12 m4 l4" type="text" placeholder="Enter first name" />
                                <input className="col s12 m4 l4" type="text" placeholder="Enter last name" />
                            </div>
                            <div className="row">
                                <input className="col s12 m4 l4" type="text" placeholder="Enter address" />
                                <input className="col s12 m4 l4" type="text" placeholder="Enter city" />
                            </div>
                            <div className="row">
                                <input className="col s12 m4 l4" type="text" placeholder="Enter state" />
                                <input className="col s12 m4 l4" type="number" placeholder="Enter ZIP Code" />
                            </div>
                            <p>
                                <label>
                                    <input name="group1" type="checkbox" />
                                    <span  > My Billing information is the same as my delivery information </span>
                                </label>
                            </p>
                            <div className="divider" ></div>
                            <h4>Delivery Option</h4>
                            <div className="row">
                                <form>
                                    <p className="col s12 m6 l6">
                                        <label>
                                            <input type="radio" name="shipping" />
                                            <span> Standard Shipping  (free, 2-3 business hours)</span>
                                        </label>
                                    </p>
                                    <p className="col s12 m6 l6">
                                        <label>
                                            <input type="radio" name="shipping" />
                                            <span> Express Shipping   ($26, 1-2 business days)</span>
                                        </label>
                                    </p>
                                </form>
                            </div>
                        </div>
                        : activeStep === steps.length - 3 ?
                            <div >
                                <div className="row">


                                    <div className="col s12 m12 l12">
                                        <h5>Order Summary</h5>
                                        <table className=" striped">
                                            {/* heading  */}
                                            <thead>
                                                <tr >
                                                    <th >
                                                        <h6>  Item  </h6>
                                                    </th>
                                                    <th  >
                                                        <h6> Qty  </h6>
                                                    </th>
                                                    <th >
                                                        <h6> Price  </h6>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Green TShirt 2016
                                                            </td>
                                                    <td>
                                                        2
                                                            </td>
                                                    <td className="pink">
                                                        $56
                                                            </td>
                                                </tr>
                                                {/* contents */}
                                                <tr>
                                                    <td>
                                                        Green TShirt 2016
                                                            </td>
                                                    <td>
                                                        2
                                                            </td>
                                                    <td className="pink">
                                                        $56
                                                            </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Green TShirt 2016
                                                            </td>
                                                    <td>
                                                        2
                                                            </td>
                                                    <td className="pink">
                                                        $56
                                                            </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr >
                                                    <td>
                                                        <h6>  Subtotal  </h6><br /> $124
                                                                </td>
                                                    <td>
                                                        <h6> Shipping  </h6><br /> Free
                                                                </td>
                                                    <td>
                                                        <h6> GrandTotal  </h6><br />
                                                        <span className="pink">$124</span>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div className="col s12 m12 l12">
                                        <h5>Delivery</h5>
                                        <div>
                                            <h6> Address  </h6>
                                            <p>Office 64, B Colmore Row, Birminghum, England, 4200
                                                        <h6> Delivery Option  </h6>
                                                Express Shipping   ($26, 1-2 business days)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider"></div>
                            </div>
                            : activeStep === steps.length - 2 ?
                                <div className="row">
                                    <div className="col s12 m6 l6">
                                        <div >
                                            <img className="col s12 m12 l12"
                                                style={{
                                                    padding: 10
                                                }}
                                                src="https://www.eyeofriyadh.com/news_images/126e92908311b.jpg"
                                                alt="" />
                                            <p >
                                                <label>
                                                    <input type="radio" name="pay" />
                                                    <span>
                                                        Pay $124.00 with credit card
                                                                        </span>
                                                </label>
                                            </p>
                                            <div >
                                                <input type="text" placeholder="Card Holder's Name" />
                                                <div className="row">
                                                    <input className="border-pink col s12  m12 l12" type="date" />
                                                    <input className="border-pink col s12  m12 l12" type="number" placeholder="CVV / CVC" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m6 l6">
                                        <div >
                                            <img className="col s12 m12 l12"
                                                style={{
                                                    padding: 10
                                                }}
                                                src="https://i1.wp.com/www.ecommerce-nation.com/wp-content/uploads/2018/01/paypal.png?fit=1000%2C600&ssl=1"
                                                alt="" />
                                            <p >
                                                <label>
                                                    <input type="radio" name="pay" />
                                                    <span>
                                                        Pay $124.00 with PayPal
                                                                        </span>
                                                </label>
                                            </p>
                                            <div >
                                                <input className="border-pink   " type="number" placeholder="Card Number" />
                                                <span>* CVV or CVCis the card security code, unique 3 digit numbers on the back of your card seperate from its number
                                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div> :
                                activeStep === steps.length - 1 ? (
                                    <center>
                                        <div className=" container" >
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnoTwWuAvHQEUWTMmEgVwQzsWqMzcfNvj50N1pG_8TpsjdmG5S" alt="" />
                                            <h3>Success!</h3>
                                            <p>Your Item Will be Shipped Shortly, <br />you will get mail with details</p>
                                        </div>
                                    </center>
                                ) :
                                    activeStep === steps.length ?
                                        <div className="container">
                                            <div className="row">
                                                <center>
                                                    <h1 className="thanks col s12 m12 l12">
                                                        Thank You For Shopping!!
                                                </h1>
                                                </center>
                                            </div>
                                        </div>
                                        : null}
                    <div>
                        {activeStep === steps.length ?
                            <div className="row">
                                    <button className="btn btn-large btn-primary pop-btn col s12 m12 l12 left pink-bg" >
                                        Back To Shop
                                </button>
                            </div> :
                            <div>
                                <button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className="btn btn-large btn-primary pop-btn col s10 m5 l3 left pink-bg">Back</button>
                                <button
                                    onClick={this.handleNext}
                                    className="btn btn-large btn-primary pop-btn col s10 m5 l3 right white">
                                    {activeStep === steps.length - 1 ? 'Finish' :
                                        activeStep === steps.length - 2 ? "Pay" : 'Next Step'}
                                </button>
                            </div>}
                    </div>
                </div>
            </div>
        );
    }
}

CustomizedStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(CustomizedStepper);