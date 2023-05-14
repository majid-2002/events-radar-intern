import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

interface AlertProps {
  title: string;
  buttonText: string;
  description: string;
  actionWord: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Alert: React.FC<AlertProps> = ({
    title,
    onClick,
    buttonText,
    description,
    actionWord,
}) => {
    return (
        <div className="flex flex-col w-1/4 bg-neutral-950 shadow-lg rounded-lg overflow-hidden outline-1 outline-neutral-800 outline p-4">
            <div className="mb-4">
                <h2 className="text-xl text-gray-200 font-bold">{title}</h2>
            </div>
            <div className="mb-4 flex items-center text-gray-400 font-light">
                <p className="text-xs mr-1">{description}</p>
                <span className="font-bold text-xs">{actionWord}</span>
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    className="borderrounded py-2 px-3 w-full bg-black outline-1 outline-neutral-800 outline rounded placeholder:text-gray-600 text-sm"
                    placeholder="Enter keyword"
                />
            </div>
            <div className="flex flex-row ml-auto">
                <button className="flex bg-transparent text-gray-400 p-4 px-5 rounded-md font-bold text-sm">
          CANCEL
                </button>
                <button
                    className="flex bg-red-600 text-black p-4 px-5 rounded-md font-bold text-sm items-center"
                    onClick={onClick}
                >
                    <AiOutlineDelete className="text-xl font-light mr-2 " />
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Alert;
