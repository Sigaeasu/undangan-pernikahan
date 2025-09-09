const BrideGroomBox = ({ 
  image, 
  name, 
  parentTitle, 
  parents, 
  reverse = false 
}) => {
  return (
    <div className={`flex items-center gap-6 ${reverse ? "flex-row-reverse" : ""}`}>
      <img 
        src={image} 
        alt={name} 
        width={200} 
        height={500} 
        className="mb-6" 
      />
      <div className={reverse ? "text-end" : "text-start"}>
        <p className="font-delius text-[18px] mb-[10px] secondary-text">{name}</p>
        <p className="font-poiret text-[12px]">{parentTitle}</p>
        <p className="font-poiret text-[12px]">
          {parents[0]} <br /> & <br /> {parents[1]}
        </p>
      </div>
    </div>
  );
};

export default BrideGroomBox;
