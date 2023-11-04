import React from "react";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            為客人打造更美好的環境
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src="https://thecleanables.com/wp-content/uploads/2022/06/New-Project.png"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  商業清潔
                </h2>
                <p className="text-md font-medium"></p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src="https://kepstencleaningservices.com/wp-content/uploads/2021/12/21.png"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  大廈清潔
                </h2>
                <p className="text-md font-medium"></p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src="https://www.enviropurehome.com/wp-content/uploads/2020/03/Group-105.png"
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  家居清潔
                </h2>
                <p className="text-md font-medium"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="5em"
                  width="5em"
                >
                  <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                </svg>
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                <span className="font-black">深層家居清潔</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  我們的團隊配備合安全規格的工具以及優質的用料，為全港提供專業清潔服務，包括家居大掃除和裝修後清潔。我們每天在住所裡活動除了為家裡衍生污漬外，透過與外界的接觸更是容易把細菌帶到家中。
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="5em"
                  width="5em"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M8.203 2.004c1.261 0 2.304 1.103 2.476 2.538l8.483 8.484-7.778 7.778a3 3 0 01-4.243 0L2.9 16.562a3 3 0 010-4.243l2.804-2.805V4.961c0-1.633 1.12-2.957 2.5-2.957zm.5 2.957v1.553l-1 1V4.961c0-.327.224-.591.5-.591.277 0 .5.264.5.591zm0 5.914V9.342l-4.39 4.391a1 1 0 000 1.414l4.243 4.243a1 1 0 001.414 0l6.364-6.364-5.63-5.63v3.48l-.003.128h-2.01a.698.698 0 00.012-.129z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M16.859 16.875a3 3 0 104.242 0l-2.121-2.121-2.121 2.12z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                <span className="font-black">全面家居護理</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  本公司為大眾家居提供全面的家居護理服務。為了令閣下有一個乾淨舒適的家居，本公司因應閣下不同的需要，選用環保清潔劑及確保人畜無害，確保家中老幼和竉物帶來全面保障。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
