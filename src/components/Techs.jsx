import Block from "./Block"

export default function Techs() {

    const techs = ['Html',
        'CSS',
        'Javascript',
        'Python',
        'MongoDB',
        'R',
        'React',
        'Next',
        'Redux',
        'RestAPI',
        'Tailwind',]

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
        <div className="bg-white shadow-sm shadow-black/5  px-4 py-2 rounded-full text-primary-600">
            {children}
        </div>
    )
}