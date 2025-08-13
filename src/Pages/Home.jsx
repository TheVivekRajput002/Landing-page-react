import React from 'react'
// import './Home-styles.css'
import phone from '../assets/phone.png';
import Hero_ss_Animation from '../Components/Hero_ss_Animation';
import Cards_slide_l2r from '../Components/Cards_slide_l2r';
import Underline from '../assets/underline.svg'
import NoteBloc_logo_white from '../assets/NoteBloc_logo_white.png'
import FAQ_Questions from '../Components/FAQ_Questions';


const Home = () => {
    return (
        <>



            {/* Hero SEction  */}
            <div className="bg-gradient-to-b from-[#448ded] to-[#103c77] h-[90vh] w-[90vw] m-auto mb-[10vh] rounded-[50px] p-5 overflow-hidden">
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
                    <Hero_ss_Animation />
                </div>

            </div>

            {/* Mobile section  */}

            <div class="h-[65vh] w-[75vw] m-auto bg-gradient-to-b from-[#88C7F9] to-[#268CDF] rounded-[20px] border-1 border-solid border-[#619FEF52] relative overflow-hidden">
                <div class="mobile">
                    <div class="mobile-txt max-w-[25%] absolute top-[7%] left-[8%]">
                        <p className='bg-[#619fef75] text-[#3482E9] align-center rounded-[20px] py-[6px] px-[10px] text-[10px] inline'>Use Cases</p>
                        <p className='mt-[10px] text-[12px]'>Grow your social media presence with Postiz.
                            Schedule, analyze, and engage with your audience.</p>
                    </div>
                    <img className='absolute h-[70vh] top-[28%] left-[6%] z-10 rotate-5 ' src={phone} alt="" />
                </div>


                <div class="details-box w-[62%] h-[100%] absolute right-[4vw] bottom-0">
                    <h2 className='text-[50px] font-[250] absolute left-[10%] top-[8%]'>Unleashing the power of</h2>
                    <h2 className='text-[50px] font-[250] absolute left-[10%] top-[19%] text-[#0000009E]'>chat-based AI tools</h2>
                    <div class="dcontainer absolute bottom-0 left-0 h-[70%] w-[100%] flex justify-center items-center gap-[2%]">
                        <div class="dbox h-[80%] w-[30%] bg-white border-[1px] border-solid border-[#C3C1C1] rounded-[10px] transition-transform duration-300 hover:scale-[1.05]"></div>
                        <div class="dbox h-[80%] w-[30%] bg-white border-[1px] border-solid border-[#C3C1C1] rounded-[10px] transition-transform duration-300 hover:scale-[1.05]"></div>
                        <div class="dbox h-[80%] w-[30%] bg-white border-[1px] border-solid border-[#C3C1C1] rounded-[10px] transition-transform duration-300 hover:scale-[1.05]"></div>
                    </div>
                </div>

            </div>

            {/* Specialitites  */}

            <div class="more-details mb-[20vh]">
                <h3 className='text-[40px] font-light text-white text-center mt-[7vh] mb-[6vh]'>Now No More Stress of pending tasks</h3>
                < Cards_slide_l2r />
            </div>

            {/* FAQ  */}

            <div class="faq flex max-w-[80vw] my-[30vh] mx-auto gap-[10px]">
                <div class="faq-txt max-md:text-[90%] w-[40%] items-center flex flex-col justify-center text-white">
                    <h1 className='text-[50px]'>Frequently</h1>
                    <h1 className='text-[50px]'>asked</h1>
                    <div class="linestyle flex flex-col items-center">
                        <h1 className='text-[50px]'>questions</h1>
                        <img className='max-md:w-[170px] w-[230px]' src={Underline} alt="Underline" />
                    </div>


                </div>
                <div class="txt w-[50%] text-[#C0BEBE] text-[20px]">
                <FAQ_Questions />

                </div>
            </div>



        </>
    )
}

export default Home