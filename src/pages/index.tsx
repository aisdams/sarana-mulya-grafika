import Image from 'next/image';
import { Lightbulb } from 'lucide-react';
import { Inter } from 'next/font/google';
import { FaWallet } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa6';
import Header from '@/components/home/header';
import Navbar from '@/components/layouts/navbar';
import About from '@/components/home/about';
import VisionMision from '@/components/home/visionMision';
import Footer from '@/components/layouts/footer';
import ProductService from '@/components/home/productService';
import ImageExcelence from '/public/img/pricing-shape.png';
import OurValue from '@/components/home/ourValue';
import Client from '@/components/client';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import logosmg from '/public/img/smglogo.png';
import ScrollToTopButton from '@/components/scrollButtonOnTop';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';

import 'swiper/css';
import 'swiper/css/pagination';

interface Blog {
  id: string;
  title: string;
  thumbnailSrc: string;
  createdAt: string;
  slug: string;
  content: string;
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  query,
}) => {
  const res = await fetch('https://api.cms.neelo.id/api/posts');
  const data = await res.json();
  const page = query.page ? parseInt(query.page as string) : 1;
  const perPage = 3;
  const offset = (page - 1) * perPage;

  const blogs: Blog[] = data.data.map((blog: any) => ({
    id: blog.id,
    title: blog.title,
    thumbnailSrc: `https://api.cms.neelo.id/${blog.thumbnailSrc}`,
    slug: blog.slug,
    createdAt: blog.createdAt,
    content: blog.content,
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

export default function Home({
  blogs,
  totalCount,
  currentPage,
}: {
  blogs: Blog[];
  totalCount: number;
  currentPage: number;
}) {
  const router = useRouter();
  const totalPages = Math.ceil(totalCount / 3);
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

  return (
    <>
      <main className="relative">
        <Header />
        <div className="relative lg:mb-10 mb-10">
          <div className="mx-auto w-[min(90%,1280px)]">
            <h1 className="font-bold text-left lg:text-center uppercase w-max lg:mx-0 mx-auto grid text-blueseaprimary">
              Excellence
            </h1>
            <p className="lg:text-3xl text-xl font-bold text-center uppercase w-full mx-auto grid">
              Our company will always provide satisfaction <br /> and comfort
              for our customers
            </p>
            <div className="grid lg:grid-cols-3 items-start gap-5 mt-16 mx-auto text-center">
              <div className="grid items-center gap-3">
                <div className="bg-blueseaprimary/50 text-white px-3 mx-auto rounded-full w-[50px] h-12">
                  <Lightbulb className="text-2xl my-3 mx-auto" />
                </div>
                <div className="grid">
                  <h3 className="text-xl font-bold">One stop solution</h3>
                  <p>
                    We can supply all your needs from every category in small or
                    large quantities. No more hassle of ordering from multiple
                    vendors.
                  </p>
                </div>
              </div>
              <div className="grid items-center gap-3">
                <div className="bg-blueseaprimary/50 text-white px-3 mx-auto rounded-full w-[50px] h-12">
                  <FaDollarSign className="text-2xl my-3 mx-auto" />
                </div>
                <div className="grid">
                  <h3 className="text-xl font-bold">Competitive price</h3>
                  <p>
                    We ensure that our prices are competitive with similar
                    companies.
                  </p>
                </div>
              </div>
              <div className="grid items-center gap-3">
                <div className="bg-blueseaprimary/50 text-white px-3 mx-auto rounded-full w-[50px] h-12">
                  <FaWallet className="text-2xl my-3 mx-auto" />
                </div>
                <div className="grid">
                  <h3 className="text-xl font-bold">Payment term</h3>
                  <p>We provide payment terms from 14 days</p>
                </div>
              </div>
            </div>
            <Image
              src={ImageExcelence}
              alt=""
              className="absolute top-0 lg:right-0 left-auto lg:transform-none lg:scale-0 transform scale-x-[-1]"
            />
          </div>
        </div>
        <About />
        <VisionMision />
        <ProductService />
        <div className="grid w-[min(90%,1280px)] mx-auto justify-center items-center mt-10">
          <h3 className="sm:text-left md:text-center text-center lg:text-center text-blueseaprimary">
            NEWS & ARTICLES
          </h3>
          <h1 className="text-center font-bold text-3xl">
            Get Every Single Update{' '}
            <span className="text-blueseaprimary">Blog</span>
          </h1>

          <div className="mb-20 mt-10 grid lg:grid-cols-3 gap-8 mx-auto">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="pb-10 rounded-tl-xl rounded-tr-xl overflow-hidden prose prose-lg"
              >
                <Image
                  src={blog.thumbnailSrc}
                  alt=""
                  width={400}
                  height={200}
                  className="object-cover w-full h-56 mb-3"
                />
                <div className="grid pl-5">
                  <h3 className="font-light text-sm text-right mb-2">
                    {formatDate(blog.createdAt)}
                  </h3>
                  <div
                    className="font-bold text-base-blue text-xl tracking-wider cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToBlogDetail(blog.slug);
                    }}
                  >
                    {blog.title}
                  </div>
                  <div
                    className="font-light text-sm mt-3"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  ></div>

                  <div className="flex justify-between items-center mt-5">
                    <Image src={logosmg} alt="" className="w-10 h-10" />
                    <h1 className="font-light text-sm border-b-white border border-t-transparent border-l-transparent border-r-transparent">
                      Read more
                    </h1>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <OurValue />

        <Client />
        <div className="bg-[url('https://glints.com/id/lowongan/wp-content/uploads/2020/06/rsz_20474.jpg')] w-full bg-fixed h-96 bg-center bg-cover text-center relative">
          <div className="absolute bg-black/80 w-full h-96 top-0"></div>
          <div className="absolute text-white w-full h-96 top-0">
            <h1 className="text-blue-600 text-4xl font-semibold mt-32 mb-1">
              You think we work for you.
            </h1>
            <h3 className="text-white text-lg">
              Actually we are playing, and somehow it helps you Grow your
              business.
            </h3>
          </div>
        </div>
        <ScrollToTopButton />
      </main>
    </>
  );
}
// pak maaf saya ingin mengajukan negosiasi
// projectnya kerena saya tidak mengerti bet tetapi saya akan memasangkan game request nya
