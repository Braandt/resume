import Block from "./Block"

export default function Techs() {

    const techs = ['Html',
        'CSS',
        'Javascript',
        'Python',
        'MongoDB',
        'R',
        'React',
        'Threejs',
        'Nextjs',
        'Redux',
        'RestAPI',
        'Tailwind',
        'Excel',
        'PowerBI'
    ]

    return (
        <Block
            title='tech stack'
        >
            <div className="flex gap-4 flex-wrap">
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
        <div className="bg-white shadow-md px-4 py-2 rounded-full text-primary-600 cursor-default">
            {children}
        </div>
    )
}