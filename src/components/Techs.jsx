import Block from "./Block"

export default function Techs() {

    const techs = [
        'Preparo de alimentos',
        'Cozinha Italiana',
        'Cozinha Francesa',
        'Cozinha Latina',
        'Panificação artesanal',
        'Habilidade de corte',
        'Planejamento de cardápio',
        'Saúde e Higiêne',
        'Entrega rápida',
        'Apresentação dos pratos',
        'Operação e manutenção de equipamento',
        'Limpeza e organização',
        'Criatividade',
        'Liderança',
        'Flexibilidade',
        'Fácil comunicação',
        'Planejamento de cozinha',
    ]

    return (
        <Block
            title='Competências'
        >
            <div className="flex flex-wrap gap-3">
                {techs.map(tech => (
                    <Tech
                        key={tech}
                    >
                        {tech}
                    </Tech>
                ))}
            </div>
        </Block>
    )
}

function Tech({ children }) {
    return (
        <div className="bg-white shadow-md px-4 py-1 rounded-lg text-color1-100 cursor-default w-fit">
            {children}
        </div>
    )
}