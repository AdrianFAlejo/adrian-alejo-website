import profile from '../assets/my-profile.jpg';
import resume from '../assets/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import HrCurve from './HrCurve';

export default function Main () {

    return (
        <>
        <div id="main" className="flex w-full h-screen flex-col md:flex-row items-center justify-center text-white relative">
            <div className='md:w-2/6 md:p-2 mx-20'>
                <img data-aos="flip-right" data-aos-duration="3000" data-aos-offset="200"  src={profile} alt="profile" className='rounded-full w-full h-auto md:object-cover'/>
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="2000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                  <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                  <h1 className="text-2xl font-bold">Adrian Alejo</h1>
                  <p class="text-xl font-bold text-gray-300">Software Engineer</p>
                  <p className="text-md font-light text-gray-400 hidden md:flex ">Dedicated and adaptable Software Engineer with nearly 2 years of hands-on experience, seeking a dynamic position where I can apply my technical proficiency, problem-solving skills, and commitment to innovation. Eager to contribute to challenging projects, collaborate with diverse teams, and embrace emerging technologies in a fast-paced and evolving software development environment.</p>
                  <br/>
                  <p className="text-md font-light text-gray-400">As a Software Engineer committed to continuous learning and adaptability, I am excited to contribute my skills and enthusiasm to a forward-thinking organization. I am eager to embrace new challenges, collaborate with innovative teams, and make a meaningful impact in the ever-evolving field of software development.</p>
               </div>   
              <ul className='flex mt-2 mb-7 gap-4 items-center'>
                  <li>
                      <a href='https://www.facebook.com/notadwiyan/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faFacebook} /></a>
                  </li>
                  <li>
                      <a href='https://github.com/AdrianFAlejo' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                  </li> 
                  <li>
                      <a href='https://www.linkedin.com/in/adrian-alejo/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                  </li>
              </ul>
              <a href={resume} rel="noreferrer" target="_blank" className="bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4">Contact me</a>
          </div>
        </div>
        <HrCurve/>
        </>
    )
}
