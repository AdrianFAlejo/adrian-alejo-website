import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import reactIcon from "../assets/skills/react.svg"
import jira from "../assets/skills/jira-icon.svg"
import sourcetree from "../assets/skills/sourcetree-icon.svg"
import css from "../assets/skills/ccs-icon.png"
import flutter from "../assets/skills/flutter-icon.png"
import scala from "../assets/skills/scala-icon.png"


import HrCurve from './HrCurve.js';

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      };

    return (
        <div id="skills" className="mt-10 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Complementing my academic and professional background are my well-honed skills in software development.</p>

            <div className="mt-4 mb-12">
                <Slider {...settings}>
                    <div>
                    <SkillCard name="JavaScript" experience="2 years" img={javascript} />
                        <SkillCard name="React" experience="1 year and 10 months" img={reactIcon} />
                        <SkillCard name="Jira" experience="1 year and 10 months" img={jira} />
                        <SkillCard name="Flutter" experience="1 year" img={flutter} />
                        
                    </div>
                    <div>
                        <SkillCard name="Cascading Style Sheets" experience="2 years" img={css} />
                        <SkillCard name="React Native" experience="1 year and 10 months" img={reactIcon} />
                        <SkillCard name="Sourcetree" experience="1 year and 10 months" img={sourcetree} />
                        <SkillCard name="Scala" experience="1 year" img={scala} /> 
                    </div>
                </Slider>
            </div>
            <HrCurve/>
        </div>
    )
}