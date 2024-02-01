import HrCurve from "./HrCurve.js";
import WorkExpCard from "./WorkExpCard.js";
import hooliLogo from '../assets/company/hooli-logo.png';
import sanSimonLogo from '../assets/company/sansimon-logo.png';
import flutterLogo from '../assets/company/flutter-logo.jpeg';

export default function WorkExp(){
    return (
        <div id="workexp" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Work Experiences</h1>
            <p className="font-light text-gray-400">Highlighting my professional journey, I bring a wealth of experience in IT industry.</p>

            <div className="flex flex-col mt-4 mb-10 gap-5">
                <WorkExpCard jobTitle="Software Engineer" companyName="Hooli Software Development Services" imageUrl={hooliLogo} place="Marilao, Bulacan" date="March 2022 - February 2024" />
                <WorkExpCard jobTitle="Mobile Developer" companyName="Freelancer" imageUrl={flutterLogo} place="Pampanga, Philippines" date="January 2020 - January 2021"  />
                <WorkExpCard jobTitle="Data Encoder" companyName="Municipality of San Simon Pampanga (Human Resources Department)" imageUrl={sanSimonLogo} place="San Simon, Pampanga" date="March 2018"  />
            </div>
            <HrCurve/>
        </div>
    )
}
