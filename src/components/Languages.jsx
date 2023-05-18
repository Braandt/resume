import Block from "./Block"

export default function Languages() {

    const languages = [
        { language: 'Portuguese', level: 'Native', score: 5 },
        { language: 'English', level: 'Bilingual', score: 5 },
        { language: 'Spanish', level: 'Advanced', score: 4 },
        { language: 'German', level: 'Basic', score: 2 },
        { language: 'French', level: 'Beginner', score: 1 },
    ]

    return (
        <Block
            title='languages'
        >
            <div className="flex flex-col gap-4">
                {languages.map(language => (
                    <Language
                        key={language.language}
                        language={language.language}
                        level={language.level}
                        score={language.score}
                    />
                ))}
            </div>
        </Block>
    )
}

function Language({ language, level, score }) {

    const totalScore = [1, 2, 3, 4, 5]

    const scoreElements = totalScore.map((item) => (
        <div
            key={item}
            className={`h-full aspect-square rounded-full
            ${score >= item ? 'bg-emerald-500' : 'bg-neutral-300'}`}
        />
    ))

    return (
        <div className="flex items-center justify-between">
            <div>
                <div className="font-bold text-primary-500">
                    {language}
                </div>
                <div className="text-sm text-neutral-700 uppercase">
                    {level}
                </div>
            </div>
            <div className="flex flex-row-reverse gap-1 h-3">
                {scoreElements}
            </div>
        </div>
    )
}