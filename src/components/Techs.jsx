import Block from "./Block"

export default function Techs() {

    const techs = ['Html',
        'CSS',
        'Javascript',
        'C',
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
        'PowerBI',
        'CAD',
        'SolidWorks',
        'Blender'
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
        <div className="bg-white shadow-md px-4 py-2 rounded-lg text-color1-100 cursor-default">
            {children}
        </div>
    )
}