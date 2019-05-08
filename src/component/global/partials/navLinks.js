import React from 'react';
// import MaterialIcon from '../materialicon';
import { Link } from 'react-router-dom';

class NavLinks extends React.Component {
    render() {
        return (
            <ul id="nav-mobile"
                style={{
                    width: "45%",
                }}
                className="right hide-on-med-and-down container">
                {this.listItems()}

            </ul>
        )
    }

    listItems() {

        let temp = [], i;

        for (i = 0; i < this.props.text.length; i++) {

            if (this.props.active === this.props.text[i]) {
                temp.push(
                    <li key={i}>
                        <Link to={this.props.text[i]} className="active waves-effect waves-light">
                            {this.props.text[i]}
                        </Link>
                    </li>
                )
            }
            else {
                temp.push(
                    <li key={i}>
                        <Link to={this.props.text[i]} className="waves-effect waves-light">
                            {this.props.text[i]}
                        </Link>
                    </li>
                );
            }
        }
        return temp;
    }
}

export default NavLinks;