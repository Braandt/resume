import { FaCalendarAlt } from "react-icons/fa"
import MyDate from "./MyDate"
import Block from "./Block"


export default function Experience() {
    return (
        <Block
            title='Experience'
        >

            <ExperienceBlock
                title='Freelancer front end developer'
                company='Autonomous'
                date={{ start: '2022', end: 'present' }}
            >
                I've been working as front end developer for the last year, developing landing pages for companies, and 3D experiences in web applications. I'm learning at least one new thing every day programming users interfaces and experiences.
            </ExperienceBlock>
            <hr className="my-4" />
            <ExperienceBlock
                title='Trainee Mechanical Engineer'
                company='Bosch GmbH'
                date={{ start: '2022', end: '2023' }}
            >
                As a trainee at Bosch do Brasil I was working on the development of a inovation product for a new line of products at the company. I was part of a team of mechanical and eletrical engineers, designing, simulating and testing the prototypes under the agile management system. I learned a lot about product development, project management and teamwork. It was a great experience having to learn how a multinational company such as Bosch works.
            </ExperienceBlock>
            <hr className="my-4" />
            <ExperienceBlock
                title='Freelancer Mechanical Designer'
                company='Ausi do Brasil Ltda'
                date={{ start: '2020', end: '2022' }}
            >
                As a mechanical engineer student and newly graduated I worked at Ausi as a mechanical designer, helping a team of engineers design and deliver conveyor belts for an automotive assembly line. I learned many hard and soft skills such as CAD design, prototyping, project development and leadership.
            </ExperienceBlock>
        </Block>
    )
}


function ExperienceBlock({ title, company, date, children }) {
    return (
        <div>
            <div className="text-2xl font-bold text-primary-600">
                {title}
            </div>
            <div className="text-primary-500 text-xl">
                {company}
            </div>
            <MyDate date={date} />
            <div className="mt-4 text-justify">
                {children}
            </div>
        </div>
    )
}