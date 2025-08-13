import { useEffect } from "react";
import './Hero_ss_Animation_styles.css'
import web_ss from '../assets/web_ss.png'
import web_ss_l from '../assets/web_ss_l.png'
import web_ss_r from '../assets/web_ss_r.png'

export default function Hero_ss_Animation() {
    useEffect(() => {
        const hiddencards = document.querySelectorAll(".gayab");

        const watcher = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                setTimeout(() => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("ungayab");
                    } else {
                        entry.target.classList.remove("ungayab");
                    }
                }, i * 100);
            });
        });

        hiddencards.forEach((el, i) => {
            setTimeout(() => {
                watcher.observe(el);
            }, 1000);
        });

        // Cleanup observer on unmount
        return () => {
            hiddencards.forEach((el) => watcher.unobserve(el));
        };
    }, []);

    // txt

    useEffect(() => {
        const hiddencards_txt = document.querySelectorAll(".gayab-txt");

        const watcher = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                setTimeout(() => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("ungayab-txt");
                    } else {
                        entry.target.classList.remove("ungayab-txt");
                    }
                }, i * 100);
            });
        });

        hiddencards_txt.forEach((el, i) => {
            setTimeout(() => {
                watcher.observe(el);
            }, 3000);
        });

        // Cleanup observer on unmount
        return () => {
            hiddencards_txt.forEach((el) => watcher.unobserve(el));
        };
    }, []);
// side ss 

    useEffect(() => {
        const hiddencards_img = document.querySelectorAll(".gayab-img");

        const watcher = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                setTimeout(() => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("ungayab-img");
                    } else {
                        entry.target.classList.remove("ungayab-img");
                    }
                }, i * 100);
            });
        });

        hiddencards_img.forEach((el, i) => {
            setTimeout(() => {
                watcher.observe(el);
            }, 2000);
        });

        // Cleanup observer on unmount
        return () => {
            hiddencards_img.forEach((el) => watcher.unobserve(el));
        };
    }, []);

    return (
        <div>
            <div class="flex flex-col items-center justify-center w-[100%]">
                <div class="w-[70vw] gayab-txt text-center text-white">
                    <h1 className="text-[50px] font-light">Simplify Your Workflow</h1> 
                    <h1 className="text-[50px] font-light">Amplify Your Results.</h1>
                </div>
                <div className="flex mt-[6vh]">
                    <div class="w-[47vw] gayab-img relative left-[60vh] top-[50px] ">
                        <img  src={web_ss_l} alt="" />
                    </div>
                    <div class="w-[53vw] gayab z-1 rounded-2xl">
                        <img  src={web_ss} alt="" />
                    </div>
                    <div class="w-[47vw] gayab-img relative right-[60vh] top-[50px]  rounded-3xl">
                        <img  src={web_ss_r} alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
}

