"use client"

import React from "react"
import styles from "./page.module.css"
import Link from "next/link"

export default function Home() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h1 className="h1-eading">Sobre o programa</h1>
                        <p className="p-aragraph">
                            No Brasil os programas de pós-graduação são credenciados e avaliados anualmente pela Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES), que atribui o conceito de 3 a 7. O menor valor refere-se a um curso com avaliação satisfatória e com autorização para funcionamento apenas em nível de mestrado. Já a nota 7 refere-se a um programa cujo nível é equiparável aos melhores cursos da área no exterior. Periodicamente os comitês de área (ex: Interdisciplinar) se reúnem e elaboram os chamados Documentos de Área, que trazem os principais indicadores de cada área do conhecimento para serem usados como base para dos critérios de avaliação dos programas.
                        </p>
                        <p className="p-aragraph">
                            Os programas são avaliados a cada três anos pela CAPES que mantém ou atribui novo conceito ao programa dependendo da sua performance. Em 2012 a CAPES autorizou a abertura do PPGMC com conceito 3, e a próxima avaliação será realizada em 2012 correspondente ao triênio 2012-2015.
                        </p>
                        <div className="center-align">
                            <Link href="/">
                                <img src="/images/header-imgs/ppgmc_logo.svg" height="100" alt="PPGMC" />
                            </Link>
                            <Link href="http://www.uesc.br/">
                                <img src="/images/header-imgs/uesc_logo.png" height="100" alt="UESC" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h1 className="h1-eading">Missão</h1>
                        <p className="p-aragraph">
                            Capacitar recursos humanos em nível de mestrado para realizar atividades de magistério de nível superior, de pesquisa científica e de promoção do desenvolvimento tecnológico, sustentadas na aplicação de modelos computacionais e simulação científica à resolução de problemas das ciências e das engenharias.
                        </p>
                        <p className="p-aragraph">
                            O curso envolve a concepção e desenvolvimento de modelos matemáticos e computacionais, o desenvolvimento e aplicação de métodos numéricos, a utilização de técnicas e ferramentas computacionais e a validação de soluções numéricas e experimentais.
                        </p>
                        <p className="p-aragraph">Este objetivo geral pode ser desmembrado em vários objetivos específicos:</p>
                        <ul className="collection">
                            <li className="collection-item"><i className="material-icons teal-text darken-4">check</i> Fornecer uma sólida formação nos princípios matemáticos e computacionais da modelagem para aplicação em problemas das ciências e engenharias;</li>
                            <li className="collection-item"><i className="material-icons teal-text darken-4">check</i> Possibilitar a formação e o aperfeiçoamento de pesquisadores em áreas interdisciplinares com ênfase em computação científica aplicada a problemas das ciências e das engenharias e suas interfaces;</li>
                            <li className="collection-item"><i className="material-icons teal-text darken-4">check</i> Favorecer a formação e o aperfeiçoamento para o exercício do magistério superior;</li>
                            <li className="collection-item"><i className="material-icons teal-text darken-4">check</i> Despertar o espírito de iniciativa, de empreendimento, e de trabalho multidisciplinar e em equipe nos titulados do curso;</li>
                            <li className="collection-item"><i className="material-icons teal-text darken-4">check</i> Capacitar os titulados a conceber, projetar, elaborar e processar modelos e sistemas de alta complexidade científica e tecnológica;</li>
                            <li className="collection-item"><i className="material-icons teal-text darken-4">check</i> Contribuir ao fortalecimento da UESC e em sua consalidação como liderança regional em atividades de modelagem computacional e computação de alto desempenho.</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h1 className="h1-eading">Linhas de Pesquisa</h1>
                        <p className="p-aragraph">
                            O curso engloba duas linhas de pesquisa de uma mesma área de concentração Modelagem Computacional. As linhas refletem as áreas de atuação dos docentes permanentes do curso. A primeira linha é dedicada à utilização de técnicas de modelagem computacional a problemas de ciências básicas e engenharias, a segunda, refere-se à aplicação destas técnicas em fenômenos e sistemas biológicos.
                        </p>
                        <h2><strong>Modelagem Matemática e Computacional Aplicada</strong></h2>
                        <p className="p-aragraph">
                            Visa à construção e utilização de modelos matemáticos, algoritmos, códigos computacionais, técnicas de computação científica e computação de alto desempenho para modelagem computacional determinística e probabilística de fenômenos associados a aplicações de ciências e engenharia. Os modelos e ferramentas devem obter soluções numéricas estáveis e precisas para problemas de transporte de partículas, transferência radiativa, dinâmica de plasmas, processos difusivos-convectivos-reativos, processos de transferência de calor e massa, escoamento de fluidos, análise de sistemas complexos e fenômenos multi-escala. As principais aplicações desta linha aparecem em problemas de engenharia nuclear (fissão e fusão), física médica e dosimetria numérica, tratamento de rejeitos nucleares, difusão e transferência de conhecimento, problemas de engenharia de petróleo, problemas de circulação oceânica e atmosférica, dispersão de poluentes e contaminantes entre outras áreas de interesse.
                        </p>
                        <h2><strong>Biologia Computacional</strong></h2>
                        <p className="p-aragraph">
                            Objetiva o desenvolvimento e a utilização de modelos matemáticos e computacionais, bem como ferramentas e técnicas da computação científica e processamento paralelo, visando facilitar a compreensão do comportamento de sistemas biológicos complexos. Os estudos realizados buscam a integração das áreas da matemática e ciência da computação com a biologia, tendo tal formação multidisciplinar o objetivo de desenvolver soluções a problemas biológicos, bem como de buscar aplicações computacionais baseadas em conceitos biológicos. Como principais áreas de aplicação, citam-se a Bioinformática, Física Médica, Informática Biomédica, Simulação de Sistemas Biológicos, Visão Computacional e Inteligência Artificial.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h1 className="h1-eading">Histórico</h1>
                        <p className="p-aragraph">
                            A Universidade Estadual de Santa Cruz, UESC, é uma autarquia do Governo do Estado da Bahia, sendo a única instituição pública consolidada de pesquisa, ensino superior e extensão situada totalmente na Mesorregião Litoral Sul da Bahia, com uma população de aproximadamente 2 milhões de habitantes. O campus universitário da UESC situa-se entre os dois principais polos urbanos do Sul da Bahia, no km 16 da Rodovia Jorge Amado, BR 415, no município de Ilhéus. A sua área geo-educacional compreende um vasto território, agregando as sub-regiões conhecidas como Baixo Sul (11 municípios), Sul (42 municípios) e Extremo Sul (21 municípios) da Bahia. Ao todo são 74 municípios, numa área de 55.838 km², correspondendo a 9% da área do Estado e cerca de 16% de sua população. Com pouco mais de 20 anos de história como Universidade, a UESC tem experimentado a incorporação, em seu quadro de docentes pesquisadores, de um quantitativo significativo de profissionais que desenvolvem atividades de pesquisa na solução de problemas complexos, resultando em 33 cursos stricto sensu, distribuídos entre 26 programas de pós-graduação, sendo atendidos todos os colégios da CAPES. Desses, 8 são doutorados, 18 são mestrados acadêmicos e 7 são mestrados profissionais. O forte crescimento da UESC nos últimos anos tem consolidado sua posição como IES pública de destaque em nível estadual, regional e nacional.
                        </p>
                        <p className="p-aragraph"> 
                            Desde o início dos anos 2000, pesquisadores vinculados ao Departamento de Ciências Exatas e Tecnológicas da UESC (DCET), que envolve as áreas de Ciência da Computação, Matemática, Engenharias, Química e Física, desenvolvem pesquisas em Modelagem Matemática e Computacional e em áreas de interfaces relacionadas. Um marco relevante foi a criação em 2004 do Laboratório de Matemática Aplicada e Computacional (LAMAC) através de um projeto de pesquisa financiado pela Fundação de Amparo à Pesquisa do Estado da Bahia (FAPESB). Desde então os membros da equipe têm trabalhado com afinco para consolidação e expansão das atividades do laboratório.
                        </p>
                        <p className="p-aragraph"> 
                            Ao longo dos últimos anos as áreas de Computação, Matemática e Engenharia têm realizado esforços contínuos para atrair profissionais com atuação em simulação e modelagem computacional visando fortalecer a atuação do LAMAC. Outro momento de destaque no fortalecimento desta linha de pesquisa foi a criação, em março de 2005, do Grupo de Pesquisa em Matemática Aplicada e Computacional (GPMAC) cadastrado no CNPq. Este grupo aglutina pesquisadores e alunos de diversas formações sob o denominador comum de utilizar ferramentas de computação científica na resolução de problemas de diversas áreas de conhecimento. O contínuo esforço dos pesquisadores do grupo e a aprovação de vários projetos de pesquisa perante as agências de fomento permitiram a criação de uma nova sede nas instalações de Núcleo de Biologia Computacional e Gestão de Informações Biotecnológicas (NBCGIB) da UESC. A mudança e instalação do laboratório na nova sede aconteceram em julho de 2008, promovendo a consolidação do LAMAC, sustentada em um espaço físico moderno, funcional e amplo, além de contar com numerosos recursos computacionais de última geração. Outro marco importante no fortalecimento das pesquisas em modelagem computacional foi a aquisição no ano 2012 do supercomputador CACAU (Centro de Armazenamento de Dados e Computação Avançada da UESC). Máquina paralela com 20 nós de cálculo, 160 núcleos, e 320 GB de memória RAM, no momento da aquisição foi classificado como o cluster mais potente do estado da Bahia, e o segundo maior do Nordeste. Este computador em particular foi financiado com recursos da FINEP através de seu programa de infraestrutura de pesquisa. Com o passar dos anos atualizações foram feitas várias atualizações no equipamento e em sua infra-estrutura de apoio. Em 2018 foi aprovada uma nova grande atualização do CACAU em Edital competitivo da FINEP, estando o novo equipamento em fase de contratação.
                        </p>
                        <p className="p-aragraph"> 
                            O Mestrado em Modelagem Computacional em Ciência e Tecnologia pode ser considerado fruto da consolidação dos trabalhos do LAMAC e faz parte de um programa de planejamento e capacitação do DCET iniciado em 2006, que já resultou na aprovação de uma série de projetos em chamadas nacionais, parcerias inovadoras com o setor privado (em particular com empresas da área de informática) e na criação de programas de pós-graduação stricto sensu e diversos cursos lato sensu. Em 2010, os docentes pesquisadores do GPMAC entenderam que era o momento apropriado para oferecer aos alunos da região a oportunidade de contar com um curso de pós-graduação stricto sensu na área de tecnologia, e assim avançar em sua formação, resolvendo, em nossa universidade, problemas locais e universais.
                        </p>
                        <p className="p-aragraph"> 
                            O atual corpo docente permanente do programa é constituído por pesquisadores com formação multidisciplinar e, apesar de todos pertencerem ao Departamento de Ciências Exatas e Tecnológicas (DCET), têm atuação principal em diferentes áreas do conhecimento, tais como, Modelagem Computacional, Física, Bioinformática, Matemática, Informática Biomédica e Engenharia.
                        </p>
                        <p className="p-aragraph"> 
                            Desde o início das atividades do programa, no ano de 2013, foram realizados processos seletivos anuais com entrada de aproximadamente 17 alunos em cada ano. A demanda pelo curso em todos os processos seletivos tem sido significativa, com pelo menos três concorrentes por cada vaga oferecida. Até o momento (maio de 2021), o programa titulou 75 mestres, e conta com 38 matriculados. Atualmente, os membros do corpo docente do PPGMC trabalham com afinco na melhoria dos indicadores do curso visando a submissão de proposta de curso de doutorado dada a necessidade da região. 
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h1 className="h1-eading">Bolsas</h1>
                        <p className="p-aragraph">
                            A aceitação pelo orientador ou a aprovação no Exame de Seleção não implica na concessão automática de bolsa de estudos. No entanto, o curso sempre busca obter bolsas em agências de fomento. De fato, antes de todo o processo seletivo, os professores orientadores, em colaboração com a coordenação do programa e com a Pró-reitoria de Pesquisa e Pós-graduação (PROPP) da UESC, sempre solicitam bolsas de Demanda Social junto a agências de fomento CAPES, FAPESB e CNPq.
                        </p>
                        <p className="p-aragraph">
                            Poderão candidatar-se a bolsas os alunos regulares sem vínculo empregatício, levando-se em conta os critérios estabelecidos pelas agências financiadoras e pelo Colegiado do Curso.
                        </p>
                        <p className="p-aragraph">
                            As bolsas são distribuídas de acordo a ordem de classificação no processo seletivo e as exigências do edital de seleção.
                        </p>
                        <p className="p-aragraph">
                            A duração da bolsa de mestrado é de no máximo 24 meses.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}