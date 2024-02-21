import { useMediaQuery } from 'react-responsive';

export default function WorkExpCard(props){ 
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="flex-row w-full bg-dark-100 md:rounded-md py-2 px-4 flex items-center justify-between"
      onClick={props.onClick}
    >
      <div className={`flex-row w-full md:flex items-center`}>
      <img
        src={props.imageUrl}
        alt={props.name}
        className="w-20 h-20 mx-5 rounded-full"
      />
      <div className={`mt-2`}>
        <h1 className="font-bold md:text-xl">{props.jobTitle}</h1>
        <p className="font-light md:text-lg">{props.companyName}</p>
        <p className="font-light text-gray-400">{props.place}</p>
        <p className="font-light text-gray-400">{props.date}</p>
        </div>
      </div>
      {
        (!isMobile && props.icon) &&
        <div className="flex-col md:flex items-center">
          <h1 className="font-bold md:pb-4 text-lg items-center">Projects</h1>
          <div className="flex-row w-full md:flex bg-yellow mr-5">
            <div className="flex-col md:flex items-center">
                <img
                  src={props.icon}
                  alt={props.name}
                  className="w-16 h-16 mx-5 rounded-lg"
                />
               <h3 className="font-light md:text-lg items-center">{props.name}</h3>
              </div>
              <div className="flex-col md:flex items-center">
                <img
                  src={props.icon_2}
                  alt={props.name_2}
                  className="w-16 h-16 mx-5 rounded-lg"
                />
                <h3 className="font-light md:text-lg items-center">{props.name_2}</h3>
              </div>
          </div>
        </div>
      }
    </div>
    )
}
