import Block from "./Block";
import LinkElement from "./LinkElement";

export default function Patents() {
    return (
        <Block
            title='patents'
        >
            <div className="flex flex-col gap-4">
                <LinkElement
                    title='TABELA PERIÓDICA UNIVERSAL INCLUSIVA E INTERATIVA'
                    subtitle='BR BR 10 2021 013683 9'
                    href='https://leobrandtresume.vercel.app/patente-tabela.pdf'
                />
                <LinkElement
                    title='BLOCOS EM DESENHO UNIVERSAL PARA APRENDIZAGEM COMO ELEMENTOS QUÍMICOS DA TABELA PERIÓDICA'
                    subtitle='BR BR 10 2020 022931 1'
                    href='https://leobrandtresume.vercel.app/patente-blocos.pdf'
                />
            </div>
        </Block>
    )
}
