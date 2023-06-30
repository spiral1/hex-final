import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { company, product } = config;
  const { logo, name: companyName } = company;
  const [firstItem, secondItem, thirdItem] = product.items;

  return (
    <section className={`py-8 bg3`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <div className="items-center">
          <img src={logo} alt={companyName} className="w-16 h-16 mx-auto" />
        </div>
        <h1
          className={`w-full my-2 text-5xl font-bold  text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`sm:w-1/2 p-6 bg-background`}>
            <h3
              className={`text-3xl text-primary  font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-secondary text-justify`}>
              {firstItem?.description}
            </p>
            <ul className="list-disc text-secondary marker:text-primary ml-3 mt-5">
              <li>{firstItem?.one}</li>
              <li>{firstItem?.two}</li>
              <li>{firstItem?.three}</li>
              <li>{firstItem?.four}</li>
            </ul>
          </div>
          <div className={`w-full sm:w-1/2 p-6 bg-background`}>
            <img src={firstItem?.img} alt={firstItem?.title} />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row bg-background2`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img src={secondItem?.img} alt={secondItem?.title} />
          </div>
          <div className={`w-full sm:w-1/2 p-6 `}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-primary font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-secondary mb-8 text-justify`}>
                {secondItem?.description}
              </p>
              <ul className="list-disc text-secondary marker:text-primary ml-3 mt-5">
                <li>{secondItem?.one}</li>
                <li>{secondItem?.two}</li>
                <li>{secondItem?.three}</li>
                <li>{secondItem?.four}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap bg-background`}>
          <div className={`sm:w-1/2 p-6 `}>
            <h3
              className={`text-3xl text-primary  font-bold leading-none mb-3`}
            >
              {thirdItem?.title}
            </h3>
            <p className={`text-secondary text-justify`}>
              {thirdItem?.description}
            </p>
            <br></br>
            <p className={`text-secondary text-justify`}>
              {thirdItem?.description2}
            </p>
            <ul className="list-disc text-secondary marker:text-primary ml-3 mt-5">
              <li>{thirdItem?.one}</li>
              <li>{thirdItem?.two}</li>
              <li>{thirdItem?.three}</li>
              <li>{thirdItem?.four}</li>
            </ul>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img src={thirdItem?.img} alt={thirdItem?.title} />
          </div>
        </div>
        <div className={`flex flex-wrap bg-background`}>
          <div className={` p-6 `}>
           <img src={product.extras} alt="danley audio"/>
          </div> 
          
        </div>
      </div>
    </section>
  );
};

export default Product;
