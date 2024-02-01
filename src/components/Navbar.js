import icon from '../assets/icon.png';

export default function Navbar() {
    return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <img src={icon} className="App-logo w-10 rounded-full" alt="logo" />
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#main" className="hover:underline">About</a></li>
            <li className="p-4"><a href="#workexp" className="hover:underline">Work Experiences</a></li>
            <li className="p-4"><a href="#school" className="hover:underline">Educational Background</a></li>
            <li className="p-4"><a href="#skills" className="hover:underline">Skills</a></li>
            <li className="p-4"><a href="#certs" className="hover:underline">Certifications</a></li>
            </ul>
            
        </div>
    </div>
    )
}
