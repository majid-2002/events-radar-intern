import {
    ButtonGreen,
    ButtonDark,
    ButtonOutline,
    ButtonOvalGreenOutline,
    ButtonOvalDarkOutline,
} from "./components/Buttons";

import { EventCardLarge, EventCardSmall } from "./components/Card";

const LevelOne = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-row gap-10 p-8">
                <div className="flex flex-col items-center gap-5">
                    <ButtonGreen title="POST" type="button" />
                    <ButtonDark title="POST" type="button" />
                    <ButtonOutline title="POST" type="button" />
                </div>
                <div className="flex flex-col items-center gap-5">
                    <ButtonOvalDarkOutline title="Yesterday" type="button" />
                    <ButtonOvalGreenOutline title="Yesterday" type="button" />
                </div>
            </div>
            <div className="flex gap-10 flex-col">
                <EventCardLarge title="Robosoccer lorem Ipsum" description="Some Description About the Organisation"alt="event-image" image="/Images/Rectangle 2.png" date="Date" notified={true} />
                <EventCardLarge title="Robosoccer lorem Ipsum" description="Some Description About the Organisation"alt="event-image" image="/Images/Rectangle 2.png" date="Date" notified={false} />
                <EventCardSmall title="Robosoccer lorem Ipsum" alt="event-image" image="/Images/Rectangle 2.png" date="Date" notified={false} />
            </div>
        </div>
    );
};

export default LevelOne;
