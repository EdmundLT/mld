import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
const WhyChooseUs = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="py-12">
        <div id="services" className="bg-gray-100 py-12">
          <section data-aos="zoom-in-down">
            <div className="my-4 py-4">
              <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                為什麼選擇我們
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
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-48 mx-auto"
                      src="https://lk-cleaning.com/wp-content/uploads/2022/09/data-cleaning.png"
                    />
                    <h2 className="font-semibold my-4 text-lg text-center">
                      只採用有機清潔物料，安全、無毒；美國國家環境保護局 (EPA)
                      認證冷凍面保護塗層 (預防霉菌及細菌)，為您的家庭提供
                      6個月保障。
                    </h2>
                    <p className="text-md font-medium"></p>
                  </div>
                </div>

                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <img
                      alt="card img"
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-48 mx-auto"
                      src="https://lk-cleaning.com/wp-content/uploads/2022/09/vacuum-cleaner.png"
                    />
                    <h2 className="font-semibold my-4 text-lg text-center">
                      進口防過敏吸塵機，由德國過敏症及哮喘協會 (DAAB)
                      一同研發，過濾系統能有效處理小至 0.3
                      微米的塵蟎、細菌及過敏原。
                    </h2>
                    <p className="text-md font-medium"></p>
                  </div>
                </div>

                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <img
                      alt="card img"
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-48 mx-auto"
                      src="https://lk-cleaning.com/wp-content/uploads/2022/09/mop-1-150x150.png"
                    />
                    <h2 className="font-semibold my-4 text-lg text-center ">
                      美國天然地毯清潔劑，保證百份百純天然成分，安全、沒有化學殘留物，令地毯氣味清新。
                    </h2>
                    <p className="text-md font-medium"></p>
                  </div>
                </div>
                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <img
                      alt="card img"
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-48 mx-auto"
                      src="https://lk-cleaning.com/wp-content/uploads/2022/09/bubbles-150x150.png"
                    />
                    <h2 className="font-semibold my-4 text-lg text-center">
                      天然納米消毒液殺滅細菌、病毒及霉菌；分解臭味和霉味。
                    </h2>
                    <p className="text-md font-medium"></p>
                  </div>
                </div>
                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <img
                      alt="card img"
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-48 mx-auto"
                      src="https://lk-cleaning.com/wp-content/uploads/2022/09/carpet-cleaner-150x150.png"
                    />
                    <h2 className="font-semibold my-4 text-lg text-center">
                      專業超細纖維布、納米高温消毒蒸氣機及
                      UVP殺菌紫外線機，消除塵蟎、動物皮屑及其他污染物。
                    </h2>
                    <p className="text-md font-medium"></p>
                  </div>
                </div>
                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <img
                      alt="card img"
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-48 mx-auto"
                      src="https://lk-cleaning.com/wp-content/uploads/2022/09/laundry-detergent-150x150.png"
                    />
                    <h2 className="font-semibold my-4 text-lg text-center">
                      保護您的家庭遠離哮喘、感冒和流感症狀、花粉過敏症、咽喉腫痛或皮膚痕癢等過敏反應；減少對過敏藥物的依賴。
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
                      xmlns="http://www.w3.org/2000/svg"
                      width="72"
                      height="72"
                      viewBox="0 0 512 512"
                    >
                      <path d="M96 352V96c0-35.3 28.7-64 64-64H416c35.3 0 64 28.7 64 64V293.5c0 17-6.7 33.3-18.7 45.3l-58.5 58.5c-12 12-28.3 18.7-45.3 18.7H160c-35.3 0-64-28.7-64-64zM272 128c-8.8 0-16 7.2-16 16v48H208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V256h48c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H320V144c0-8.8-7.2-16-16-16H272zm24 336c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 224c0 48.6 39.4 88 88 88H296z" />
                    </svg>
                  </div>
                  <h3
                    className="text-3xl  text-blue-900 
                            font-bold"
                  >
                    <span className="font-black">健康</span>
                  </h3>
                  <div>
                    <p className="my-3 text-xl text-gray-600 font-semibold">
                      保護您的家庭遠離哮喘、感冒和流感症狀、花粉過敏症、咽喉腫痛或皮膚痕癢等過敏反應。
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                  <div className="text-blue-900 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="72"
                      height="72"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl  text-blue-900 font-bold">
                    <span className="font-black">安全</span>
                  </h3>
                  <div>
                    <p className="my-3 text-xl text-gray-600 font-semibold">
                      專設為孕婦、嬰幼兒、寵物和敏感人士，作為綠色防敏清潔方案，不會為客戶和環境帶來影響。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhyChooseUs;
