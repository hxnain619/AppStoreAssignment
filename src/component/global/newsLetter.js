import React from 'react';

class NewsLetter extends React.Component {
    render() {
        return (
            <div className="card subscribe-card">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <center>
                                <h4
                                    style={{
                                        color: "#f55094",
                                        fontWeight: "bold"
                                    }}
                                >10% Discount for your subscription</h4>
                                <p
                                    style={{
                                        color: "black",
                                        fontWeight: "bold"
                                    }}
                                >
                                    Carry the day in style with this extra-large tote craftedin our chic B.B.Collection <br />
                                    textured PVC. Featuring colorful faux leather trim,<br /> this tote offers a roomy interior.</p>
                            </center>
                            <form
                                style={{
                                    marginTop: "10%"
                                }}
                            >
                                <input className="subscribe-form col s8 m4 l8 " type="email" placeholder=" Your email here" />
                                <button className="btn btn-large btn-primary col s6 m3 l2">
                                    Subscribe
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsLetter;