import React, { Component } from 'react'
import axios from 'axios';
import '../Contact/Contact.css'

class Contact extends Component {

    // state = {
    //     name: "Name",
    //     email: "Email",
    //     message: "Message"
    // }


    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        //     axios({
        //         method: "POST", 
        //         url:"http://localhost:8000/send", 
        //         data: {
        //             name: name,   
        //             email: email,  
        //             messsage: message
        //         }
        //     }).then((response)=>{
        //         if (response.data.msg === 'success'){
        //             alert("Message Sent."); 
        //             this.resetForm()               
        //         }else if(response.data.msg === 'fail'){
        //             alert("Message failed to send.")
        //         }
        //     })
        // }

        // resetForm(){
        //document.getElementById('contact-form').reset();

        fetch('https://localhost:8000/send', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                messsage: message
            })
        }).then((response) => {
        }).then(() => {
            alert(':)')
        });
    }

    render() {
        return (
            <div className="contact">
               <form>
                   <input className="input-name"></input>
                   <br></br>
                   <input className="input-email"></input>
                    <br></br>
                   <textarea className="input-message"></textarea>
               </form>
            </div>


        )
    }
}


export default Contact