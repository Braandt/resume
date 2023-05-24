import Block from "./Block";
import LinkElement from "./LinkElement";

export default function Courses() {
    return (
        <Block
            title='training | courses | certificates'
        >
            <div className="flex flex-col gap-4">
                <LinkElement
                    title='Chef de Cozinha'
                    subtitle='Centro Europeu'
                />
                <LinkElement
                    title='Pizza Masterclass'
                    subtitle='Chicago Bakery'
                />
            </div>
        </Block>
    )
}
