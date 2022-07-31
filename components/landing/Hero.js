import Button from "./Button";
import Image from "next/image";
import Avatar from '../../public/img/avatar.jpg'
import Spline from "@splinetool/react-spline";







export default function Hero() {
  return (
    <>
      <div className="bg-yellow py-20 md:py-24 h-[700px]">
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto">
          <div
            className="flex flex-col gap-8 text-center items-center md:text-left md:items-start"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-5xl text-center md:text-left md:text-8xl font-primary font-semibold text-dark">
            Blockchain{" "}
              <span className="text-brown  decoration-solid">
              Defacto
              </span>{" "}
              <br/>
              For charities{" "}
            </h1>
            <p className="text-dark md:text-xl">
              Cultchain is a Blockchain based charity which aims to bring transparency and Trust to charities and NGOs.
            </p>
           </div>
          <div>
            <Image height={700}  src={Avatar} alt="avatar"/>
          </div>
        </div>
      </div>
    </>
  );
}
