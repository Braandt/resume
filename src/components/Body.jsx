import Block from "./Block";
import Courses from "./Courses";
import Education from "./Education";
import Experience from "./Experience";
import Languages from "./Languages";
import Patents from "./Patents";
import Summary from "./Summary";
import Techs from "./Techs";

export default function Body() {
    return (
        <div className="px-24 py-12 grid grid-cols-10 gap-12">

            {/* Left */}
            <div className="flex flex-col gap-8 col-span-6">

                <Summary />

                <Experience />

                <Techs />
            </div>

            {/* Right */}
            <div className="flex flex-col gap-8 col-span-4">

                <Education />

                <Languages />

                <Courses />

                <Patents />

            </div>
        </div>
    )
}
