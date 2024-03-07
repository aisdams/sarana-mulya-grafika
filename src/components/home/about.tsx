import React, { useState } from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import ImageAboutUs from '/public/img/aboutsmg.png';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function About() {
  let [categories] = useState({
    LoremIpsum: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
    ],
    LoremDollar: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
    ],
  });

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
        <div className="uppercase font-bold text-3xl mb-5 ">
          ABOUT WEBTECK IT SOLUTIONS We Are Increasing Business Success With{' '}
          <span className="text-blueseaprimary">Technology</span>
        </div>
        <h3 className="mb-3 font-light">
          Sarana Mulya Grafika or SMG is a company engaged in the creative
          industry, supporting business people in Indonesia to increase the
          quality level of your business. We offer a wide selection of products
          and services.
        </h3>
        <h3 className="font-light">
          We are committed to providing innovative solutions that can improve
          your company{`'`}s competitiveness because the success of your company
          is our top priority.
        </h3>

        <div className="lg:w-4/5 w-full mt-3 lg:p-2">
          <Tab.Group>
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
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
