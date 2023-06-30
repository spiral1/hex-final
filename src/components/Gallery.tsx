import React, { useState } from 'react';
import FsLightbox from "fslightbox-react";

import config from '../config/index.json';
import Divider from './Divider';

const Gallery = () => {
  const { company } = config;
  const { logo, name: companyName } = company;
  const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

  function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

  return (
    <div id="gallery" className="bg3 py-12">
      <div className="items-center">
        <img src={logo} alt={companyName} className="w-16 h-16 mx-auto" />
      </div>
      <div className="lg:text-center">
        <h1
          className={`w-full my-2 text-5xl font-bold  text-center text-primary`}
        >
          Gallery
        </h1>
        <Divider />
      </div>
      <ul id="hexGrid">
        <li className="hex" onClick={() => openLightboxOnSlide(1)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/7.jpg"
                alt=""
              />
              
            </a>
            
          </div>
        </li>
        
        <li className="hex" onClick={() => openLightboxOnSlide(2)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/2.jpg"
                alt=""
              />
              
            </a>
          </div>
        </li>
        
        <li className="hex" onClick={() => openLightboxOnSlide(3)}>
          <div className="hexIn">
            <a className="hexLink">
              <img
                src="/assets/images/gallery/thumbs/3.jpg"
                alt=""
              />
              
            </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(4)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/5.jpg"
                alt=""
              />
                          </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(5)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/8.jpg"
                alt=""
              />
                          </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(6)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/6.jpg"
                alt=""
              />
                          </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(7)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/1.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(8)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/4.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(9)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/16.jpg"
                alt="" 
              />
                          </a>
          </div>        
          </li>
        <li className="hex" onClick={() => openLightboxOnSlide(10)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/10.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(11)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/11.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(12)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/18.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(13)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/13.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(14)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/26.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(15)}>
          <div className="hexIn">
            <a className="hexLink" >
              <img
                src="/assets/images/gallery/thumbs/15.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(16)}>
          <div className="hexIn">
            <a className="hexLink">
              <img
                src="/assets/images/gallery/thumbs/21.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(17)}>
          <div className="hexIn">
            <a className="hexLink">
              <img
                src="/assets/images/gallery/thumbs/17.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(18)}>
          <div className="hexIn">
            <a className="hexLink">
              <img
                src="/assets/images/gallery/thumbs/12.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(19)}>
          <div className="hexIn">
            <a className="hexLink">
              <img
                src="/assets/images/gallery/thumbs/19.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(20)}>
          <div className="hexIn">
            <a className="hexLink">
              <img
                src="/assets/images/gallery/thumbs/20.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(21)}>
          <div className="hexIn">
            <a className="hexLink">
              <img
                src="/assets/images/gallery/thumbs/9.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(22)}>
          <div className="hexIn">
            <a className="hexLink">
              <img
                src="/assets/images/gallery/thumbs/22.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(23)}>
          <div className="hexIn">
            <a className="hexLink">
              <img
                src="/assets/images/gallery/thumbs/23.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(24)}>
          <div className="hexIn">
            <a className="hexLink">
              <img
                src="/assets/images/gallery/thumbs/24.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(25)}>
          <div className="hexIn">
            <a className="hexLink">
              <img
                src="/assets/images/gallery/thumbs/25.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(26)}>
          <div className="hexIn">
            <a className="hexLink">
              <img
                src="/assets/images/gallery/thumbs/14.jpg"
                alt=""
              />
              </a>
          </div>
        </li>
        <li className="hex" onClick={() => openLightboxOnSlide(27)}>
          <div className="hexIn">
            <a className="hexLink">
              <img
                src="/assets/images/gallery/thumbs/27.jpg"
                alt=""
              />
             
            </a>
          </div>
        </li>
      </ul>
      <FsLightbox
				toggler={lightboxController.toggler}
				sources={[
					
          "assets/images/gallery/7.jpg",
					"assets/images/gallery/2.jpg",
          "assets/images/gallery/3.jpg",
          "assets/images/gallery/5.jpg",
          "assets/images/gallery/8.jpg",
          "assets/images/gallery/6.jpg",
          "assets/images/gallery/1.jpg",
          "assets/images/gallery/4.jpg",
          "assets/images/gallery/16.jpg",
          "assets/images/gallery/10.jpg",
          "assets/images/gallery/11.jpg",
          "assets/images/gallery/18.jpg",
          "assets/images/gallery/13.jpg",
          "assets/images/gallery/26.jpg",
          "assets/images/gallery/15.jpg",
          "assets/images/gallery/21.jpg",
          "assets/images/gallery/17.jpg",
          "assets/images/gallery/12.jpg",
          "assets/images/gallery/19.jpg",
          "assets/images/gallery/20.jpg",
          "assets/images/gallery/9.jpg",
          "assets/images/gallery/22.jpg",
          "assets/images/gallery/23.jpg",
          "assets/images/gallery/24.jpg",
          "assets/images/gallery/25.jpg",
          "assets/images/gallery/14.jpg",
          "assets/images/gallery/27.jpg"
          
					
				]}
        slide={lightboxController.slide}
        svg = {{
          slideButtons: {
          previous: {
            width: "40px",
          },
          next: {
            title: "Next"
          }
        }
      }}
			/>
    </div>
  );
};

export default Gallery;
