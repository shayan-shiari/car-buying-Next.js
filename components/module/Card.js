import Location from "../icons/Location";

const Card = (props) => {
  const { id, name, model, year, distance, location, image, price } = props;
  return (
    <div className="m-[15px] p-[10px] rounded-[5px] shadow-[0px_8px_24px_rgba(149,157,165,0.2)] w-fit">
      <img src={image} alt="car" className="w-[300px] rounded-[5px]" />
      <h4 className="my-[10px] font-bold">{`${name} ${model}`}</h4>
      <p className="text-[0.85rem] my-[5px] text-gray-500">{`${year} - ${distance}km`}</p>
      <div className="flex justify-between mt-[20px] mb-[5px]">
        <p className="bg-mainColor py-[3px] px-[5px] rounded-[5px] text-[0.9rem] text-white font-bold">
          $ {price}
        </p>
        <div className="flex items-end">
          <p className="mr-[5px]">{location}</p>
          <Location />
        </div>
      </div>
    </div>
  );
};

export default Card;
