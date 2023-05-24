import { FaCheckSquare } from "react-icons/fa"
import MyDate from "./MyDate"
import Block from "./Block"


export default function Experience() {
    return (
        <Block
            title='Experiência'
        >

            <ExperienceBlock
                title='Cozinheiro'
                date={{ start: '2021', end: '2022' }}
                company='Barbarella Bakery'
            >

                Experiência na Bararella Bakery - Panificadora Gourmet:
                <ul className="">
                    <li>
                        <span><FaCheckSquare className="inline mr-3 w-3 mb-1" /></span>
                        Cozinheiro responsável pela preparação de refeições quentes e frias.
                    </li>
                    <li>
                        <span><FaCheckSquare className="inline mr-3 w-3 mb-1" /></span>
                        Gerenciamento eficiente do estoque, assegurando o abastecimento adequado de ingredientes frescos e de qualidade.
                    </li>
                    <li>
                        <span><FaCheckSquare className="inline mr-3 w-3 mb-1" /></span>
                        Liderança de uma equipe de três pessoas, fornecendo orientação e mantendo um ambiente de trabalho colaborativo.
                    </li>
                    <li>
                        <span><FaCheckSquare className="inline mr-3 w-3 mb-1" /></span>
                        Participação ativa na montagem do cardápio, contribuindo com ideias inovadoras e adaptando receitas para atender às preferências dos clientes.
                    </li>
                    <li>
                        <span><FaCheckSquare className="inline mr-3 w-3 mb-1" /></span>
                        Desenvolvimento de habilidades culinárias, aprimorando técnicas de preparo e apresentação de pratos.
                    </li>
                    <li>
                        <span><FaCheckSquare className="inline mr-3 w-3 mb-1" /></span>
                        Aquisição de conhecimentos em gestão de estoque e otimização de recursos.
                    </li>
                    <li>
                        <span><FaCheckSquare className="inline mr-3 w-3 mb-1" /></span>
                        Demonstração de criatividade na criação de pratos saborosos e visualmente atrativos.
                    </li>
                    <li>
                        <span><FaCheckSquare className="inline mr-3 w-3 mb-1" /></span>
                        Fortalecimento das habilidades de liderança e coordenação de equipes.
                    </li>
                    <li>
                        <span><FaCheckSquare className="inline mr-3 w-3 mb-1" /></span>
                        Experiência enriquecedora em termos de desenvolvimento profissional e pessoal.
                    </li>
                    <li>
                        <span><FaCheckSquare className="inline mr-3 w-3 mb-1" /></span>
                        Disposição para levar a experiência e entusiasmo adquiridos para novos desafios na carreira como cozinheiro.
                    </li>
                </ul>
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