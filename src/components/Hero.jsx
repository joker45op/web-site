import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-3/5">
            <h1 className="text-5xl font-bold">
              Transforming Electrical and Fabrication Works with Excellence
            </h1>
            <p className="py-6 w-3/5">
              Discover our wide range of high-quality electrical products and
              fabrication services that exceed expectations.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <img
            src="/hero.png"
            className="max-w-sm rounded-lg shadow-2xl w-2/5"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
