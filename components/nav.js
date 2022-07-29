import connect from "./utils/auth";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useEffect, useState } from "react";
import Logo from '../assets/cultchain.svg'



export default function Nav() {
  const [account, setAccount] = useState();

  useEffect(() => {
    showAccount();
  }, []);

  async function showAccount() {
    const { account } = await connect();
    setAccount(account.substring(36, 42));
  }

  return (
    <div className="bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image
            src={Logo}
            alt="cultchain logo"
            height={40}
            width={40}
          />
          <div className="ml-[0.8rem] text-white font-semibold text-2xl">Cultchain</div>
        </div>
      </Link>
      <div className="flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]">
        <div className="text-[#8a939b] mx-3 font-bold text-lg">
          <AiOutlineSearch />
        </div>
        <input
          className="h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]"
          placeholder="Search Collections, NFTs, and Artists"
        />
      </div>
      <div className="flex items-center justify-end">
        <Link href="/explore">
          <div className="text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer">Explore</div>
        </Link>
        <Link href="/create-nft">
          <div className="text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer">Mint</div>
        </Link>
        <Link href="/my-nfts">
          <div className="text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer">My NFTs</div>
        </Link>
        <Link href="/dashboard">
          <div className="text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer">Dashboard</div>
        </Link>
        <Link href="/create-collections">
          <div className="text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer">Collections</div>
        </Link>
        <div className="text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer">
          <CgProfile />
        </div>
        <div className="text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer">
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  );
}
