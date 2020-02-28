import React, { Component } from 'react'
import axios from 'axios';
import '../Contact/Contact.css'

class Contact extends Component {

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
        console.log("Name: " + name)
        console.log("Email: " + email)
        console.log("Message: " + message)
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
            <div className="Contact">
                <form id="Main_Form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="Name_Form">
                        <label for="name">Name:</label>
                        <br></br>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="Email_Form">
                        <label for="exampleInputEmail1">Email:</label>
                        <br></br>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="Message_Form">
                        <label for="message">Message:</label>
                        <br></br>
                        <textarea className="form-control" rows="5" id="message"></textarea>
                    </div>
                    <button type="submit" className="Submit_Btn">Submit</button>
                </form>
            </div>
        )
    }
}


export default Contact