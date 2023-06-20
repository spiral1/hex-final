import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Features = () => {
  const { company, features } = config;
  const { title, description, items: featuresList } = features;
  const { logo, name: companyName } = company;
  return (
    
    <div className={`py-12 `} id="features">
      <div className="items-center">
        <img src={logo} alt={companyName} className="w-16 h-16 mx-auto" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1
            className={`w-full my-2 text-5xl font-bold  text-center text-primary`}
          >
            {title}
          </h1>
          <Divider />
          <p className="mt-4 max-w-2xl text-justify text-xl text-secondary lg:mx-auto">
            {description}
          </p>
          
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="">
                <dt>
                  <div
                    className={` flex items-center justify-center rounded-md text-tertiary border-primary`}
                  >
                    <img
                      className={` h-6 w-6 rounded-full`}
                      src={company.logo}
                      alt={company.name}
                    />

                    <p className="ml-5 text-lg leading-6 font-medium text-secondary text-center">
                      {feature.name}
                    </p>
                  </div>
                </dt>

                <div className="w-sreen mt-5 bg-white h-60"></div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
