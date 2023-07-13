import {
  BsBuildingFill,
  BsDisplayportFill,
  BsFillCalendarCheckFill,
  BsFillCarFrontFill,
  BsGeoAltFill,
  BsCurrencyDollar,
} from "react-icons/bs";

const CarDetails = (props) => {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    image,
    price,
    description,
  } = props;

  return (
    <div className="max-w-[900px] m-auto flex flex-col max-[768px]:my-0 max-[768px]:mx-[20px]">
      <img src={image} alt="car" className="w-full rounded-[5px]" />
      <h3 className="mt-[40px] mb-[20px] text-[1.5rem]">
        {name} {model}
      </h3>
      <div className="details">
        <div>
          <BsBuildingFill size={22} />
          <p>Company</p>
          <span>{name}</span>
        </div>
        <div>
          <BsDisplayportFill size={22} />
          <p>Model</p>
          <span>{model}</span>
        </div>
        <div>
          <BsFillCalendarCheckFill size={22} />
          <p>First Registration</p>
          <span>{year}</span>
        </div>
        <div>
          <BsFillCarFrontFill size={22} />
          <p>kms driven</p>
          <span>{distance}</span>
        </div>
      </div>
      <div className="details">
        <div>
          <BsGeoAltFill size={22} />
          <p>Location</p>
          <span>{location}</span>
        </div>
      </div>
      <div className="details">
        <p className="my-[15px] text-[1.3rem] font-semibold">
          Extra Information
        </p>
        <p className="text-gray-500 text-justify mb-[10px]">{description}</p>
      </div>
      <div className="details">
        <div>
          <BsCurrencyDollar size={22} />
          <p className="text-[1.5rem]">Price:</p>
          <span className="text-[1.5rem]">{price}</span>
        </div>
      </div>
      <button className="bg-mainColor text-[1.5rem] p-[10px] rounded-[5px] my-[50px] border-none text-white">
        Buy
      </button>
    </div>
  );
};

export default CarDetails;
