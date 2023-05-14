"use client";

import Image from "next/image";
import { useState } from "react";
import {
    AiOutlineCalendar,
    AiOutlineEye,
    AiOutlineShareAlt,
    AiOutlineDelete,
} from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { RxDotFilled } from "react-icons/rx";

interface PostCardProps {
  title: string;
  view: number;
  date: string;
  shares: number;
  description: string;
  image: string;
  alt: string;
  rating: number;
}

const PostCard: React.FC<PostCardProps> = ({
    title,
    view,
    date,
    shares,
    description,
    image,
    alt,
    rating,
}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const maxRating = 5;
    const ratingDots = [];
    for (let i = 0; i < maxRating; i++) {
        if (i < rating) {
            ratingDots.push(
                <RxDotFilled key={i} className="text-green-500 text-2xl -mx-1.5" />
            );
        } else {
            ratingDots.push(
                <RxDotFilled key={i} className="text-neutral-600 text-2xl -mx-1.5" />
            );
        }
    }

    const DropdownMenu = (
        <div className="absolute right-5 top-0 mt-10 w-45 bg-neutral-900 rounded-lg shadow-xl z-1 ">
            <div className="py-1">
                <div className="flex flex-row items-center gap-x-2 px-4 py-2 cursor-pointer hover:bg-neutral-800">
                    <FaRegEdit className="text-neutral-500 text-xl" />
                    <p className="text-neutral-400 text-xs pt-1 font-light">Edit</p>
                </div>
                <div className="flex flex-row items-center gap-x-2 px-4 py-2 cursor-pointer hover:bg-neutral-800">
                    <AiOutlineDelete className="text-neutral-500 text-xl" />
                    <p className="text-neutral-400 text-xs pt-1 font-light" >Delete</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col w-1/4 bg-neutral-950 shadow-lg rounded-lg overflow-hidden outline-1 outline-neutral-800 outline relative">
            <div className="flex flex-row justify-between items-center p-4">
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <div>
                    <SlOptionsVertical
                        className="text-neutral-500 cursor-pointer"
                        onClick={() => setShowDropdown(!showDropdown)}
                    />
                    {showDropdown && DropdownMenu}
                </div>
            </div>
            <div className="flex flex-row gap-x-6 p-4">
                <div className="flex items-center gap-2">
                    <AiOutlineCalendar className="text-green-400 text-xl cursor-pointer" />
                    <p className="text-neutral-400 text-xs">{date}</p>
                </div>
                <div className="flex items-center gap-2">
                    <AiOutlineEye className="text-green-500 text-xl cursor-pointer" />
                    <p className="text-neutral-400 text-xs">{view}</p>
                </div>
                <div className="flex items-center gap-2">
                    <AiOutlineShareAlt className="text-green-500 text-xl cursor-pointer" />
                    <p className="text-neutral-400 text-xs">{shares}</p>
                </div>
            </div>
            <div className="px-4 py-2">
                <Image
                    src={image}
                    width={350}
                    height={350}
                    alt={alt}
                    className="w-full"
                />
            </div>
            <div className="flex flex-row px-4">{ratingDots}</div>
            <div className="px-4 py-2  overflow-auto">
                <p className="text-neutral-400 text-xs">{description}</p>
            </div>
        </div>
    );
};

export default PostCard;
