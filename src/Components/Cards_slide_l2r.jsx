import React, { useEffect, useRef } from "react";
import "./Cards_slide_l2r_styles.css";
import benefits_card_img_1 from '../assets/benefits_card_img_1.png'
import benefits_card_img_2 from '../assets/benefits_card_img_2.png'
import benefits_card_img_3 from '../assets/benefits_card_img_3.png'
import benefits_card_img_4 from '../assets/benefits_card_img_4.png'


const Cards_slide_l2r = () => {
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        setTimeout(() => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        }, index * 300); // Delay between each
      });
    });

    observer.observe(card1.current);
    setTimeout(() => observer.observe(card2.current), 100);
    setTimeout(() => observer.observe(card3.current), 200);
    setTimeout(() => observer.observe(card4.current), 300);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex items-center gap-6 p-4 max-w-[85%] m-auto">
      {/* <div ref={card1} className="hhidden p-6 bg-white shadow-md rounded-[14px] w-full max-w-md flex flex-col items-center">
        <img className="w-[500px] mt-[-40px] mb-[-10px] mx-[-10px]" src={ill_1} alt="" />
        <div>
          <h2 className="text-xl font-semibold mb-[10px]">Stay Organized, Always.</h2>
          <p>
            NoteBloc lets you capture ideas, plan your day, and prioritize tasks without chaos.
            Everything stays in one place—clear, accessible, and under control.
          </p>

        </div>

      </div>
      <div ref={card2} className="hhidden p-6 bg-white shadow-md rounded-[14px] w-full max-w-md flex flex-col items-center">
        <img className="w-[500px] mt-[-40px] mb-[-10px] mx-[-10px]" src={ill_2} alt="" />
        <div>
          <h2 className="text-xl font-semibold mb-[10px]">Master Your Time.</h2>
          <p>
            With smart reminders and a clean calendar view, NoteBloc helps you manage time like a pro.
            Never miss a task, meeting, or deadline again.
          </p>

        </div>

      </div> */}


      <div ref={card1} className="bg-white rounded-[22px] hhidden max-w-md w-full shadow-lg transition-transform duration-300 hover:scale-[1.05]">
        <div className="relative z-[-1] mx-0.25 mt-0.25 mb-3 h-[100%]">
          <img className="rounded-[22px] h-[280px]" src={benefits_card_img_1} alt="" />
        </div>
        <div className="absolute top-[200px] bg-gradient-to-b from-[#4287D4] to-[#07376E] rounded-[21px] px-6 py-8 text-white">
          <h2 className="text-2xl font-[350] mb-4">Boost Focus, Cut the Clutter.</h2>
          <p className="font-[300] text-md">
            Eliminate distractions and lock in your attention with NoteBloc’s focus-first tools.
            Your mind stays sharp, and your goals stay in sight.
          </p>
        </div>
      </div>

      <div ref={card2} className="bg-white rounded-[22px] hhidden max-w-md w-full shadow-md">
        <div className="relative z-[-1] mx-0.25 mt-0.25 mb-3 h-[100%]">
          <img className="rounded-[22px] h-[280px]" src={benefits_card_img_2} alt="" />
        </div>
        <div className="absolute top-[200px] bg-gradient-to-b from-[#4287D4] to-[#07376E] rounded-[21px] px-6 py-8 text-white">
          <h2 className="text-2xl font-[350] mb-4">Boost Focus, Cut the Clutter.</h2>
          <p className="font-[300] text-md">
            Eliminate distractions and lock in your attention with NoteBloc’s focus-first tools.
            Your mind stays sharp, and your goals stay in sight.
          </p>
        </div>
      </div>

      <div ref={card3} className="bg-white rounded-[22px] hhidden max-w-md w-full shadow-md">
        <div className="relative z-[-1] mx-0.25 mt-0.25 mb-3 h-[100%]">
          <img className="rounded-[22px] h-[280px]" src={benefits_card_img_3} alt="" />
        </div>
        <div className="absolute top-[200px] bg-gradient-to-b from-[#4287D4] to-[#07376E] rounded-[21px] px-6 py-8 text-white">
          <h2 className="text-2xl font-[350] mb-4">Boost Focus, Cut the Clutter.</h2>
          <p className="font-[300] text-md">
            Eliminate distractions and lock in your attention with NoteBloc’s focus-first tools.
            Your mind stays sharp, and your goals stay in sight.
          </p>
        </div>
      </div>

      <div ref={card4} className="bg-white rounded-[22px] hhidden max-w-md w-full shadow-md">
        <div className="relative z-[-1] mx-0.25 mt-0.25 mb-3 h-[100%]">
          <img className="rounded-[22px] h-[280px]" src={benefits_card_img_4} alt="" />
        </div>
        <div className="absolute top-[200px] bg-gradient-to-b from-[#4287D4] to-[#07376E] rounded-[21px] px-6 py-8 text-white">
          <h2 className="text-2xl font-[350] mb-4">Track Growth, Build Momentum.</h2>
          <p className="font-[300] text-md">
            Visualize your progress, complete daily goals, and build lasting habits.
            NoteBloc turns consistency into achievement.
          </p>
        </div>
      </div>

    </div>

  );
};

export default Cards_slide_l2r;

