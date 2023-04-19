import Block from "./Block"
import MyDate from "./MyDate"

export default function Education() {
    return (
        <Block
            title='Education'
        >
            <EducationBlock
                title='Specialization in Data Science'
                company='Universidade Tecnologica Federal do Paraná'
                date={{ start: '2022', end: 'present' }}
            />
            <hr className="my-4" />
            <EducationBlock
                title='Mechanical Engineer'
                company='Universidade Tecnologica Federal do Paraná'
                date={{ start: '2016', end: '2021' }}
            />
        </Block>
    )
}

function EducationBlock({ title, company, date, children }) {
    return (
        <div>
            <div className="text-xl font-bold text-primary-600">
                {title}
            </div>
            <div className="text-primary-500 text-lg">
                {company}
            </div>
            <MyDate date={date} />
            {children}
        </div>
    )
}