import { Card } from "./Card";


const Trending = () => {
  return (
    <div className="w-full h-full flex flex-col justify-normal gap-9">
      <div className="text-center font-semibold text-xl py-3 bg-accent-200 rounded-xl">
        Trending Now
      </div>
        <div className="w-full flex flex-wrap gap-2 gap-y-8 justify-evenly">
          <div className="w-60">
            <Card />
          </div>
          <div className="w-60">
            <Card />
          </div>
          <div className="w-60">
            <Card />
          </div>
          <div className="w-60">
            <Card />
          </div>
          <div className="w-60">
            <Card />
          </div>
          <div className="w-60">
            <Card />
          </div>
        </div>
    </div>
  );
};

export default Trending;
