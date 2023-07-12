import carsData from "@/data/carsData";
import CarsList from "@/components/templates/CarsList";

const Suv = () => {
  const suvCars = carsData.filter(
    (item) => item.category === "suv"
  );

  return <CarsList data={suvCars}/>;
};

export default Suv;
