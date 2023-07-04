"use client";
import Image from "next/image";
import Slider from "react-slick";
import SliderRef from "react-slick";

import { useState, useEffect, useRef } from "react";

import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

type CampaignData = Array<{
  campaignId: number;
  title: string;
  description: string;
  campaignImage: string;
  startDate: string;
  endDate: string;
  createdDate: string;
  updatedDate: string;
  candidates: any[];
  stage: Stage[];
  length: number;
}>;

interface Stage {
  stageId: string;
  title: string;
  description: string;
  content: string;
  startTime: string;
  endTime: string;
  campaignId: string;
  formId: string;
}

export interface Candidate {
  candidateId: string;
  description?: string;
  userId: string;
  campaignId: string;
  groupId?: string;
  fullName: string;
  phone?: string;
  gender?: string;
  dob?: string;
  email?: string;
  avatarUrl?: string;
}

export default function Hero() {
  const [data, setData] = useState<CampaignData | null>(null);
  const [ungCuVien, setUngCuVien] = useState<Candidate[] | null>(null);
  const [showMenuArray, setShowMenuArray] = useState<{
    [key: number]: boolean;
  }>({});
  const [slider, setSlider] = useState<SliderRef | null>(null);
  const sliderRef = useRef<SliderRef | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const getAllCampain = async () => {
    try {
      const res: any = await axios.get<CampaignData>(
        "http://xuanthuan-001-site1.htempurl.com/api/v1/campaigns"
      );
      if (res) {
        setData(res.data.data);
      } else {
        console.log("not found");
      }
    } catch (error) {
      console.log(`Can not get campaign ${error}`);
    }
  };

  const toggleMenu = async (id: any, campaignId: number) => {
    try {
      const res: any = await axios.get<CampaignData>(
        `http://xuanthuan-001-site1.htempurl.com/api/v1/candidates/campaign/${id}`
      );
      if (res) {
        const slicedArray = res.data.data.slice(0, 3);
        setUngCuVien(slicedArray);
        setShowMenuArray((prev) => ({
          ...prev,
          [campaignId]: !prev[campaignId],
        }));
      } else {
        setUngCuVien([]);
      }
    } catch (error) {
      console.log(`Can not get campaign ${error}`);
    }
  };

  console.log(ungCuVien);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    setSlider(sliderRef.current);
  }, []);

  useEffect(() => {
    getAllCampain();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenuArray((prev) => ({
          ...prev,
          [Object.keys(showMenuArray)[0]]: false,
        }));

        setUngCuVien([]);
      }
    };
    if (Object.keys(showMenuArray).length > 0) {
      window.addEventListener("mousedown", handleOutsideClick);
    } else {
      window.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showMenuArray]);

  return (
    <section id="section-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div
          className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <svg
            className="max-w-full"
            width="564"
            height="552"
            viewBox="0 0 564 552"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="illustration-02"
                x1="-3.766"
                y1="300.204"
                x2="284.352"
                y2="577.921"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5D5DFF" stopOpacity=".01" />
                <stop offset="1" stopColor="#5D5DFF" stopOpacity=".32" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              //d ở đây
              fill="url(#illustration-02)"
            />
          </svg>
        </div>

        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="py-12 md:py-20">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h2 className="h2 mb-4">Các chiến dịch đang diễn ra</h2>
                </div>
                <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
                  {Array.isArray(data) &&
                    data.map((i) => {
                      return (
                        <div
                          className="flex flex-col h-full p-6 bg-gray-200"
                          data-aos="fade-up"
                          data-aos-delay="400"
                        >
                          <div>
                            <div className="relative inline-flex flex-col mb-4">
                              <Image
                                className="rounded-full"
                                src={TestimonialImage03}
                                width={48}
                                height={48}
                                alt="Testimonial 03"
                              />

                              <svg
                                className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                                viewBox="0 0 24 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                              </svg>
                            </div>
                          </div>
                          <h1 className="font-bold text-xl text-gray-400">
                            {i.title.toUpperCase()}
                          </h1>
                          <blockquote className="text-lg text-gray-400 grow tran">
                            — Chiến dịch lỏ quá trời
                          </blockquote>
                          <div className="flex">
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 flex-1">
                              <button className="text-gray-800 font-semibold rounded items-center mr-4 mb-4 sm:mb-0 flex">
                                <span className="text-black not-italic">
                                  Tham gia
                                </span>
                              </button>
                            </div>
                            <div className="flex flex-col sm:flex-row mt-6 pt-5 items-center justify-end">
                              <button
                                className="text-gray-800 font-semibold rounded items-center mr-4 mb-4 sm:mb-0 flex"
                                onClick={() =>
                                  toggleMenu(i.campaignId, i.campaignId)
                                }
                              >
                                <span className="text-black not-italic">
                                  Candidate
                                </span>
                                <svg
                                  className="fill-current h-4 w-4 ml-2"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ transform: "rotate(90deg)" }}
                                >
                                  <path d="M8.59 13.41L10 15l6-6-6-6-1.41 1.41L12.17 9H3v2h9.17l-3.58 3.58z" />
                                </svg>
                              </button>
                              {showMenuArray[i.campaignId] ? (
                                <div
                                  className="absolute mt-12 w-[330px] rounded-md shadow-lg bg-white"
                                  ref={menuRef}
                                >
                                  <Slider {...settings}>
                                    {Array.isArray(ungCuVien) ? (
                                      ungCuVien.map((people: any) => (
                                        <div
                                          key={people.campaignId}
                                          className="mb-4"
                                        >
                                          <div>
                                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                              <li className="pt-3 pb-0 sm:pt-4">
                                                <div className="flex items-center space-x-4">
                                                  <div className="flex-shrink-0">
                                                    <img
                                                      className="w-12 h-12 rounded-full"
                                                      src={people.avatarUrl}
                                                      alt={people.fullName}
                                                    />
                                                  </div>
                                                  <div className="flex-1 min-w-0">
                                                    <p className="text-md font-medium text-gray-900 truncate dark:text-gray-400">
                                                      {people.fullName}
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                      {people.description}
                                                    </p>
                                                  </div>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      ))
                                    ) : (
                                      <div className="text-black">
                                        {" "}
                                        em nè anh
                                      </div>
                                    )}
                                  </Slider>
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
