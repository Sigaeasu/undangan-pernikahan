const LocationInfo = ({ 
  title, 
  date, 
  time, 
  locationName, 
  locationDetail,
  locationUrl
}) => {
  return (
    <div className="relative bg-white p-5">
        <div className="absolute top-0 left-0 w-14 h-14 bg-[url('/corner-line.png')] bg-contain bg-no-repeat -rotate-90"></div>
        <div className="absolute bottom-0 right-0 w-14 h-14 bg-[url('/corner-line.png')] bg-contain bg-no-repeat rotate-90"></div>
    
        <p className="font-funnel text-[18px] mb-[10px] primary-text">{title}</p>
        <p className="font-poiret font-bold text-[14px]">{date}</p>
        <p className="font-poiret text-[12px] mb-[16px]">{time}</p>
        <p className="font-funnel text-[16px] primary-text">{locationName}</p>
        <p className="font-funnel text-[10px]">{locationDetail}</p>
    </div>
  );
};

export default LocationInfo;
