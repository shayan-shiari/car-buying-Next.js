import carsData from "@/data/carsData";
import CarsList from "@/components/templates/CarsList";

const Sport = () => {
  const soprtCars = carsData.filter(
    (item) => item.category === "sport"
  );

  return <CarsList data={soprtCars}/>;
};

export default Sport;
