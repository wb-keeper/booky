"use client";

import Link from "next/link";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { intersection } from "ts-interface-checker";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RoomList = ({ rooms }: { rooms: any }) => {
  return (
    <section className="py-16 min-h-[90vh]">
      <div className="flex flex-col items-center">
        <div className="relative w-[82px] h-[20px]">
          <Image
            src={"/heading-icon.svg"}
            fill
            alt="heading"
            className="object-cover"
          />
        </div>
        <h2 className="h2 mb-8">Our rooms</h2>
      </div>
      <Tabs
        defaultValue="all"
        className="w-[240px] lg:w-[540px] h-[200px] lg:h-auto mb-8 mx-auto"
      >
        <TabsList className="w-full h-full lg:h-[46px] flex flex-col lg:flex-row">
          <TabsTrigger className="w-full h-full" value="all">
            All
          </TabsTrigger>
          <TabsTrigger className="w-full h-full" value="single">
            Single
          </TabsTrigger>
          <TabsTrigger className="w-full h-full" value="double">
            Double
          </TabsTrigger>
          <TabsTrigger className="w-full h-full" value="extended">
            Extended
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {rooms.data.map((room: any) => {
          console.log(room);
          const imgUrl = `http://127.0.0.1:1337${room.attributes.image.data?.attributes.url}`;
          return (
            <div key={room.id}>
              <Link href={`/room/${room.id}`}>
                <div className="relative w-full h-[300px] overflow-hidden mb-6">
                  <Image
                    src={imgUrl}
                    fill
                    priority
                    alt="img"
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="h-[134px]">
                <div className="flex items-center justify-between mb-6">
                  <div>Capacity - {room.attributes.capacity} person</div>
                  <div className="flex gap-1 text-accent">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </div>
                </div>
                <Link href={`/room/${room.id}`}>
                  <h3 className="h3">{room.attributes.title}</h3>
                </Link>
                <p className="h3 font-secondary font-medium text-accent mb-4">
                  ${room.attributes.price}
                  <span className="text-base text-secondary">/ night</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RoomList;
