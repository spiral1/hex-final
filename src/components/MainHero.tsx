import React from 'react';

import Image from 'next/image';
import { Link } from 'react-scroll';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <div className='w-full h-screen'>
    <main className=" w-full h-screen">
      <div className="sm:text-center">
        <div className="grid place-items-center items-center mt-10">
          <Image
            src={mainHero.img}
            alt="Hex project logo"
            width="370px"
            height="470px"
            className="object-center"
          />
<div className='bg5'>
          {/*<h3 className="text-2xl tracking-tight font-bold text-white-500 sm:text-2xl md:text-3xl text-center p-4">
            <span className={`block text-secondary xl:inline `}>
            {mainHero.description}
            </span>
          </h3>
  */}
          </div>
          
          
          
        </div>
        <div className=" grid justify-items-center mt-5 sm:mt-8 sm:flex sm:justify-center justify-center">
          <div className="rounded-md shadow content-center">
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-background hover:text-secondary hover:border-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key={mainHero.secondaryAction.text}
              to={mainHero.secondaryAction.href}
              href={mainHero.secondaryAction.href}
              className={`w-full flex items-center content-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-tertiary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.secondaryAction.text}
            </Link>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
};

export default MainHero;
