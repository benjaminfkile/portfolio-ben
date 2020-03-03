import React, { Component } from 'react'
import axios from 'axios';
import '../Contact/Contact.css'

class Contact extends Component {

    state = {
        formFilled: true,
        success: false,
        failure: false,
        thanks: false,
        send: true,
        everythingElse: true
    }


    handleSuccess() {
        setTimeout(
            function () {
                this.setState(
                    {
                        success: false,
                        send: true
                    }
                );
                // this.reRoute()
            }
                .bind(this),
            3000
        );

    }

    handleFormFilled() {
        setTimeout(
            function () {
                this.setState(
                    {
                        formFilled: true,
                        send: true
                    }
                );
            }
                .bind(this),
            3000
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ send: false })
        this.setState({ failure: false });
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            axios({
                method: "POST",
                url: "https://rocky-lowlands-64636.herokuapp.com/send",
                data: {
                    name: name,
                    email: email,
                    message: message
                }
            }).then((response) => {
                if (response.data.msg === 'success') {
                    console.log("Message Sent.");
                    this.setState({ success: true })
                    this.resetForm()
                    this.handleSuccess()
                } else if (response.data.msg === 'fail') {
                    console.log("Message failed to send.")
                    this.setState({ failure: true })
                }
            })
        }
        else {
            this.setState({ formFilled: false })
            this.handleFormFilled()
        }
    }

    resetForm() {
        document.getElementById('Main_Form').reset();
    }

    render() {
        return (

            <div className="Contact">
                {this.state.everythingElse && <form id="Main_Form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="Name_Email">
                        <h1>
                            Say Hello
                        </h1>
                        <div className="Name_Form">
                            <label for="name">Name*</label>
                            <br></br>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <br></br>
                        <br></br>
                        <div className="Email_Form">
                            <label for="exampleInputEmail1">Email*</label>
                            <br></br>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="Message">
                        <div className="Message_Form">
                            <h2>
                                Message*
                            </h2>
                            <br></br>
                            <textarea className="form-control" rows="5" id="message"></textarea>
                        </div>
                        {this.state.send && <img id="Submit_Btn" src="./res/mail.png" alt="Send" onClick={this.handleSubmit.bind(this)} method="POST" height="42" width="42" />}

                    </div>

                </form>}
                {this.state.success && <div className="Success">
                    <h1>
                        thanks,  your message was sent!!!
                    </h1>
                </div>}
                {this.state.failure && <div className="Failure">
                    <h1>
                        well.. this is embarrasing :(
                    </h1>
                    <p>
                        try messaging me here instead
                        <br></br>
                    </p>
                    <br></br>
                    <a href="mailto:benjaminfkile@gmail.com">Ben Kile</a>
                </div>}
                {!this.state.formFilled && <div className="Incomplete_Form">
                    <h2>
                        don't leave me hangin, fill out all the fields
                        </h2>
                </div>}
            </div>
        )
    }
}


export default Contact