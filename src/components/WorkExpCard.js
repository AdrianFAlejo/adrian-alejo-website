export default function WorkExpCard(props){
    
    return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="flex-row w-full md:bg-dark-100 rounded-md py-4 px-4 flex items-center"
    >
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
    )
}
