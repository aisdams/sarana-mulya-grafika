import React, { useState } from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import ImageAboutUs from '/public/img/aboutsmg.png';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function About() {
  // let [categories] = useState({
  //   'System Management': [
  //     {
  //       id: 1,
  //       title: 'Does drinking coffee make you smarter?',
  //       date: '5h ago',
  //       commentCount: 5,
  //       shareCount: 2,
  //     },
  //   ],
  //   'Social Media Management': [
  //     {
  //       id: 1,
  //       title: 'Is tech making coffee better or worse?',
  //       date: 'Jan 7',
  //       commentCount: 29,
  //       shareCount: 16,
  //     },
  //   ],
  //   'Design Management': [
  //     {
  //       id: 1,
  //       title: 'Is tech making coffee better or worse?',
  //       date: 'Jan 7',
  //       commentCount: 29,
  //       shareCount: 16,
  //     },
  //   ],
  //   'Printing managemen': [
  //     {
  //       id: 1,
  //       title: 'Is tech making coffee better or worse?',
  //       date: 'Jan 7',
  //       commentCount: 29,
  //       shareCount: 16,
  //     },
  //   ],
  // });

  return (
    <div
      className="w-[min(90%,1280px)] grid lg:grid-cols-2 mt-40 mb-10 mx-auto"
      id="aboutus"
    >
      <div className="relative lg:grid hidden">
        <div className="border-[#1a3d86] w-40 h-[30rem]"></div>
        <Image
          src={ImageAboutUs}
          alt=""
          className="absolute bottom-[20%] w-[30rem] left-[15%]"
        />
      </div>

      <div className="mx-auto w-[min]">
        <h1 className="text-blueseaprimary">About Us</h1>
        <div className="uppercase font-bold lg:text-3xl text-xl mb-5 ">
          ABOUT WEBTECK IT SOLUTIONS We Are Increasing Business Success With{' '}
          <span className="text-blueseaprimary">Technology</span>
        </div>
        <h3 className="mb-3 font-light text-sm sm:text-left text-justify">
          Sarana Mulya Grafika or SMG is a company engaged in the creative
          industry, supporting business people in Indonesia to increase the
          quality level of your business. We offer a wide selection of products
          and services
        </h3>
        <ul className="lg:list-[circle] gap-5 sm:text-left text-justify">
          <li className=" text-sm mb-2">
            <span className="font-bold">First</span>, System Management, in the
            ever-evolving digital era, efficient system management is essential.
            We provide leading solutions to help your business manage and
            optimize every process with efficiency and accuracy.
          </li>
          <li className=" text-sm mb-2">
            <span className="font-bold">Secondly</span>, Social Media Management
            in managing social media, we take the role as a partner, with a
            mature strategy, creative content, we help build a strong image of
            your business
          </li>
          <li className=" text-sm mb-2">
            <span className="font-bold">Thirdly</span>, our Design Management is
            not just about creating attractive visuals, but we can also convey
            the message and content of an image to the heart of the audience.
          </li>
          <li className=" text-sm mb-2">
            <span className="font-bold">Fourth</span>, Printing management our
            commitment to quality is reflected in our printing services. Each
            print is a work of art produced with the finest detail and utmost
            attention to quality
          </li>
          <li className=" text-sm">
            <span className="font-bold">Fifth</span>, Event management is one of
            our distinguishing skills, from concept to execution, we work on
            every detail to create an extraordinary experience, your event is
            not just an event but a story that we help create together.
          </li>
        </ul>
        <div className="w-full mt-3 lg:p-2">
          {/* <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                      'ring-white/60 ring-offset-2 ring-offset-blue-400 ',
                      selected
                        ? 'bg-blueseaprimary text-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-black/15 backdrop-blur-lg p-3',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400'
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} className="relative rounded-md p-3">
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>

                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>{post.date}</li>
                          <li>&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li>&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group> */}
        </div>
      </div>
    </div>
  );
}
