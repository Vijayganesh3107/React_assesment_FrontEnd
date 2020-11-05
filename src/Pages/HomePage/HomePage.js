import React from 'react'
import NavBarwithLogin from '../../Components/NavBars/NavBarwithLogin'
import ims from "../../Images/IMS.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen,faPhoneSquareAlt,faMapMarker} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare,faInstagramSquare,faTwitterSquare} from "@fortawesome/free-brands-svg-icons"


export default function HomePage() {
    return (
        <>
        <NavBarwithLogin></NavBarwithLogin>
        <div className="container bgColor">
      <h1 className="text-center">Invoice Management System</h1>
      <div className="history mt-xl-5">
        <div className="row">
          <div className="col-xl-6">
            <div className="images">
              <img
                src={ims}
                alt="Chicago"
              />
            </div>
          </div>
          <div className="col-xl-6 mt-xl-5 history-content">
          Invoice management is an internal business function linked to procurement and is responsible for managing and processing invoice documents from vendors and suppliers. The invoice management process usually involves the following steps: receiving the invoice, extracting invoice information, validating and verifying the invoice information, approving payments and finally archiving the invoice for future reference
          </div>
        </div>
      </div>
      <div className="contact-us mt-xl-5">
        <div className="row">
          <div className="col-xl-3 offset-xl-1">
            <h2>Address</h2>
            <FontAwesomeIcon icon={faMapMarker}/>2/41, Resolute
            Towers, 2nd Lane, MC Nicholas Rd, Chennai, 600031
          </div>
          <div className="col-xl-3 offset-xl-1">
            <h2>Contact us</h2>
            <div className="email">
            <FontAwesomeIcon icon={faEnvelopeOpen}/>
              <a href="mailto:myrecepie@gmail.com">myrecepie@gmail.com</a>
            </div>
            <div className="phone">
            <FontAwesomeIcon icon={faPhoneSquareAlt}/>
              <a href="tel:+919678187743">9678187743</a>
            </div>
          </div>
          <div className="col-xl-3 offset-xl-1 text-center social-media">
            <h2>Social Media</h2>
            <div className="faceboook">
            <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
            </div>
            <div className="insta">
            <FontAwesomeIcon icon={faInstagramSquare} size="2x"/>
            </div>
            <div className="twitter">
            <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
            </div>
          </div>
        </div>
      </div>
      <footer className="col-xl-6 mt-5">
        <div className="footer">
          MyRecipie&#174;<br />
          2/41, Resolute Towers, 2nd Lane, MC Nicholas Rd, Chennai, 600031
        </div>
      </footer>
    </div>

        </>
    )
}
