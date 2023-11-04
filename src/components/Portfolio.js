import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <div className="my-4 py-4" id="portfolio">
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
          服務範圍
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
        </div>

        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                  室內空間霧化消毒
                </h4>
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                  有機納米消毒塗層
                </h4>
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                  房間消毒服專業除霉
                </h4>
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                  光觸媒除甲醛
                </h4>
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                  家居大掃除
                </h4>
                <img src="https://lk-cleaning.com/wp-content/uploads/2022/10/%E6%B7%B1%E5%B1%A4%E5%AE%B6%E5%B1%85%E6%B8%85%E6%BD%94.jpg"></img>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                裝修後清潔
                </h4>
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                高溫蒸洗洗衣機、冷氣機、乾衣機、雪櫃
                </h4>
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                家居殺蟲、滅蟲、殺菌
                </h4>
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                床褥梳化消毒除塵蟎
                </h4>
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                窗簾及布藝梳化消毒除塵蟎
                </h4>
                <img src="https://lk-cleaning.com/wp-content/uploads/2022/10/%E6%B7%B1%E5%B1%A4%E5%AE%B6%E5%B1%85%E6%B8%85%E6%BD%943.jpg"></img>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                蒸氣地板服地面深層清潔
                </h4>
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                清洗天台及花園
                </h4>
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                外牆清洗、石材護理及翻新
                </h4>
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                清洗地毯、油木地板打蠟和雲石護理
                </h4>
                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12">
                蒸氣地板服地面深層清潔
                </h4>
                <img src="https://lk-cleaning.com/wp-content/uploads/2022/10/%E6%B7%B1%E5%B1%A4%E5%AE%B6%E5%B1%85%E6%B8%85%E6%BD%942.jpg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
