import Card from "../module/Card";

const CarsPage = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-around max-w-[1200px] m-auto">
      {data.map((item) => {
        return <Card key={item.id} {...item}/>;
      })}
    </div>
  );
};

export default CarsPage;
