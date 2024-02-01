import CertCard from "./CertCard.js"

import awsCert from "../assets/certificates/aws-cert.png"
import webTechCert from "../assets/certificates/web-tech-cert.png"
import uiCert from "../assets/certificates/ui-cert.png"

import HrCurve from "./HrCurve.js"



export default function Certs(){
    return (
        <div id="certificates" className="mt-4 mb-10 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">These credentials not only validate my expertise in key areas but also underscore my commitment to continuous learning and staying abreast of industry best practices.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 mb-10 gap-5">
                <CertCard name="User Interface: Plug in the right Element" img={uiCert} issued="Don Honorio State University" date="June 2021" />
                <CertCard name="AWS - How to setup?" img={awsCert} issued="Don Honorio State University" date="April 2022" />
                <CertCard name="Blending Web Technologies in Business using the Right Tools" img={webTechCert} issued="Don Honorio State University" date="May 2022" />
            </div>
            <HrCurve className="mt-10 mb-10"/>
        </div>
    )
}
