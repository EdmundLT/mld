import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-4xl mb-4">良景清潔公司</h3>
                <div className="text-md font-medium text-gray-600">
                  <h5>沙田大圍成運路2-8號1座7樓</h5>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-4 ml-7 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">連結</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="/about-us"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    關於我們
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/why-choose-us"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    為什麼選擇我們
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/contact"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    聯絡我們
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
              <div className="text-xl mb-6">社交媒體</div>

              <div className="text-md font-medium mb-6">
                追蹤我們的社交媒體 獲得最新資訊
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100071546031153"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500  hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                       <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                    </a>
                  </li>
                  <li className="ml-4">
                    <a
                      href="https://www.instagram.com/lkcleaninghk/"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <HashLink to="#" className=" hover:text-gray-900">
                  良景清潔有限公司
                </HashLink>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
