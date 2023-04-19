import Courses from "./Courses";
import Education from "./Education";
import Experience from "./Experience";
import Languages from "./Languages";
import Patents from "./Patents";
import Summary from "./Summary";
import Techs from "./Techs";

export default function Body() {
    return (
        <div
            className="flex flex-col px-6 py-12 grid-cols-10 gap-12
        md:px-24 md:grid"
        >

            {/* Left */}
            <div className="flex flex-col gap-8 col-span-6">

                <Summary />

                <Experience />

            </div>

            {/* Right */}
            <div className="flex flex-col gap-8 col-span-4">

                <Education />

                <Techs />

                <Languages />

                <Courses />

                <Patents />

            </div>
        </div>
    )
}
