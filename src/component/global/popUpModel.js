import React from 'react';
import SignInCard from '../PopupCards/signCard';
import SignUpCard from '../PopupCards/SignUpCard';
import ForgotPassCard from '../PopupCards/forgotCard';
import { Redirect } from "react-router-dom";

class PopUpModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { data, hide } = this.props;

        return (
            <div>
                {data === "signIn" ?
                    <SignInCard hide={hide} />
                    : data === "signUp" ?
                        <SignUpCard hide={hide} />
                        : data === "forgot" ?
                            <ForgotPassCard hide={hide} />
                            : data === "profile" ?
                                <Redirect to='/profile' /> : null}
            </div>
        )
    }

}

export default PopUpModal;