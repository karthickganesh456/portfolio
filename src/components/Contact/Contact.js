import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import { Facebook,Instagram,LinkedIn,WhatsApp } from '@material-ui/icons'
import "./Contact.css"

const Contact = () => {
    return (
        <Element className="contact" id="contact">
            <h1>Contact</h1>
            <div className="contact__container">
                <p>
                    Email Id :<span> karthickganesh3456@gmail.com</span>
                </p>
                <p>Github Id :<span> karthickganesh3456</span>
                </p>
                <div className="contact__icons">
                    <a href="google.com">
                        <IconButton>
                        <LinkedIn/>
                        </IconButton>
                    </a>
                    <a href="google.com">
                        <IconButton>
                        <WhatsApp/>
                        </IconButton>
                    </a>
                    <a href="google.com">
                        <IconButton>
                        <Facebook/>
                        </IconButton>
                    </a>
                    <a href="google.com">
                        <IconButton>
                        <Instagram/>
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Contact
