import React from 'react';

import { Link } from 'react-scroll';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const [item] = about.items;

  return (
    <main className=" w-full block bg2">
      <div
        id="about"
        className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
      >
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={logo} alt={companyName} className="w-16 h-16" />
          </div>
          <div className={`flex flex-wrap bg-background`}>
            <div className={` sm:w-1/2 p-6 `}>
              <h3
                className={`text-3xl text-primary font-bold text-center leading-none mb-3`}
              >
                {item?.title}
              </h3>
              <p className={`text-secondary text-justify`}>
              Welcome to The Hex Project. We are a tight-knit collective of friendly, skilled individuals who bring a personal touch to your event needs. We're dedicated professionals who deliver top-quality sound and an unmatched level of personalised service. Whether you're planning a private party, a music festival or a corporate conference, we've got the expertise and equipment to make your event a success. </p> 
              <br></br>
              <p className={`text-secondary text-justify`}>
              At The Hex Project, you can expect crystal-clear, dynamic sound that rivals the biggest players in the industry with a level of personalisation that bigger companies just can't match.
</p>
<br></br>
<p className={`text-secondary text-justify`}>
We don't just provide high-end sound; we bring the whole package. From stage design to lighting and more, we enhance the visual aspect of your event to ensure that every detail is just as impressive as the sound quality.  
</p>
<br></br>
<p className={`text-secondary text-justify`}>
We understand that every event is unique, and we tailor our services to fit your specific needs. Whether you need help planning or just the right equipment and advice, our friendly crew will work with you every step of the way.
</p>
              
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className="rounded-md shadow">
                  <Link
                    spy={true}
                    active="active"
                    smooth={true}
                    duration={1000}
                    key={item?.primaryAction.text}
                    to={item?.primaryAction.href}
                    href={item?.primaryAction.href}
                    className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-background hover:text-secondary hover:border-primary md:py-4 md:text-lg md:px-10`}
                  >
                    {item?.primaryAction.text}
                  </Link>
                </div>
              </div>
            </div>

            <div className={`w-full sm:w-1/2 p-6`}>
              <img className="h-6/6" src={item?.img} alt={item?.title} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
