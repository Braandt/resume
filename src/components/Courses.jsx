import Block from "./Block";
import LinkElement from "./LinkElement";

export default function Courses() {
    return (
        <Block
            title='training | courses | certificates'
        >
            <div className="flex flex-col gap-2">
                <LinkElement
                    title='Three.js Journey'
                    subtitle='Bruno Simon'
                    href='https://threejs-journey.com/certificate/view/15241'
                />
                <LinkElement
                    title='Responsive Web Design'
                    subtitle='freecodecamp'
                    href='https://www.freecodecamp.org/certification/fcc3eea5cef-6e3d-407e-a994-692e3852ce1b/responsive-web-design'
                />
                <LinkElement
                    title='Advanced React'
                    subtitle='Scrimba'
                    href='https://scrimba.com/learn/react'
                />
                <LinkElement
                    title='Python for Machine Learning & Data Science'
                    subtitle='Pierian Training'
                    href='https://www.udemy.com/course/python-for-machine-learning-data-science-masterclass/?kw=python+for+machine+learning&src=sac'
                />
                <LinkElement
                    title='Supervised Machine Learning: Regression and Classification'
                    subtitle='DeepLearning.AI'
                    href='https://www.coursera.org/learn/machine-learning?page=1'
                />
                <LinkElement
                    title='Graphic Design'
                    subtitle='CETESC'
                    href='https://leobrandtresume.vercel.app/CETESC.pdf'
                />
            </div>
        </Block>
    )
}
