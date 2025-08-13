import React from 'react'

const Footer = () => {
    return (
        <>
            <div class="footer bg-black text-[#616161] h-[30vh] w-[100%]">
                <footer className='flex bg-black m-auto pt-[50px] flex-col justify-center items-center gap-[40px] pb-[40px]'>

                    <div class="footer-txt flex justify-between w-[70vw]">
                        <a className='no-underline text-[#616161] text-[15px] transform ease-in-out duration-100 hover:text-[#8b8b8b] hover:scale-[1.1]' href="">Facebook</a>
                        <a href="">Twitter</a>
                        <a href="">LinkedIn</a>
                        <a href="">Instagram</a>
                    </div>
                    <div class="footer-txt2 flex justify-between w-[50vw]">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Contact Us</p>
                    </div>


                    <p><i>@ All right reserved 2025</i></p>
                </footer>
            </div>

        </>
    )
}

export default Footer