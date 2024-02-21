import HrCurve from "./HrCurve.js";
import WorkExpCard from "./WorkExpCard.js";
import hooliLogo from '../assets/company/hooli-logo.png';
import sanSimonLogo from '../assets/company/sansimon-logo.png';
import flutterLogo from '../assets/company/flutter-logo.jpeg';
import sosIcon from '../assets/logo.png';
import raIcon from '../assets/launcher_icon.png';
import cwIcon from '../assets/cw_icon.jpg';
import simplify_icon from '../assets/simplify_icon.png';
import React, { useState } from 'react';

export default function WorkExp(){
    const [showHooliDescription, setShowHooliDescription] = useState(false);
    const [showFreelanceDescription, setShowFreelanceDescription] = useState(false);

    const handleHooliClick = () => {
        setShowHooliDescription(!showHooliDescription);
    };

    const handleFreelanceClick = () => {
        setShowFreelanceDescription(!showFreelanceDescription);
    };

    return (
        <div id="workexp" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Work Experiences</h1>
            <p className="font-light text-gray-400">Highlighting my professional journey, I bring a wealth of experience in IT industry.</p>

            <div className="flex flex-col mt-4 mb-10 gap-5">
                <WorkExpCard jobTitle="Software Engineer" companyName="Hooli Software Development Services" imageUrl={hooliLogo} place="Marilao, Bulacan" date="March 2022 - February 2024" icon={sosIcon} name={"SOS"} icon_2={raIcon}  name_2={"RA"} onClick={handleHooliClick} />
                {
                    showHooliDescription &&
                        <div className="bg-gray-700 p-4 rounded-md">
                            <p>
                                <span className="font-bold">Significant Other Search</span> (SOS) was built using React.js, React Native, and Scala programming languages. It has web and mobile versions, and the primary objective is to help individuals find a significant other. . The main feature of the application is to find your significant other, it has a feature like filter all the user according to your preference, find the users near you within the specific mile radius and set a calendar event once you get to know each other.
                            </p>
                            <br/>
                            <p>
                                <span className="font-bold">Ready Agent</span> (RA) is a mobile application which assists customers discover and schedule appointments for desired real estate listings and together with a real state agent. It is now accessible on both Android and iOS devices and operates in select parts of the United States. The software, created with Flutter and Golang technologies, simplifies the process of discovering and obtaining preferred real estate possibilities.
                            </p>
                        </div>
                }
                <WorkExpCard jobTitle="Mobile Developer (Flutter)" companyName="Freelancer" imageUrl={flutterLogo} place="Pampanga, Philippines" date="January 2020 - January 2021"  icon={cwIcon} name={"CW"} icon_2={simplify_icon} name_2={"SIMPLIFY"} onClick={handleFreelanceClick}/>
                {
                    showFreelanceDescription &&
                        <div className="bg-gray-700 p-4 rounded-md">
                            <p>
                                <span className="font-bold">CW Headcount</span> (CW) is developed with Flutter, serving as a compact tool to compute the required workforce for constructing bungalows or two-story houses. It efficiently determines the necessary manpower, including carpenters, masons, painters, and others, for such projects.
                            </p>
                            <br/>
                            <p>
                                <span className="font-bold">Simplify~</span> was developed to assist students in properly managing their academic tasks and improving their time use. This application helps students manage their academic and personal responsibilities. It has alarm and calendar functionality, allowing users to plan when they want to start working on tasks. It was built utilizing Flutter and Firebase to enable effective data use.
                            </p>
                        </div>
                }
                <WorkExpCard jobTitle="Data Encoder" companyName="Municipality of San Simon Pampanga (Human Resources Department)" imageUrl={sanSimonLogo} place="San Simon, Pampanga" date="March 2018"/>
            </div>
            <HrCurve/>
        </div>
    )
}
