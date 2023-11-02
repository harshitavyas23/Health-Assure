import React from "react";
import { Link } from "react-router-dom";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import docImage from "../assets/images/about.png";
import { services } from "../assets/data/services";

import "@fortawesome/fontawesome-free/css/all.css";

function Home() {
  return (
    <>
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help patients live a healthy, longer life.
                  </h1>
                  <p className="text__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla explicabo ex laudantium nemo praesentium. Aut earum
                    voluptate cum aspernatur maiores accusantium, nobis, libero
                    veritatis iusto ipsa possimus facere molestiae ratione!
                  </p>
                </div>
                <Link to="/doctors">
                  <button className="btn">Book an Appointment</button>
                </Link>
                <div className="flex space-x-7">
                  <div>
                    <h2 className="font-[600] text-[32px]">30+</h2>
                    <span className="mt-[-40px] w-[50px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="mt-[-27px]">Years of experience </p>
                  </div>
                  <div>
                    <h2 className="font-[600] text-[32px]">50+</h2>
                    <span className="mt-[-40px] w-[60px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="mt-[-27px]">Clinic Locations</p>
                  </div>
                  <div>
                    <h2 className="font-[600] text-[32px]">100%</h2>
                    <span className="mt-[-40px] w-[60px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="mt-[-27px]">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <img src={heroImg01} alt="/" />
                <div className="ml-[10px] mt-[19px]">
                  <img src={heroImg02} alt="/" />
                  <img className="mt-[10px]" src={heroImg03} alt="/" />
                </div>
              </div>
            </div>
            <div className="mt-[20px]">
              <h1 className="text-[20px] leading-[23px] text-headingColor font-[700] md:text-[40px] md:leading-[46px] text-center">
                Providing the best <br /> medical services
              </h1>
              <p className="text__para text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Voluptatem, exercitationem assumenda? Corporis eos ullam ea
                commodi porro dolores eligendi excepturi.
              </p>
              <div className="flex items-center mt-[60px]">
                <div className="flex flex-col items-center ml-[100px]">
                  <img src={icon01} alt="/" />
                  <h2 className="font-[600] text-[22px]">Find a Doctor</h2>
                  <p className="text__para mt-[-13px] text-center">
                    Lorem ipsum dolor sit amet consectetur <br />
                    elit. Illum sint omnis dolore adipisci <br />
                    aut eligendi jhfuyefy?
                  </p>
                  <div className="mt-[15px] w-12 h-12 rounded-full bg-primaryColor flex items-center justify-center hover:bg-yellowColor">
                    <Link to="/doctors">
                      <i className="fas fa-arrow-right text-[#FFFFFF] text-xl"></i>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center ml-[150px]">
                  <img src={icon02} alt="/" />
                  <h2 className="font-[600] text-[22px]">Find a Location</h2>
                  <p className="text__para mt-[-13px] text-center">
                    Lorem ipsum dolor sit amet consectetur <br />
                    elit. Illum sint omnis dolore adipisci <br />
                    aut eligendi junfb?
                  </p>
                  <div className="mt-[15px] w-12 h-12 rounded-full bg-primaryColor flex items-center justify-center hover:bg-yellowColor">
                    <i className="fas fa-arrow-right text-[#FFFFFF] text-xl hover:text-black"></i>
                  </div>
                </div>
                <div className="flex flex-col items-center ml-[100px]">
                  <img src={icon03} alt="/" />
                  <h2 className="font-[600] text-[22px]">Book Appointment</h2>
                  <p className="text__para mt-[-13px] text-center">
                    Lorem ipsum dolor sit amet consectetu <br />
                    elit. Illum sint omnis dolore adipisci <br />
                    aut eligendi juedhu?
                  </p>
                  <div className="mt-[15px] w-12 h-12 rounded-full bg-primaryColor flex items-center justify-center hover:bg-yellowColor">
                    <i className="fas fa-arrow-right text-[#FFFFFF] text-xl hover:text-black"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-[45px]">
              <img className="h-41 w-41" src={docImage} alt="" />
              <div className="ml-[35px] p-[10px]">
                <h1 className="text-[20px] leading-[23px] text-headingColor font-[700] md:text-[40px] md:leading-[46px]">
                  Proud to be one of the nations
                  <br /> best
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus nesciunt incidunt doloribus! Adipisci totam
                  repudiandae provident non voluptates eveniet quaerat possimus
                  magnam nesciunt suscipit, ad quis magni voluptatem doloremque
                  nemo culpa in voluptate ex eum. Sit quasi perspiciatis
                  excepturi odit provident beatae? Rerum vitae cupiditate
                  recusandae modi hic quos quo? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nulla, velit obcaecati
                  temporibus explicabo soluta labore.
                  <br /> Sapiente tempora cupiditate corrupti nihil, nobis
                  facere quis dolorum! Nobis harum explicabo nihil id vero.
                </p>
                <Link to="/doctors">
                  <button className="mt-[60px] btn">Book Appointment</button>
                </Link>
              </div>
            </div>
            <div id="services">
              <div className="mt-[60px]">
                <div className="mt-[30px]">
                  <h1 className="text-[20px] leading-[23px] text-headingColor font-[700] md:text-[40px] md:leading-[46px] text-center">
                    Our medical Services
                  </h1>
                  <p className="text__para text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus nesciunt incidunt doloribus! Adipisci totam
                    repudiandae provident non voluptates eveniet quaerat
                    possimus magnam nesciunt suscipit, ad quis magni voluptatem
                    doloremque
                  </p>
                </div>
              </div>
              <div className="my-custom-class grid grid-cols-3 gap-4">
                {services.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-blueColor p-10 ml-[15px] mt-[25px] rounded-lg"
                    >
                      <div className="mt-[-46px]">
                        <h2 className="font-[700] text-[20px]">{item.name}</h2>
                        <p className="text__para mt-[-21px]">{item.desc}</p>
                        <div className="mt-[15px] w-12 h-12 rounded-full bg-primaryColor flex items-center justify-center hover:bg-yellowColor">
                          <Link to="/doctors">
                            <i className="fas fa-arrow-right text-[#FFFFFF] text-xl"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="reviews">
              
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default Home;
