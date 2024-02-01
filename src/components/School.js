import HrCurve from "./HrCurve.js";
import SchoolCard from "./SchoolCard.js";
import olfuLogo from '../assets/school/olfu-logo.png';
import dhvsuLogo from '../assets/school/dhvsu-logo.png';

export default function School(){
    return (
        <div id="school" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Educational Background</h1>
            <p className="font-light text-gray-400">I am pleased to present my application, accompanied by a strong educational background, to showcase my qualifications for the Software Developer position.</p>

            <div className="flex flex-col md:flex-row mt-4 mb-10 gap-5">
                <SchoolCard name="Don Honorio Ventura State University" course="Bachelor of Science in Computer Science" imageUrl={dhvsuLogo} place="Bacolor, Pampanga" date="June 2018 - August 2022" />
                <SchoolCard name="Our Lady of Fatima University" course="Science, Technology, Engineering and Mathematics (STEM)" imageUrl={olfuLogo} place="San Fernando, Pampanga" date="June 2016 - April 2018"  />
            </div>
            <HrCurve/>
        </div>
    )
}
