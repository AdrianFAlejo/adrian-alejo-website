import {useState} from 'react'
import profile from '../assets/my-profile.jpg';
import resume from '../assets/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import HrCurve from './HrCurve';

export default function Main () {

  const [isFlipped, setIsFlipped] = useState(false);

  //Flip styling
  const flipStyles = {
      perspective: '1000px',
      borderRadius: '50%',
      width: '500px',
      height: '500px',
      transition: 'transform 3s',
      transformStyle: 'preserve-3d',
    };
  
    const flipperStyles = {
      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
    };
  
    const frontStyles = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      backfaceVisibility: 'hidden',
      zIndex: isFlipped ? '1' : '2',
    };
  
    const backStyles = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      backfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)',
      zIndex: isFlipped ? '2' : '1',
    };

    
  const handleMouseEnter = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    }
  };

    return (
        <>
        <div id="main" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
          <div
            style={{ ...flipStyles, ...flipperStyles }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div style={frontStyles}>
              <img src={profile} alt="profile" className='md:w-6/6'style={{  borderRadius: '50%' }} />
            </div>
            <div style={backStyles}>
              <img src={profile} alt="profile"className='md:w-6/6' style={{ borderRadius: '50%' }} />
            </div>
          </div>
          <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
              <div className="flex flex-col w-full mt-8">
                  <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                  <h1 className="text-2xl font-bold">Adrian Alejo</h1>
                  <p class="text-xl font-bold text-gray-300">Software Engineer</p>
                  <p className="text-md font-light text-gray-400 ">Dedicated and adaptable Software Engineer with nearly 2 years of hands-on experience, seeking a dynamic position where I can apply my technical proficiency, problem-solving skills, and commitment to innovation. Eager to contribute to challenging projects, collaborate with diverse teams, and embrace emerging technologies in a fast-paced and evolving software development environment.</p>
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
              <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4">Contact me</a>
          </div>
        </div>
        <HrCurve/>
        </>
    )
}
