import React from 'react';
import './footer.css';

// social media icons
import insta from "./images/insta.png"
import fb from "./images/fb.png"
import vk from "./images/vk.svg"
import git from "./images/git1.svg"

import logo from "./images/dh_logo.png"

function Footer() {
    return (
        <footer>
           <a href="http://dh.itmo.ru/" target="_blank"> <img id="logo" alt="logo" src={logo} /></a>
            <p className="contacts">Contact us: <a href="mailto:dh@itmo.ru"> dh@itmo.ru </a> </p>
            <div id="socialmedia">
            <a href="https://github.com/dh-center/Digital-Portraits" target="_blank"><img src={git} alt=" Instagram " /></a>
                <a href="https://www.instagram.com/dh_center/" target="_blank"><img src={insta} alt=" Instagram " /></a>
                <a href="https://vk.com/dhcenter" target="_blank"><img src={vk} alt="Facebook " /></a>
                <a href="https://www.facebook.com/dhcenter.itmo/" target="_blank"><img src={fb} alt="VK " /></a>
            </div>
        </footer>
    );
}

export default Footer
