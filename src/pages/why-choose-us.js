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
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={img}
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
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={img2}
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
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={img3}
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
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={img2}
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
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={img2}
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
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={img2}
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
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                      <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
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
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
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
