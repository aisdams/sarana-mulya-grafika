import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import BlogDetailsImage from '/public/img/blog-details.jpg';
import { MdDateRange } from 'react-icons/md';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import NextImage from 'next/image';
import Image from 'next/image';

interface BlogDetails {
  thumbnailSrc: string;
  createdAt: string;
  title: string;
  content: string;
}

export default function Index() {
  const [blogDetails, setBlogDetails] = useState<BlogDetails | null>(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          `https://api.cms.neelo.id/api/posts/${slug}`
        );
        if (response.ok) {
          const data = await response.json();
          setBlogDetails(data.data);
        } else {
          throw new Error('Failed to fetch blog details');
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    if (slug) {
      fetchBlogDetails();
    }
  }, [slug]);

  if (!blogDetails) {
    return (
      <div>
        {' '}
        <div className="relative">
          <Image
            src={BlogDetailsImage}
            className="w-full h-[450px] mb-20 mx-auto grid text-center object-cover opacity-55"
            alt=""
          />
          <div className="absolute top-1/2 right-0 left-0 mx-auto grid w-full  text-center text-white">
            <h3 className="tracking-[6px] mb-3">Blog Details</h3>
            <h1 className="font-bold lg:text-5xl text-3xl">SMG!</h1>
          </div>
        </div>
        <div className="text-center font-bold">
          Something Error OR Doesn{`'`}t Have Details BLOG......
        </div>
      </div>
    );
  }

  const formatDate = (dateString: any) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      'en-US',
      options
    );
    return formattedDate;
  };

  return (
    <>
      <div className="relative">
        <Image
          src={BlogDetailsImage}
          alt=""
          className="w-full h-[450px] mb-20 mx-auto grid text-center object-cover opacity-55"
        />
        <div className="absolute top-1/2 right-0 left-0 mx-auto grid w-full  text-center text-white">
          <h3 className="tracking-[6px] mb-3">Blog Details</h3>
          <h1 className="font-bold lg:text-5xl text-3xl">SMG!</h1>
        </div>
      </div>

      <article className="mx-auto justify-center items-center grid place-content-center lg:w-[min(55%,1280px)] w-[min(90%,1280px)] my-24 prose prose-lg">
        <img
          src={`https://api.cms.neelo.id/${blogDetails.thumbnailSrc}`}
          alt=""
          className="w-full h-auto"
        />
        <div className="flex gap-5 mt-5">
          <div className="flex items-center gap-2">
            <FaUser /> Admin
          </div>

          <div className="flex items-center gap-2">
            <MdDateRange /> {formatDate(blogDetails.createdAt)}
          </div>
        </div>

        <h1 className="font-medium mt-5 mb-0 text-3xl">{blogDetails.title}</h1>
        <div
          className="mt-2 tfont-light text-sm"
          dangerouslySetInnerHTML={{ __html: blogDetails.content }}
        ></div>
      </article>
    </>
  );
}
