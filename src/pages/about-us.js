import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-t float-right" src="https://lk-cleaning.com/wp-content/uploads/2022/09/attractive-positive-young-asian-woman-staff-uniform-apron-spraying-detergent-alcohol-counter-product-cabinet-wiping-it-with-soft-cloth-when-disinfecting-cafe-ther-morning-safe-clean-2048x1366.jpg" />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl  text-blue-900 font-bold">
              關於我們
            </h3>
            <div>
              <p className="my-3 text-gray-600">
              良景清潔公司擁有超過二十年服務經驗，一直為廣大市民的家居、辦公室、餐廳、店鋪、私人會所等等，提供一站式清潔消毒服務，配合以客為尊的服務，致力為客人處理清潔上繁複雜務。 我們努力減少使用不必要的有毒化學劑，減少對環境的污染。
              </p>
            </div>

            <div>
              <p className="my-3 text-gray-600 ">
              良景清潔公司擁有專業、細心、負責任的精英團隊，團隊擁有豐富的清潔服務經驗，確保提供最高的標準。我們為每位客戶度身訂製最優秀的清潔方案，靈活運用創新及科技化的工具，達至最佳的清潔效果。本公司選用的工具，均經過嚴格挑選，環保天然的清潔用品均符合國際安全標準，為顧客帶來真正清新、無污染的潔淨環境。
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
