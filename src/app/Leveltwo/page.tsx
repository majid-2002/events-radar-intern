import PostCard from "./components/PostCard";
import Alert from "./components/Alert";
import MobileSwitcher from "./components/MobileSwitcher";

const LevelTwo = () => {
    return (
        <div className="flex flex-col p-6">
            <div className="flex flex-row items-center gap-4">
                <PostCard
                    title="Robosoccer"
                    view={400}
                    shares={50}
                    description="Time to get your gears churning because Excel 2022 and TopGear MERobosoccer_Excel2022"
                    date="12/10/2002"
                    alt="topgear"
                    rating={1}
                    image="/Image/Rectangle3.png"
                />
                <PostCard
                    title="Robosoccer"
                    view={400}
                    shares={50}
                    description="Time to get your gears churning because Excel 2022 and TopGear MERobosoccer_Excel2022"
                    date="12/10/2002"
                    alt="topgear"
                    rating={1}
                    image="/Image/Rectangle3.png"
                />
            </div>

            <div className="pt-6">
                <Alert
                    title="Delete Post"
                    buttonText="DELETE"
                    description="To delete this post type"
                    actionWord="delete"
                    type="button"   
                />
            </div>
            <div className="pt-10">
                <MobileSwitcher />
            </div>
        </div>
    );
};

export default LevelTwo;
