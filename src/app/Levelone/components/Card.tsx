import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";

interface EventCardLargeProps {
  title: string;
  description: string;
  date: string;
  image: string;
  alt: string;
  notified?: boolean;
}

interface EventCardSmallProps {
  title: string;
  date: string;
  image: string;
  alt: string;
  notified?: boolean;
}

const EventCardLarge: React.FC<EventCardLargeProps> = ({
    title,
    description,
    date,
    image,
    alt,
    notified,
}) => {
    return (
        <div className="flex flex-row w-2/4 bg-neutral-950 shadow-lg rounded-lg overflow-hidden outline-1 outline-neutral-800 outline">
            <div className="flex-shrink-0 p-5">
                <Image src={image} width={120} height={120} alt={alt} />
            </div>
            <div className="p-4">
                <h4 className="text-2xl text-gray-300 font-light">{title}</h4>
                <p className="text-gray-300 font-extralight text-xl">{description}</p>

                <div className="flex flex-row gap-2 mt-6">
                    <AiOutlineCalendar className="text-gray-600 text-3xl cursor-pointer" />
                    <p className="text-gray-600 text-lg pt-1">{date}</p>
                </div>
            </div>
            <div className="p-4 ml-auto flex items-center">
                {notified ? (
                    <IoIosNotificationsOutline className="text-green-600 text-4xl cursor-pointer" />
                ) : (
                    <IoIosNotificationsOutline className="text-gray-600 text-4xl cursor-pointer" />
                )}
            </div>
        </div>
    );
};

const EventCardSmall: React.FC<EventCardSmallProps> = ({
    title,
    date,
    image,
    alt,
    notified,
}) => {
    return (
        <div className="flex flex-row w-2/4 bg-neutral-950 shadow-lg rounded-lg overflow-hidden outline-1 outline-neutral-800 outline">
            <div className="flex-shrink-0 p-5">
                <Image src={image} width={70} height={70} alt={alt} />
            </div>
            <div className="p-4">
                <h4 className="text-2xl text-gray-300 font-light">{title}</h4>

                <div className="flex flex-row gap-2 mt-6">
                    <AiOutlineCalendar className="text-gray-600 text-3xl cursor-pointer" />
                    <p className="text-gray-600 text-lg pt-1">{date}</p>
                </div>
            </div>
            <div className="p-4 ml-auto flex items-center">
                {notified ? (
                    <IoIosNotificationsOutline className="text-green-600 text-4xl cursor-pointer" />
                ) : (
                    <IoIosNotificationsOutline className="text-gray-600 text-4xl cursor-pointer" />
                )}
            </div>
        </div>
    );
};

export { EventCardLarge, EventCardSmall };
