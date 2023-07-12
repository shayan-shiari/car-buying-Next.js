import carsData from "@/data/carsData";
import CarsList from "@/components/templates/CarsList";

const Hatchback = () => {
  const hatchbackCars = carsData.filter(
    (item) => item.category === "hatchback"
  );

  return <CarsList data={hatchbackCars}/>;
};

export default Hatchback;
