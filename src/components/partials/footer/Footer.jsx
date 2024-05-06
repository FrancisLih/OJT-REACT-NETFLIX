import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-black p-4 border-t-[5px]  cursor-pointer border-stone-600">

        <div className='container ml-auto text-gray-200 underline '>

        <ul className='flex gap-10 text-2xl m-4 ml-0'>
            <li><FaFacebookF/></li>
            <li><FaInstagram/></li>
            <li><FaTwitter/></li>
            <li><FaYoutube/></li>
        </ul>
            Questions? Contact us
            <div className='grid grid-cols-4 w-[80%] gap-5'>
            <ul className='space-y-4'>
                <li>FAQ</li>
                <li>Investor Relations</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
                <li><button className='btn flex items-center gap-2'><IoLanguage/>English<FaCaretDown/></button></li>
                <li>Netflix Philippines</li>
            </ul>
            <ul className='space-y-4'>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
                <li>Only on Netflix</li>
            </ul>
            <ul className='space-y-4'>
                <li>Account</li>
                <li>Redeem Gift Cards</li>
                <li>Privacy</li>
                <li>Speed Test</li>
            </ul>
            <ul className='space-y-4'>
                <li>Media Center</li>
                <li>Buy Gift Cards</li>
                <li>Cookie Preferences</li>
                <li>Legal Notices</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer