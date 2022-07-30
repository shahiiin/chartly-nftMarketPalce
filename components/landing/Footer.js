import { FaArrowRight } from "react-icons/fa";
import Logo from '../../assets/cultchain.svg'
import Image from 'next/image';
export default function Footer() {
  return (
    <>
      <div
        className="border-t-4 border-tertiary mt-16 py-10 text-tertiary"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="container mx-auto">
          <div className="grid grid-col-2 md:grid-cols-5 gap-2 md:gap-6 text-center md:text-left">
            <div className="flex col-span-2">
            <Image src={Logo} className="mr-3  h-8" alt="Flowbite Logo"  height={40}
            width={40} />
          <span className="self-center ml-2 text-2xl font-semibold whitespace-nowrap dark:text-white">
            NFT Marketplace
          </span>
            </div>
            <div>
              <h2 className="font-primary font-bold text-2xl">Quick Links</h2>
              <p className="mt-6">About</p>
              <p>Blog</p>
              <p>Press</p>
            </div>
            <div>
              <h2 className="font-primary font-bold text-2xl">Resources</h2>
              <p className="mt-6">Help Center</p>
              <p>Community</p>
              <p>Partners</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
              <h2 className="font-primary font-bold text-2xl">Subscribe</h2>
              <button className="bg-transparent hover:bg-primary mt-6 text-tertiary border-tertiary hover:border-primary px-8 py-3 border-2 rounded-full font-semibold transition-all flex items-center gap-2">
                Get NFT Updates <FaArrowRight />
              </button>
            </div>
          </div>
          <hr className="my-6 border-tertiary lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com" className="hover:underline">
          NFT Marketplace™
        </a>
        . All Rights Reserved.
      </span>
        </div>
      </div>
    </>
  );
}
