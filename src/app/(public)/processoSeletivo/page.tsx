import Link from 'next/link';

export default function ProcessosSeletivos() {
  return (
    <main className="container">
        <div className="row">
            <div className="col s12">
                <h1 className="h1-impact teal-text text-darken-4">PROCESSOS SELETIVOS</h1>
            </div>
            <div className="col s12">
                <h4 className="h4 teal-text text-darken-4 text-left">Processo Seletivo - Turma 2024.1</h4>
                <ol className="text-justify topics">
                    <li>
                        Edital UESC nro. 
                        <a className="a-orange-darker" target="_blank" href="/storage/seletivos/2024.1/edital_165_2023.pdf">
                        165/2023
                        </a>
                    </li>
                    <li>
                        <a className="a-orange-darker" target="_blank" href="/storage/seletivos/2024.1/homologa_PPGMC_165.pdf">
                        Inscrições homologadas
                        </a>
                    </li>
                    <li>
                        <a className="a-orange-darker" target="_blank" href="/storage/seletivos/2024.1/resultado_PPGMC_165.pdf">
                        Resultado preliminar
                        </a>
                    </li>
                    <li>
                        <a className="a-orange-darker" target="_blank" href="https://www2.uesc.br/publicacoes/portarias/arquivo/2024/02/93_2024.pdf">
                        Resultado final
                        </a>
                    </li>
                </ol>
                <h5 className="h4 teal-text text-darken-4 text-left">Datas Importantes</h5>
                <ol className="text-justify topics">
                    <li>
                        <strong>Inscrições</strong>: 02/10 a 28/11/2023
                    </li>
                    <li>
                        <strong>Homologação das inscrições</strong>: até o dia 15/12/2023
                    </li>
                    <li>
                        <strong>Prova escrita</strong>: 22/01/2023, com início às 08h00, na Universidade Estadual de Santa Cruz
                    </li>
                    <li>
                        <strong>Resultado preliminar</strong> até o dia 02/02/2024
                    </li>
                    <li>
                        <strong>Resultado final</strong> até o dia 08/02/2024
                    </li>
                </ol>
                <h5 className="h4 teal-text text-darken-4 text-left">Formulários e Anexos:</h5>
                <ol className="text-justify topics">
                    <li>
                        <p>
                            <strong>
                                <a className="a-orange-darker" href="http://ppgmc.nbcgib.uesc.br/" target="_blank">
                                Ficha de Inscrição
                                </a>
                            </strong>
                        </p>
                        <p>
                            Para preencher e imprimir a ficha de inscrição acesse o{' '}
                            <a className="a-orange-darker" href="http://ppgmc.nbcgib.uesc.br/">
                            Sistema de Seleção da PPGMC
                            </a>
                            . Após impressa a ficha de inscrição assine-lá e envie-lá em conjunto com os documentos necessários para a inscrição (item 3 do Edital). Em caso de dúvidas consulte a{' '}
                            <a className="a-orange-darker" target="_blank" href="/storage/seletivos/2022.2/GuiaInscricao.pdf">
                            Guia de Preenchimento da Ficha de Inscrição
                            </a>
                            .
                        </p>
                        <p>
                            Faça sua inscrição com antecedência, a PPGMC não se responsabiliza por eventuais problemas de perda de conexão ou sobrecarga do sistema. Em caso de dúvidas entre em contato com o PPGMC-UESC.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>
                                <a target="_blank" className="a-orange-darker" href="https://forms.gle/GjMM167zak1ZMRgLA">
                                Carta de Recomendação
                                </a>
                            </strong>
                        </p>
                        <p>
                            O candidato deverá apresentar duas cartas de recomendação emitidas por professores ou pesquisadores. As cartas deverão ser encaminhadas pelo recomendante, via formulário eletrônico disponível em{' '}
                            <a target="_blank" className="a-orange-darker" href="https://forms.gle/GjMM167zak1ZMRgLA">
                            Enlace Google Forms
                            </a>
                            .
                        </p>
                    </li>
                </ol>
                <h5 className="h4 teal-text text-darken-4 text-left">Documentos para Inscrição:</h5>
                <ol className="text-justify topics">
                    <li>
                        <p>
                            Formulário de inscrição preenchido e assinado (Preenchimento online no{' '}
                            <a className="a-orange-darker" href="http://ppgmc.nbcgib.uesc.br/" target="_blank">
                            Sistema de Seleção PPGMC
                            </a>
                            ).
                        </p>
                    </li>
                    <li>
                        <p>
                            Fotocópia (digitalização) de documento oficial com foto (carteira de identidade, carteira nacional de habilitação, carteiras profissionais, passaporte) e CPF.
                        </p>
                    </li>
                    <li>
                        <p>
                            Fotocópia (digitalização) do título eleitoral (para candidatos brasileiros).
                        </p>
                    </li>
                    <li>
                        <p>
                            Fotocópia (digitalização) da certidão de casamento (se for o caso).
                        </p>
                    </li>
                    <li>
                        <p>
                            Fotocópia do Certificado de Reservista ou de Alistamento Militar (para candidatos brasileiros e sexo masculino).
                        </p>
                    </li>
                    <li>
                        <p>
                            Fotocópia (digitalização) do Diploma de graduação, certificado de colação de grau ou declaração de concluinte de curso de graduação (com previsão de colação de grau até março de 2024).
                        </p>
                    </li>
                    <li>
                        <p>
                            Fotocópia (digitalização) do histórico escolar do curso de graduação.
                        </p>
                    </li>
                    <li>
                        <p>
                            <em>Curriculum vitae</em> cadastrado na Plataforma Lattes atualizado devidamente comprovado.
                        </p>
                    </li>
                    <li>
                        <p>
                            2 Cartas de recomendação (enviadas por formulário eletrônico).
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>O arquivo PDF único contendo todas a documentação deve ser enviado para o e-mail selecao.ppgmc@uesc.br.</strong>
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    </main>
  );
}