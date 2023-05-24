import Block from "./Block";
import { Separator } from "./Experience";
import MyDate from "./MyDate";

export default function Projects() {
    return (
        <Block
            title='Pessoal'
        >

            <ProjectBlock
                title="Business webpage"
                company='Inclua - Recursos Educacionais'
                date={{ start: '2020', end: '2021' }}
                techs={['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']}
            >
                Webpage developed for a passionate Brazilian company specializing in Universal Design methodology. Created an engaging and visually captivating website to showcase innovative products and solutions for inclusive learning. Empowered individuals with and without disabilities to access equal educational opportunities.
            </ProjectBlock>

            < Separator />

            <ProjectBlock
                title="Interactive periodic table presentation"
                company='Inclua - Recursos Educacionais'
                date={{ start: '2021', end: '2022' }}
                techs={['JavaScript', 'React', 'WebGL', 'Three.js', 'Next.js']}
            >
                An immersive and interactive web experience to showcase a product in 3D. By utilizing cutting-edge technologies and user interactivity, I crafted a visually engaging representation of the product, allowing users to explore its features and capabilities from every angle. Through iterative refinement and collaboration with cross-functional teams, the resulting web experience effectively captured the product's unique value proposition, attracting potential customers and fostering a deeper understanding of its potential. My contribution demonstrated proficiency in leveraging advanced technologies to deliver impactful and captivating web experiences.
            </ProjectBlock>

            < Separator />

            <ProjectBlock
                title="Engine Block Gripper for Robotic Arm"
                company='Ausi do Brasil Ltda'
                date={{ start: '2020', end: '2022' }}
                techs={['SolidWords']}
            >
                I developed an innovative project involving the design, simulation, and validation of an engine block gripper that seamlessly integrates with a robotic arm. Leveraging my CAD design expertise, I meticulously crafted a detailed project plan, produced technical drawings, and collaborated closely with the robotic arm team to ensure compatibility. The gripper was rigorously tested through computer simulations and real-life trials to validate its performance in securely and precisely handling engine blocks. This project showcases my proficiency in CAD design, project management, and collaboration, resulting in a state-of-the-art gripper that significantly enhances automation and efficiency in assembly processes within the manufacturing industry.
            </ProjectBlock>

            <Separator />

            <ProjectBlock
                title="E-Table"
                date={{ start: '2020', end: '2022' }}
                techs={['SolidWords', 'Arduino', '3D Printing', 'P&D']}
            >
                I played a role in designing, developing, and prototyping an innovative product aimed at high school students learning chemistry. The product, an interactive and playable tool centered around the periodic table, was carefully crafted to engage and educate students with and without disabilities. Through technical expertise and dedication to inclusivity, I contributed to the creation of a tangible solution that bridged traditional learning with interactive elements, fostering a deeper understanding of chemistry principles. This project showcased my ability to drive innovation, collaborate effectively, and create impactful educational tools.
            </ProjectBlock>

        </Block>
    )
}

function ProjectBlock({ title, company, date, techs, children }) {
    return (
        <div>
            <div className="text-xl font-semibold text-color1">
                {title}
            </div>
            <div className="text-color1-900 text-lg">
                {company}
            </div>
            <MyDate date={date} />
            <div className="mt-4 text-justify">
                {children}
            </div>
            <div className="flex gap-3 text-color1 mt-3 text-[1rem]">
                {techs && techs.map(tech => (
                    <div key={tech} className="bg-white px-3 py-1 rounded-lg shadow-sm">{tech}</div>
                ))}
            </div>
        </div>
    )
}