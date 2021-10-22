import React from 'react'
import "../styles/contact.css"

const Contact = () => {
    return (
        <div class="contactOuterDiv">
            <div class="contactDiv">
                <h1 class="contactText">Contact Me</h1>
                <h2 class="contactText">Email:</h2>
                <h3 class="contactText">DomSimoneDev@gmail.com</h3>
                <h2 class="contactText">Phone Number:</h2>
                <h3 class="contactText">(570) 939-2003</h3>
            </div>
            <div className="formComponent">
                <form class="submissionForm">
                    <div>
                        <label className="formText topLabel" for="nameInput">Your Name</label>
                        <input className="formInput" for="nameInput"type="text" />
                    </div>
                    <div>
                        <label className="formText" for="emailInput">Your Email</label>
                        <input className="formInput" id="emailInput" type="email" placeholder="example@mail.com" />
                    </div>
                    <div>
                        <label className="formText" for="messageTextArea">Message</label>
                        <textarea id="messageTextArea" ></textarea>
                    </div>
                    <input type="submit" class="submitBtn" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact
