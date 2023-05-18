import Courses from "./Courses";
import Education from "./Education";
import Experience from "./Experience";
import Languages from "./Languages";
import Patents from "./Patents";
import Projects from "./Projects";
import Summary from "./Summary";
import Techs from "./Techs";

export default function Body() {
    return (
        <div
            className="flex flex-col px-6 py-12 grid-cols-10 gap-14
        md:px-32 md:grid"
        >

            {/* Left */}
            <div className="flex flex-col gap-14 col-span-6">

                <Summary />

                <Experience />

                <Projects />

            </div>

            {/* Right */}
            <div className="flex flex-col gap-12 col-span-4">

                <Education />

                <Techs />

                <Languages />

                <Courses />

                <Patents />

            </div>
        </div>
    )
}
