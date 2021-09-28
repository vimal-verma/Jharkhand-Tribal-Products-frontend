import React from 'react'
import meet from '../assets/meet.png'
import skype from '../assets/skypee.png'
import goto from '../assets/goto.png'
import flag1 from '../assets/flag-1.png'
import flag2 from '../assets/flag-2.png'
import flag3 from '../assets/flag-3.png'
import '../App.css'

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>
        Let’s Get to <span className="contact-heading">Talkin’</span>
      </h1>
      <div className="contact-row">
        <div className="contact-column">
          <h2>
            <i class="fas fa-headset"></i> Support
          </h2>
          <ul>
            <li>
              <i class="fas fa-user-tie"></i>
              <span>Talk to:</span>
              <br />
              <a href="mailto:support@Vimal.us">Technical Support</a>
            </li>
            <li>
              <i class="fas fa-envelope-open-text"></i>
              <span>Mail us for:</span>
              <br />
              <a href="mailto:support@Vimal.us">Complaint/Suggestion</a>
            </li>
          </ul>
        </div>
        <div className="contact-column">
          <h2>
            <i class="fas fa-video"></i> Video Call
          </h2>
          <ul>
            <li>
              <img src={meet} alt="meet" />
              <a href="https://meet.google.com/"> Google Meet</a>
            </li>
            <li>
              <img src={skype} alt="skype" />
              <a href="https://meet.google.com/"> Skype Video</a>
            </li>
            <li>
              <img src={goto} alt="goto" />{' '}
              <a href="https://meet.google.com/">GoTo Meeting</a>
            </li>
          </ul>
        </div>
        <div className="contact-column">
          <h2>
            <i class="fas fa-phone-volume"></i> Call Us
          </h2>
          <ul>
            <li>
              <img src={flag1} alt="flag1" />{' '}
              <a href="tel:+913248327489">+91 3248327489</a>
            </li>
            <li>
              <img src={flag2} alt="flag2" />{' '}
              <a href="tel:+913248327489">+1 32483274896</a>
            </li>
            <li>
              <img src={flag3} alt="flag3" />{' '}
              <a href="tel:+913248327489">+44 3248327489</a>
            </li>
          </ul>
        </div>
        <div className="contact-column">
          <h2>
            <i class="fas fa-envelope"></i> Email Us
          </h2>
          <ul>
            <li>
              <span>Services:</span>{' '}
              <a href="mailto:support@Vimal.us">
                support@Vimal.us
              </a>
            </li>
            <li>
              <span>HR:</span>{' '}
              <a href="mailto:support@Vimal.us">
                support@Vimal.us
              </a>
            </li>
            <li>
              <span>Training:</span>{' '}
              <a href="mailto:support@Vimal.us">
                support@Vimal.us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
