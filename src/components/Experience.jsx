import { FaCalendarAlt } from "react-icons/fa"
import MyDate from "./MyDate"
import Block from "./Block"


export default function Experience() {
    return (
        <Block
            title='Experience'
        >

            <ExperienceBlock
                title='Freelancer full stack developer'
                date={{ start: '2022', end: 'present' }}
            >
                As a dedicated and growth-oriented full-stack developer, I have gained valuable experience over the past years in crafting compelling landing pages for companies while also delving into the exciting realm of 3D experiences within web applications. Every day, I am committed to expanding my skill set and knowledge, constantly learning and implementing new techniques to enhance user interfaces and create immersive user experiences.
            </ExperienceBlock>

            <Separator />

            <ExperienceBlock
                title='Trainee Mechanical Engineer'
                company='Bosch GmbH'
                date={{ start: '2022', end: '2023' }}
            >
                As a trainee at Bosch do Brazil, I was working on developing an innovative product for a new line of products at the company. I was part of a team of mechanical and electrical engineers, designing, simulating, and testing the prototypes under the agile management system. I learned a lot about product development, project management, and teamwork. It was a great experience having to learn how a multinational company such as Bosch works.
            </ExperienceBlock>

            <Separator />

            <ExperienceBlock
                title='Intern Mechanical Designer'
                company='Ausi do Brasil Ltda'
                date={{ start: '2020', end: '2022' }}
            >
                As a mechanical engineering student and newly graduated, I worked at Ausi as a mechanical designer, helping a team of engineers design and deliver conveyor belts for an automotive assembly line. I learned many hard and soft skills, such as CAD design, prototyping, project development, and leadership.
            </ExperienceBlock>
        </Block>
    )
}


function ExperienceBlock({ title, company, date, children }) {
    return (
        <div>
            <div className="text-xl font-semibold text-color1-600">
                {title}
            </div>
            <div className="text-color1-900 text-lg">
                {company}
            </div>
            <MyDate date={date} />
            <div className="mt-4 text-justify">
                {children}
            </div>
        </div>
    )
}

function Separator() {
    return (
        <hr className="my-5 border-color1/20" />
    )
}

export { Separator }