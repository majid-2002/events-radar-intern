import { BsPlusLg } from "react-icons/bs";

interface ButtonProps {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const ButtonGreen: React.FC<ButtonProps> = ({ title, onClick, type }) => {
    return (
        <div>
            <button
                className="flex bg-green-600 text-black p-2 px-5 rounded-md font-bold text-lg"
                onClick={onClick}
                type={type}
            >
                <BsPlusLg className="text-3xl font-light mr-2" /> {title}
            </button>
        </div>
    );
};

const ButtonDark: React.FC<ButtonProps> = ({ title, onClick, type }) => {
    return (
        <div>
            <button
                className="flex bg-stone-950 text-green-600 p-2 px-5 rounded-md font-bold text-lg"
                onClick={onClick}
                type={type}
            >
                <BsPlusLg className="text-3xl font-light mr-2" /> {title}
            </button>
        </div>
    );
};

const ButtonOutline: React.FC<ButtonProps> = ({ title, onClick, type }) => {
    return (
        <div>
            <button
                className="flex bg-stone-950 text-green-600 outline-2 outline p-2 px-5 rounded-md font-bold text-lg"
                onClick={onClick}
                type={type}
            >
                <BsPlusLg className="text-3xl font-light mr-2" /> {title}
            </button>
        </div>
    );
};

const ButtonOvalDarkOutline: React.FC<ButtonProps> = ({
    title,
    onClick,
    type,
}) => {
    return (
        <div>
            <button
                className="flex bg-stone-900 text-neutral-200 outline-1 outline-neutral-700 outline p-2 px-7 rounded-full font-light text-lg"
                onClick={onClick}
                type={type}
            >
                {title}
            </button>
        </div>
    );
};

const ButtonOvalGreenOutline: React.FC<ButtonProps> = ({
    title,
    onClick,
    type,
}) => {
    return (
        <div>
            <button
                className="flex bg-green-950 text-neutral-200 outline-2 outline outline-green-600 p-2  px-7 rounded-full font-light text-lg"
                onClick={onClick}
                type={type}
            >
                {title}
            </button>
        </div>
    );
};

export {
    ButtonGreen,
    ButtonDark,
    ButtonOutline,
    ButtonOvalDarkOutline,
    ButtonOvalGreenOutline,
};
