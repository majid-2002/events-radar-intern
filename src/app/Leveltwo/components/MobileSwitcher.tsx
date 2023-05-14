"use client";
import React, { useState } from "react";

const MobileSwitcher = () => {
    const [showDetails, setShowDetails] = useState(true);

    const toggleDetails = () => setShowDetails(!showDetails);
    const backgroundColor = showDetails
        ? { details: "", posts: "bg-green-600 text-black" }
        : { details: "bg-green-600 text-black", posts: "" };

    return (
        <div>
            <div
                className=" text-gray-400 flex rounded-full bg-neutral-950 w-fit overflow-auto cursor-pointer outline-1 outline-neutral-800 outline"
                onClick={toggleDetails}
            >
                <div
                    className={`p-3 px-5 rounded-full font-semibold  ${backgroundColor.details}`}
                >
                    <p>DETAILS</p>
                </div>
                <div
                    className={`p-3 px-5 rounded-full font-semibold ${backgroundColor.posts}`}
                >
                    <p>POSTS</p>
                </div>
            </div>
        </div>
    );
};

export default MobileSwitcher;
