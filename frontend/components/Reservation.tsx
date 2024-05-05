"use client";
import { cn } from "@/lib/utils";
import { format, isPast } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import AlertMessage from "@/components/AlertMessage";

const postData = async (url: string, data: object) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(url, options);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
const Reservation = ({
  reservations,
  room,
  isUserAuthenticated,
  userData,
}: {
  reservations: any;
  room: any;
  isUserAuthenticated: boolean;
  userData: any;
}) => {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [alertMessage, setAlertMessage] = useState<{
    message: string;
    type: "error" | "success" | null;
  } | null>();
  const formatDateForStrapi = (date: Date) => {
    return format(date, "yyyy-MM-dd");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [alertMessage]);
  const saveReservation = () => {
    if (!checkInDate || !checkOutDate) {
      setAlertMessage({
        message: "Please select dates",
        type: "error",
      });
    }
    if (checkInDate?.getTime() === checkOutDate?.getTime()) {
      return setAlertMessage({
        message: "Check-in and and Check-out cannot be the same",
        type: "error",
      });
    }
    const data = {
      data: {
        firstname: "Alex",
        lastname: "Green",
        email: "alexgreen@gmail.com",
        checkIn: checkInDate ? formatDateForStrapi(checkInDate) : null,
        checkOut: checkOutDate ? formatDateForStrapi(checkOutDate) : null,
        room: room.data.id,
      },
    };
  };
  return (
    <div>
      <div className="bg-tertiary h-[320px] mb-4">
        <div className="bg-accent py-4 text-center relative mb-2">
          <h4 className="text-4xl text-white">Book your room</h4>
          <div className="absolute -bottom-[8px] left-[calc(50%_-_10px)] w-0 h-0 border-l-[10px] border-l-transparent border-t-[8px] border-t-accent border-r-[10px] border-r-transparent"></div>
        </div>
        <div className="flex flex-col gap-4 w-full py-6 px-8">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="default"
                size="md"
                className={cn(
                  "w-full flex justify-start text-left font-semibold",
                  !checkInDate && "text-secondary",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkInDate ? (
                  format(checkInDate, "PPP")
                ) : (
                  <span>Check in</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkInDate}
                onSelect={setCheckInDate}
                initialFocus
                disabled={isPast}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="default"
                size="md"
                className={cn(
                  "w-full flex justify-start text-left font-semibold",
                  !checkOutDate && "text-secondary",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOutDate ? (
                  format(checkOutDate, "PPP")
                ) : (
                  <span>Check Out</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkOutDate}
                onSelect={setCheckOutDate}
                initialFocus
                disabled={isPast}
              />
            </PopoverContent>
          </Popover>
          {isUserAuthenticated ? (
            <Button
              className="w-full"
              size="md"
              onClick={() => saveReservation()}
            >
              Book now
            </Button>
          ) : (
            <Button className="w-full" size="md">
              Book now
            </Button>
          )}
        </div>
      </div>
      {alertMessage && (
        <AlertMessage message={alertMessage.message} type={alertMessage.type} />
      )}
    </div>
  );
};

export default Reservation;
