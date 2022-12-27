import React from 'react'
import Item from './Item'
import TitleImg from '../images/hero-img.svg'

export default function SocialMedia(props) {
  return (
    <div className='services'>
        <div className="services-title"><h2>{props.title}</h2> <img className='titleImg' src={TitleImg} alt="" /></div>
        <div className="service-wrapper">
            <Item 
                socialIcon="logo-instagram"
                socialLink="https://www.instagram.com/iamnotfuad/"
                socialMedia="Instagram"
                socialName="Mobile Product Designer"
                socialDate="Jan 2023 - Present"
              />
              <Item
                socialIcon="logo-linkedin"
                socialLink="https://www.linkedin.com/in/fuad-sadiqov-9405a61a5/"
                socialMedia="Linkedin"
                socialName="UI / UX Designer"
                socialDate="Jan 2021 - Dec 2022"
              />
              <Item 
                socialIcon="logo-github"
                socialLink="https://www.github.com/Fuad303/"
                socialMedia="Github"
                socialName="Head of Product Design"
                socialDate="Jan 2021 - Present"
              />
              <Item 
                socialIcon="logo-whatsapp"
                socialLink="https://wa.me/+994503038406"
                socialMedia="Whatsapp"
                socialName="VP of Design"
                socialDate="Sep 2017 - Feb 2020"
              />
        </div>
    </div>
  )
}
