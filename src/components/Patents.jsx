import Block from "./Block";
import LinkElement from "./LinkElement";

export default function Patents() {
    return (
        <Block
            title='patents'
        >
            <div className="flex flex-col gap-2">
                <LinkElement
                    title='TABELA PERIÓDICA UNIVERSAL INCLUSIVA E INTERATIVA'
                    subtitle='BR BR 10 2021 013683 9'
                    href='https://busca.inpi.gov.br/pePI/servlet/PatenteServletController?Action=detail&CodPedido=1594959&SearchParameter=BLOCOS%20EM%20DESENHO%20UNIVERSAL%20PARA%20APRENDIZAGEM%20%20%20%20%20%20&Resumo=&Titulo='
                />
                <LinkElement
                    title='BLOCOS EM DESENHO UNIVERSAL PARA APRENDIZAGEM COMO ELEMENTOS QUÍMICOS DA TABELA PERIÓDICA'
                    subtitle='BR BR 10 2020 022931 1'
                    href='https://busca.inpi.gov.br/pePI/servlet/PatenteServletController?Action=detail&CodPedido=1618682&SearchParameter=TABELA%20PERI%D3DICA%20UNIVERSAL%20INCLUSIVA%20E%20%20%20%20%20%20%20&Resumo=&Titulo='
                />
            </div>
        </Block>
    )
}
