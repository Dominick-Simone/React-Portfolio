import React from 'react'
import "../styles/contact.css"

const Contact = () => {
    return (
        <div className="formComponent">
            <form>
                <div>
                    <label className="formText">Name</label>
                    <input className="formInput" type="text" placeholder="Enter your name" />
                </div>
                <div>
                    <label className="formText">Email</label>
                    <input className="formInput" type="text" placeholder="Email" />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Contact
