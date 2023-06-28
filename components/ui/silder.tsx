"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "../../app/css/style.css";
// import { Icon } from "@iconify/react";
import { Autoplay } from "swiper";
import Image from "next/image";
// import avatar1 from "../../public/images/testimonial-01.jpg";

interface TechType {
  name: string;
  src: string;
  skill: string;
  color: string;
}

const tech: TechType[] = [
  {
    name: "Liêm Troller",
    src: "https://vapa.vn/wp-content/uploads/2022/12/anh-mang-dep-007.jpg",
    skill: "Top 1",
    color: "hue-rotate-[1000deg]",
  },
  {
    name: "Liêm Hater",
    src: "https://vapa.vn/wp-content/uploads/2022/12/anh-mang-dep-007.jpg",
    skill: "Top 2",
    color: "hue-rotate-[1000deg]",
  },
  {
    name: "Liêm Chao",
    src: "https://vapa.vn/wp-content/uploads/2022/12/anh-mang-dep-007.jpg",
    skill: "Top 3",
    color: "hue-rotate-[1000deg]",
  },
  {
    name: "Liêm Sì",
    src: "https://vapa.vn/wp-content/uploads/2022/12/anh-mang-dep-007.jpg",
    skill: "Top 4",
    color: "hue-rotate-[1000deg]",
  },
  {
    name: "Liêm Pro",
    src: "https://vapa.vn/wp-content/uploads/2022/12/anh-mang-dep-007.jpg",
    skill: "Top 5",
    color: "hue-rotate-[1000deg]",
  },
];

export default function Slider(): JSX.Element {
  const [active, setActive] = useState<number | null>(null);

  const handleSlideChange = (cur: { realIndex: number }) => {
    setActive(cur.realIndex);
  };

  return (
    <div
      className="h-screen bg-[white] text-white flex items-center justify-center border"
      style={{ border: "1px solid black" }}
    >
      <div className="max-w-5xl ">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={handleSlideChange}
          loop={true}
          speed={800}
          centeredSlides={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          {tech.map((tech, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="h-96 flex">
                  <div
                    className={`relative w-72 cursor-pointer hover:h-96 border-b-4 rounded-md bg-gradient-to-t from-white/20 h-44 text-center px-3 py-7 ${
                      active === i ? "card-active" : ""
                    } to-red-600/40  self-end  duration-500 delay-100 ${
                      tech.color
                    } card-hover border-red-600`}
                  >
                    <div className="text-5xl mt-2 max-w-[5rem] mx-auto min-w-[5rem] min-h-[5rem] rounded-full bg-red-100 text-gray-700 grid place-items-center">
                      {/* <Icon icon={tech.logo} /> */}
                      <Image
                        // src={tech.src}
                        src="https://vapa.vn/wp-content/uploads/2022/12/anh-mang-dep-007.jpg"
                        width={540}
                        height={405}
                        alt="Features 01"
                      />
                    </div>
                    <h2 className="text-3xl mt-2 font-semibold">{tech.name}</h2>
                    <p className="mt-3">
                      Bạn là người xứng đáng cho các nỗ lực và đạt được vị trí
                      quan trọng
                    </p>
                    <div className="bg-red-400 border-2 border-gray-200 text-white min-w-[3rem] min-h-[3rem] grid place-items-center rounded-full max-w[3rem] absolute -right-2.5 scale-0 skill-lever">
                      {tech.skill}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
