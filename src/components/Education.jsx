import Block from "./Block"
import { Separator } from "./Experience"
import MyDate from "./MyDate"

export default function Education() {
    return (
        <Block
            title='Education'
        >
            <EducationBlock
                title='Chef de Cuisine'
                company='Centro Europeu'
                date={{ start: '2021', end: '2022' }}
            />

            <Separator />

            <EducationBlock
                title='Especialização em Ciência dos Dados'
                company='Universidade Tecnologica Federal do Paraná'
                date={{ start: '2022', end: 'present' }}
            />

            <Separator />

            <EducationBlock
                title='Engenharia Mecânica'
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