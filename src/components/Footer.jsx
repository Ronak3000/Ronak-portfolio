import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import "./Footer.css"

function Footer() {
    return (
        <div className='footer-container bg-[#0d2438]'>

            {/* <hr className='pt-10 border-t border-[#a8a4f4] opacity-35' /> */}
            <div className='pt-16 text-3xl text-white content-center font-thin'>
                Follow Me
            </div>

            <div className="flex justify-center items-center gap-7 pt-12 h-8 text-white">
                <div className="icon-wrapper">
                    <a href="https://www.linkedin.com/in/ronak-sharma-18ab2a276" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size='3rem' className="icon hover:bg-[#a8a4f4]" />
                    </a>
                </div>
                <div className="icon-wrapper">
                    <a href="https://www.instagram.com/ronakeshu7026/" target="_blank" rel="noopener noreferrer">
                        <FaInstagramSquare size='3rem' className="icon hover:bg-[#a8a4f4]" />
                    </a>
                </div>
                <div className="icon-wrapper">
                    <a href="https://leetcode.com/u/ronakeshu3000/" target="_blank" rel="noopener noreferrer">
                        <SiLeetcode size='3rem' className="icon hover:bg-[#a8a4f4]" />
                    </a>
                </div>
                <div className="icon-wrapper">
                    <a href="https://github.com/Ronak3000" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare size='3rem' className="icon hover:bg-[#a8a4f4]" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
