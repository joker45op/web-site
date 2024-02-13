import FCard from "./FCard";

const FeturedProducts = () => {
  return (
    <div className="flex flex-col gap-9">
      <div className="text-center font-semibold text-xl py-3 bg-accent-200 rounded-xl">Featured
      </div>
      <FCard />
      <FCard />
    </div>
  );
};

export default FeturedProducts;
