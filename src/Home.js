import { useNavigate } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";



export default function Home() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const onButtonClick = () => {
        navigate('/signup', { replace: true });
    }

    const data = [
        {
            name: 'Surveys',
            data: 'Our survey is an all inclusive health survey that shows users how they are doing and what they are like compared to other users who have taken the survey.'
        },
        {
            name: 'Trend Identification',
            data: 'Stay ahead of your health with our cutting-edge Trend Identification feature. Our platform analyzes your health data over time to identify important patterns and trends, helping you and your healthcare providers make proactive decisions. '
        },
        {
            name: 'Health Record Access',
            data: 'Managing your health has neve r been easier with our seamless health record access feature. Our secure, user-friendly platform ensures you have all your vital medical information at your fingertips, whenever you need it. '
        },
        {
            name: 'Communication Hub',
            data: 'Our Communication Hub is your central platform for seamless communication and collaboration with healthcare providers, specialists, and caregivers. Whether you have questions about your treatment plan, need to schedule appointments, or want to share important updates with your care team, our user-friendly hub makes it easy to stay connected and informed. '
        },
        {
            name: 'Health Updates',
            data: 'Keeping up with the latest health information is crucial for maintaining your well-being. Our health updates feature ensures you’re always in the know about the latest medical news, research advancements, and wellness tips.'
        },
        {
            name: 'Emergency Alerts',
            data: 'Our priority is your well-being, which is why we provide reliable Emergency Alerts to keep you informed and prepared during critical situations. Whether it is severe weather, public health emergencies, or other urgent events, our alert system ensures you receive timely notifications to protect yourself and your loved ones. '
        },
        {
            name: 'Appointment Scheduling',
            data: 'Take control of your healthcare with our intuitive appointment scheduling feature. Our platform makes it simple to book, manage, and track your medical appointments, ensuring you receive the care you need, when you need it. '
        },
        {
            name: 'Health Tips',
            data: 'Welcome to our Health Tips section, your go-to resource for practical advice and insights to enhance your well-being and vitality. Whether you are looking to adopt healthier habits, prevent illness, or optimize your overall wellness, our curated collection of expert tips has you covered. '
        },
        {
            name: 'Privacy and Security',
            data: 'At EduPulse, we understand the importance of protecting your sensitive health information. That is why we have implemented robust privacy and security measures to safeguard your data and ensure your peace of mind. '
        },
        {
            name: 'Medication Tracking',
            data: 'Managing multiple medications can be overwhelming, but with our Medication Tracking feature, you can take control of your health regimen effortlessly. Our intuitive platform allows you to monitor and organize your medications, ensuring you never miss a dose and stay on track with your treatment plan. '
        },
        {
            name: 'Immunization Records',
            data: 'At EduPulse, we understand the importance of staying current with your immunizations to protect yourself and your loved ones from preventable diseases. Our Immunization Records feature provides you with a convenient and secure way to manage and track your vaccination history. '
        },
        {
            name: 'Activity Logs',
            data: 'Our Activity Logs feature is your personal health companion, designed to help you stay accountable and motivated on your wellness journey. With easy-to-use tracking tools, insightful analytics, and personalized recommendations, achieving your fitness and health goals has never been more convenient. '
        },
        {
            name: 'Custom Reports',
            data: 'Unlock deeper insights into your health journey with our Custom Reports feature. Designed to empower users with personalized data analysis, Custom Reports offer a unique way to visualize and understand your health information like never before.'
        },
        
        
    ]

    return (
        
        <div data-theme='light' className={`min-h-screen`}>
            <div className={`py-4 fixed top-0 flex items-center border-b-2 bg-white w-screen border-b-gray-300`}>
                
                <div className={`mx-auto w-fit flex items-center`}>
                
                    <img className="animate-fadeIn w-10 h-10 mr-6" src="https://cdn-icons-png.flaticon.com/512/245/245336.png" alt="nice"/>
                    <h1 className={`animate-fadeIn font-bold text-success text-5xl mr-20`}>EduPulse</h1>
                    <button className={`animate-fadeIn btn btn-ghost font-normal text-gray-700 text-lg mr-7`}>Home</button>
                    <details className="dropdown mr-7 z-10 ">
                        <summary className="m-1 animate-fadeIn btn btn-ghost w-36 font-normal text-gray-700 text-lg flex items-center">
                            Services <FaAngleDown/>
                        </summary>
                        <div className="shadow dropdown-content z-[1] bg-base-100 rounded-box w-[500px] p-5">
                            <table className="table-auto w-full">
                                <tbody>
                                    <tr className={`w-32`}>
                                        <td onClick={() => {document.getElementById('my_modal_2').showModal(); setIndex(0)}} className="p-2 cursor-pointer hover:underline text-lg text-gray-400 w-1/2"><a>Surveys</a></td>   
                                        <td onClick={() => {document.getElementById('my_modal_2').showModal(); setIndex(1)}} className="p-2 cursor-pointer hover:underline text-lg text-gray-400 w-1/2"><a>Trend Identification</a></td>
                                    </tr>
                                    <tr>
                                        <td onClick={() => {document.getElementById('my_modal_2').showModal(); setIndex(2)}} className="p-2 cursor-pointer hover:underline text-lg text-gray-400"><a>Health Record Access</a></td>
                                        <td onClick={() => {document.getElementById('my_modal_2').showModal(); setIndex(3)}} className="p-2 cursor-pointer hover:underline text-lg text-gray-400"><a>Communication Hub</a></td>
                                    </tr>
                                    <tr>
                                        <td onClick={() => {document.getElementById('my_modal_2').showModal(); setIndex(4)}} className="p-2 cursor-pointer hover:underline text-lg text-gray-400"><a>Health Updates</a></td>
                                        <td onClick={() => {document.getElementById('my_modal_2').showModal(); setIndex(5)}} className="p-2 cursor-pointer hover:underline text-lg text-gray-400"><a>Emergency Alerts</a></td>
                                    </tr>
                                    <tr>
                                        <td onClick={() => {document.getElementById('my_modal_2').showModal(); setIndex(6)}} className="p-2 cursor-pointer hover:underline text-lg text-gray-400"><a>Appointment Scheduling</a></td>
                                        <td onClick={() => {document.getElementById('my_modal_2').showModal(); setIndex(7)}} className="p-2 cursor-pointer hover:underline text-lg text-gray-400"><a>Health Tips</a></td>
                                    </tr>
                                    <tr>
                                        <td onClick={() => {document.getElementById('my_modal_2').showModal(); setIndex(8)}} className="p-2 cursor-pointer hover:underline text-lg text-gray-400"><a>Privacy and Security</a></td>
                                        <td onClick={() => {document.getElementById('my_modal_2').showModal(); setIndex(9)}} className="p-2 cursor-pointer hover:underline text-lg text-gray-400"><a>Medication Tracking</a></td>
                                    </tr>
                                    <tr>
                                        <td onClick={() => {document.getElementById('my_modal_2').showModal(); setIndex(10)}} className="p-2 cursor-pointer hover:underline text-lg text-gray-400"><a>Immunization Records</a></td>
                                        <td onClick={() => {document.getElementById('my_modal_2').showModal(); setIndex(11)}} className="p-2 cursor-pointer hover:underline text-lg text-gray-400"><a>Activity Logs</a></td>
                                    </tr>
                                    <tr>
                                        <td onClick={() => {document.getElementById('my_modal_2').showModal(); setIndex(12)}} className="p-2 cursor-pointer hover:underline text-lg text-gray-400"><a>Custom Reports</a></td>
                                    </tr>
                                </tbody> 
                            </table>
                        </div>
                    </details>
                    <a  href="#price" className={`btn btn-ghost font-normal text-gray-700 text-lg mr-7`}>Pricing</a>
                    <button onClick={() => navigate('/contact', {replace: true})} className={`animate-fadeIn btn btn-ghost font-normal text-gray-700 text-lg mr-20`}>Contact</button>
                    <button onClick={() => navigate('/login', { replace: true })} className={`animate-fadeIn btn btn-success btn-outline mr-3`}>Sign In</button>
                    <button onClick={() => navigate('/signup', { replace: true })} className={`animate-fadeIn btn btn-success`}>Register</button>
                </div>

                {/* <button onClick={() => navigate('/signup', { replace: true })} className="btn btn-success mr-4 text-lg">Sign Up Today</button> */}

            </div>
            <div className={`flex justify-center items-center py-20`}>
                <div className={`w-10/12 p-14 flex justify-center`}>
                    <div className={`w-3/6`}>
                        <h1 className={`text-6xl font-semibold text-success animate-fadeIn mb-5`}>Monitoring Student Health Performance.</h1>
                        <p className={`text-xl animate-fadeIn font-thin text-gray-400 leading-relaxed tracking-wide w-11/12`}>
                            Our team works hard on creating useful features to help schools and organization track and take action on the health of their
                            students and employees. Our app allows people to see how they are feeling compared to others, ways to help, and easy access to
                            professionals and help if needed.
                        </p>
                    </div>
                    <div className="animate-fadeIn h-96 carousel carousel-vertical rounded-box w-3/6">
                    <div id="item7" className="carousel-item h-full">
                            <img src="https://www.educationsupport.org.uk/media/dd4ddch3/eds020_illusttration-artwork-v2-repro-2-08.jpg?anchor=center&mode=crop&width=1200&height=678&rnd=133455819026300000&anchor=center&mode=crop" />
                        </div>
                        <div id="item1" className="carousel-item h-full">
                            <img src="https://website-assets-fw.freshworks.com/attachments/cku3qhqxb03zw1ffz98vzq5m7-survey-02.full.png" />
                        </div> 
                        <div id="item2" className="carousel-item h-full">
                            <img src="https://healthpayerintelligence.com/images/site/article_headers/_normal/GettyImages-1397973635.png" />
                        </div>
                        <div id="item3" className="carousel-item h-full">
                            <img src="https://dominichurst.com/wp-content/uploads/2016/09/data-insights-patimes.jpg" />
                        </div>
                        <div id="item4" className="carousel-item h-full">
                            <img src="https://live-cdn-www.nypl.org/s3fs-public/health-2x1.jpg"/>
                        </div>
                        
                    </div>  
                    

                </div>
            </div>
            <div   className={`w-full flex justify-center flex-col p-10`}>
                <div className={`w-5/6 mx-auto rounded-xl px-5  `}>
                <div class="px-4 mx-auto max-w-screen-xl">
                    <div class="animate-fade mx-auto max-w-screen-md text-center">
                        <h2 id = 'price' class="mb-4 animate-fadeIn text-4xl tracking-tight font-extrabold text-gray-900">Designed for business teams like yours</h2>
                        <p class="mb-5 animate-fadeIn font-light text-gray-500 sm:text-xl dark:text-gray-500">Here at EduPulse we focus on helping people with their health and helping groups understand others.</p>
                    </div>
                    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <div class="animate-fadeIn flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for small organizations.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">$0</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Team size: <span class="font-semibold">1 developer</span></span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support: <span class="font-semibold">6 months</span></span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Free updates: <span class="font-semibold">6 months</span></span>
                                </li>
                            </ul>
                            <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                        </div>
                        <div class="animate-fadeIn flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Company</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">$20</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Team size: <span class="font-semibold">10 developers</span></span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support: <span class="font-semibold">24 months</span></span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Free updates: <span class="font-semibold">24 months</span></span>
                                </li>
                            </ul>
                            <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                        </div>
                        <div class="animate-fadeIn flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-2xl font-semibold">Enterprise</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">$50</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Team size: <span class="font-semibold">100+ developers</span></span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support: <span class="font-semibold">36 months</span></span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Free updates: <span class="font-semibold">36 months</span></span>
                                </li>
                            </ul>
                            <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`p-10`}>

            </div>  
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{data[index].name}</h3>
                    <p className="py-4">{data[index].data}</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                 </form>
            </dialog>
            <div/>
        </div>
    );
}