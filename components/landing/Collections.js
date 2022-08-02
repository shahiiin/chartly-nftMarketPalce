import Button from "./Button";
import { FaEthereum } from "react-icons/fa";
import data from "../../data/item-nft.json";

export default function Collections() {
  return (
    <>
      <div
        className="container mx-auto py-4 md:py-20 px-3 md:px-0"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex justify-between items-center">
          <h1 className="font-primary  font-bold text-3xl md:text-5xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400">
            Hot Drops
          </h1>
          <Button text="View More" variant="secondary" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-14 py-8">
          {data.map((item,index) => {
      
          return(
          <div key={index} data-aos="fade-up" data-aos-duration="3000">
                <div className="border-2 md:border-4  rounded-2xl border-[#34c2ac]  p-3 flex flex-col gap-4 hover:scale-105 transition-all cursor-pointer md:col-span-1">
                  <img
                    src={`/img/${item.image}`}
                    alt=""
                    className="h-[160px] rounded-sm"
                   />
                  <div>
                    <h1 className="font-primary text-[#34c2ac] font-bold text-xl md:text-3xl">
                      {item.title}
                    </h1>
                    <p className="text-[#34c2ac]">@{item.username}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#34c2ac] font-bold">{item.price} ETH</p>
                    <div className="bg-[#542167] p-2 rounded-full">
                      <FaEthereum color="#34c2ac" size="1rem" />
                    </div>
                  </div>
                </div>
              </div>
             )
              })}
        </div>
      </div>
    </>
  );
}
