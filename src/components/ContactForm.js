import React from 'react'
import "../styles/contact.css"

const Contact = () => {
    return (
        <form>
            <div>
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
            </div> 
            <div>
                <label>Email</label>
                <input type="text" placeholder="Email" />
            </div> 
            

            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Contact
