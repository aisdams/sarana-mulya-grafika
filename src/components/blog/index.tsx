import React, { useState } from 'react'
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

interface Blog {
    id: string;
    title: string;
    thumbnailSrc: string;
    createdAt: string;
    slug: string;
  }

  export const getServerSideProps: GetServerSideProps = async ({
    locale,
    query,
  }) => {
    const res = await fetch('https://api.cms.neelo.id/api/posts');
    const data = await res.json();
    const page = query.page ? parseInt(query.page as string) : 1;
    const perPage = 2;
    const offset = (page - 1) * perPage;
  
    const blogs: Blog[] = data.data.map((blog: any) => ({
      id: blog.id,
      title: blog.title,
      thumbnailSrc: `https://api.cms.neelo.id/${blog.thumbnailSrc}`,
      slug: blog.slug,
      createdAt: blog.createdAt,
    }));
  
    const totalCount = blogs.length;
  
    return {
      props: {
        blogs: blogs.slice(offset, offset + perPage),
        totalCount,
        currentPage: page,
      },
    };
  };

export default function Blog({
    blogs,
    totalCount,
    currentPage,
  }: {
    blogs: Blog[];
    totalCount: number;
    currentPage: number;
  }) {
    const router = useRouter();
    const totalPages = Math.ceil(totalCount / 2);
    const [isActive, setIsActive] = useState(true);
  
    const navigateToBlogDetail = (slug: string) => {
      router.push(`/blog/blog-details/${slug}`);
    };
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
  
    const renderPagination = () => {
      const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
  
      return (
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            {pageNumbers.map((number) => (
              <li key={number}>
                <Link
                  href={`/blog/?page=${number}`}
                  className={`${
                    number === currentPage
                      ? 'bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700'
                      : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                  } leading-tight py-2 px-3 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {number}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      );
    };
  
    return (
      <>
        <div className="grid w-[min(90%,1280px)] mx-auto">
            <h3>News & Blog</h3>
            <h1>Latest News & <span className='text-blueseaprimary'>Blog</span></h1>
  
          <div className="my-20 grid lg:grid-cols-3 gap-5 mx-auto ">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="w-[25rem] shadow-2xl pb-10 rounded-tl-xl rounded-tr-xl overflow-hidden"
              >
                <Image
                  src={blog.thumbnailSrc}
                  alt=""
                  width={600}
                  height={400}
                  className="object-cover w-full h-56 mb-10"
                />
                <div className="grid pl-5">
                  <h3 className="font-light">{formatDate(blog.createdAt)}</h3>
                  <div
                    className="font-bold text-base-blue mt-5 text-xl tracking-wider cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToBlogDetail(blog.slug);
                    }}
                  >
                    {blog.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto">{renderPagination()}</div>
        </div>
      </>
    );
  }