import React from 'react'
import './Home-styles.css'
import TiltedMobile from '../assets/tiltedmobile.png';
import phone from '../assets/phone.png';
import SubscriptionCard from '../Components/SubscriptionCard';
import Animation from '../Components/Animation';
import Underline from '../assets/underline.svg'
import Video from '../assets/video.webm'
import Video2 from '../assets/video2.mp4'
import NoteBloc_logo from '../assets/NoteBloc_logo.png'
import NoteBloc_logo_white from '../assets/NoteBloc_logo_white.png'


const Home = () => {
    return ( 
        <>

            {/* Hero SEction  */}
            <div className="bg-gradient-to-b from-[#3482E9] to-[#1D4983] h-[90vh] w-[90vw] m-auto mt-[2.5vh] mb-[20vh] rounded-[50px] p-5 overflow-hidden">
                <div className="nav flex items-center max-w-[80vw] m-auto justify-between mt-[1.5vh] font-[350]">
                    <div class="img" >
                        <img className='h-[35px]' src={NoteBloc_logo_white} alt="" />
                    </div>
                    <div >
                        <nav className="flex justify-between items-center gap-[3vw]">
                            <a className='no-underline transition-transform duration-100 ease-in-out hover:scale-[1.12] text-white text-[20px] ' href="">About</a>
                            <a className='no-underline transition-transform duration-100 ease-in-out hover:scale-[1.12] text-white text-[20px] ' href="">Solutions</a>
                            <a className='no-underline transition-transform duration-100 ease-in-out hover:scale-[1.12] text-white text-[20px] ' href="">Resources</a>
                            <a className='no-underline transition-transform duration-100 ease-in-out hover:scale-[1.12] text-white text-[20px] ' href="">Pricing</a>
                        </nav>
                    </div>
                    <a id="#demo-btn" className='transition-transform duration-100 ease-in-out hover:scale-[1.1] no-underline text-white text-[12px] border-1 border-solid border-white py-[8px] px-[12px] rounded-3xl' href="#">Demo</a>
                </div>

                <div className='flex items-center justify-center mt-[7vh]'>
                    <Animation />
                </div>

            </div>

            {/* Mobile section  */}

            <div class="h-[80vh] w-[80vw] m-auto bg-[#3578d02e] rounded-[20px] border-1 border-solid border-[#619FEF52] relative overflow-hidden">
                <div class="mobile">
                    <div class="mobile-txt max-w-[25%] absolute top-[9%] left-[8%]">
                        <p className='bg-[#619FEF35] text-[#3482E9] align-center rounded-[20px] py-[6px] px-[10px] text-[10px] inline'>Use Cases</p>
                        <p className='mt-[10px] text-[12px]'>Grow your social media presence with Postiz.
                            Schedule, analyze, and engage with your audience.</p>
                    </div>
                    <img className='absolute h-[75vh] top-[28%] left-[5%] z-10 rotate-7 ' src={phone} alt="" />
                </div>


                <div class="details-box w-[62%] h-[100%] absolute right-[3vw] bottom-0">
                    <h2 className='text-[45px] font-[350] absolute left-[10%] top-[11%]'>Unleashing the power of</h2>
                    <h2 className='text-[45px] font-[350] absolute left-[10%] top-[18%] text-[#0000009E]'>chat-based AI tools</h2>
                    <div class="dcontainer absolute bottom-0 left-0 h-[80%] w-[100%] flex justify-center items-center gap-[2%]">
                        <div class="dbox h-[60%] w-[30%] bg-white border-[1px] border-solid border-[#C3C1C1] rounded-[10px] transform hover:scale-[1.05]"></div>
                        <div class="dbox h-[60%] w-[30%] bg-white border-[1px] border-solid border-[#C3C1C1] rounded-[10px] transform hover:scale-[1.05]"></div>
                        <div class="dbox h-[60%] w-[30%] bg-white border-[1px] border-solid border-[#C3C1C1] rounded-[10px] transform hover:scale-[1.05]"></div>
                    </div>
                </div>

            </div>

            {/* Specialitites  */}

            <div class="more-details mb-[20vh]">
                <h3 className='text-[30px] font-normal align-center mt-[20vh] mb-[6vh]'>Meet Customers where they are</h3>
                <div class="container max-md:w-[100px] max-md:grid flex justify-center items-center gap-[3vw] max-w-[80vw] m-auto">
                    <div class="box max-md:h-[35vh] max-md:w-[40vw] max-md:border-[1px] max-md:border-solid max-md:border-[#C3C1C1] max-md:rounded-[10px] max-md:bg-[#fff]   h-[40vh] w-[70vw] border-[1px] border-solid border-[#C3C1C1] rounded-[10px] p-[20px] flex flex-col justify-end transform duration-100 ease-in-out bg-[#fff] hover:scale-[1.05]">
                        <h5>Personalisation</h5>
                        <p className='mt-[10px] text-[10px]'>Download this Premium Vector about Mobile phone screen mockup template. smartphone mockup isolated
                        </p>
                    </div>
                    <div class="box">
                        <h5>Speed</h5>
                        <p>Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever.</p>
                    </div>
                    <div class="box">
                        <h5>loyality</h5>
                        <p>A utility-first CSS  Every small effort you mak framework for rapidly building custom user
                            interfaces. For full </p>
                    </div>
                    <div class="box">
                        <h5>Royality</h5>
                        <p>Success doesn’t come from what you occasionally do, it comes from what you consistently do.
                            Every small effort you make.</p>
                    </div>
                </div>
            </div>

            {/* pricing plan  */}


            <div class="sec-price-plan max-md:w-[90vw] bg-[#F1F7FC] m-auto rounded-[30px] h-[90vh] w-[70vw] pt-[40px] px-[30px] pb-[10px]" >
                <h4 className='text-[20px] font-normal text-center'>Find the right plan for your</h4>
                <h4 id="h4" className='text-[#5B5A5A]'>business</h4>
                <div class="longbox-cont max-md:gap-[1vw] max-md:w-[30vw] pt-[30px] h-[90%] w-[100%] flex justify-center gap-[3%]">
                    <SubscriptionCard />
                    <SubscriptionCard />
                    <SubscriptionCard />
                </div>

            </div>

            {/* FAQ  */}

            <div class="faq flex max-w-[80vw] my-[20vh] mx-auto">
                <div class="faq-txt max-md:text-[90%] w-[50%] align-center flex flex-col justify-center">
                    <h1>Frequently</h1>
                    <h1>asked</h1>
                    <div class="linestyle flex flex-col items-center">
                        <h1>questions</h1>
                        <img className='max-md:w-[170px] w-[200px]' src={Underline} alt="Underline" />
                    </div>


                </div>
                <div class="txt w-[50%]">
                    <div class="p w-[100%] border-[1px] border-solid border-[#C0BEBE] py-[15px] px-[0px] ">
                        <p>Activate the perfect copilot</p>
                    </div>
                    <div class="p">
                        <p>Activate the perfect copilot</p>
                    </div>
                    <div class="p">
                        <p>Activate the perfect copilot</p>
                    </div>
                    <div class="p">
                        <p>Activate the perfect copilot</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home