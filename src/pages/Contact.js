import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import axios from "axios";
// import emailjs from 'emailjs-com';
import Notiflix from "notiflix";

const Contact = () => {
  useDocTitle("MLD | Molad e Konsult - Send us a message");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const clearErrors = () => {
    setErrors([]);
  };

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerHTML = "Loading...";
    let fData = new FormData();
    fData.append("last_name", lastName);
    fData.append("email", email);
    fData.append("phone_number", phone);
    fData.append("message", message);

    axios({
      method: "post",
      url: process.env.REACT_APP_CONTACT_API,
      data: fData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "send message";
        clearInput();
        //handle success
        Notiflix.Report.success("Success", response.data.message, "Okay");
      })
      .catch(function (error) {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "send message";
        //handle error
        const { response } = error;
        if (response.status === 500) {
          Notiflix.Report.failure(
            "An error occurred",
            response.data.message,
            "Okay"
          );
        }
        if (response.data.errors !== null) {
          setErrors(response.data.errors);
        }
      });
  };
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 bg-gray-200">
        <div
          className="container mx-auto my-8 px-4 lg:px-20"
          data-aos="zoom-in"
        >
          <form onSubmit={sendEmail}>
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                  留下你的聯絡方式
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    name="last_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="姓名*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.last_name}</p>
                  )}
                </div>
                <div>
                  <input
                    name="phone_number"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="電話號碼*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">
                      {errors.phone_number}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <input
                  name="email"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="電郵*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyUp={clearErrors}
                />
                {errors && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={clearErrors}
                ></textarea>
                {errors && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
          <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <div className="flex my-4 w-2/3 lg:w-3/4">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">地址</h2>
                  <p className="text-gray-400">
                    沙田大圍成運路2-8號1座7樓7173室
                  </p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 ">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>

                <div className="flex flex-col">
                  <h2 className="text-2xl">電郵</h2>
                  <p className="text-gray-400">info@lk-cleaning.com</p>

                  <div className="mt-5">
                    <h2 className="text-2xl">營業時間</h2>
                    <p className="text-gray-400">星期一至星期日10:00-20:00</p>
                  </div>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a
                  href="https://www.facebook.com/profile.php?id=100071546031153"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8 inline-block mx-1 text-center pt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/lkcleaninghk/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8 inline-block mx-1 text-center pt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
