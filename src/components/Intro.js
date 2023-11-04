import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src="https://www.cdc.gov/hygiene/images/cleaning/Illustrations-10.png?_=33181" />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-blue-900 font-bold">保護您的家庭遠離哮喘、感冒和流感症狀、
花粉過敏症、咽喉腫痛或皮膚痕癢等過敏反應；
長效保護您和家人的健康。</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>良景清潔公司擁有專業、細心、負責任的精英團隊，團隊擁有豐富的清潔服務經驗，確保提供最高的標準。</p>
                            </div>
                            
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>我們為每位客戶度身訂製最優秀的清潔方案，靈活運用創新及科技化的工具，達至最佳的清潔效果。本公司選用的工具，均經過嚴格挑選，環保天然的清潔用品均符合國際安全標準，為顧客帶來真正清新、無污染的潔淨環境。</p>
                            </div>
                            <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                聯絡我們
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;