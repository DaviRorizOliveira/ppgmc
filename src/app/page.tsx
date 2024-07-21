"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
    const [numbers, setNumbers] = useState<number[]>([86, 16, 13]);
    const [isInView, setIsInView] = useState(false);
    const animationRefs = useRef<Array<number | null>>([null, null, null]);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('div-z-n');
            if (element) {
                const rect = element.getBoundingClientRect();
                const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
                setIsInView(isInView);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            const updateNumbers = (index: number, target: number) => {
                let count = 0;
                const animate = () => {
                    if (count < target) {
                        count++;
                        setNumbers((prevNumbers) => {
                            const newNumbers = [...prevNumbers];
                            newNumbers[index] = count;
                            return newNumbers;
                        });
                        animationRefs.current[index] = requestAnimationFrame(animate);
                    } else {
                        setNumbers((prevNumbers) => {
                            const newNumbers = [...prevNumbers];
                            newNumbers[index] = target;
                            return newNumbers;
                        });
                    }
                };
                animate();
            };

            numbers.forEach((num, index) => {
                if (animationRefs.current[index]) {
                    cancelAnimationFrame(animationRefs.current[index]!);
                }
                updateNumbers(index, num);
            });

            // Clean up animation frames on component unmount or when `isInView` changes
            return () => {
                animationRefs.current.forEach(id => {
                    if (id) cancelAnimationFrame(id);
                });
            };
        }
    }, [isInView]);

    return (
        <div>
            <div id="div-z-n" className="row teal darken-3">
                <div className="container">
                    <h1 className="h1-monospace white-text">INFORMAÇÕES DO PROGRAMA</h1>
                    <div className="col s6 m4 center-align orange-text text-darken-4">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Dissertações defendidas</span>
                                <p className={styles.iconDestaque}><i className="large material-icons">book</i></p>
                            </div>
                            <div className="card-action">
                                <h3><b className="z-n">{numbers[0]}</b></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col s6 m4 center-align orange-text text-darken-4">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Docentes atuando</span>
                                <p className={styles.iconDestaque}><i className="large material-icons">people</i></p>
                            </div>
                            <div className="card-action">
                                <h3><b className="z-n">{numbers[1]}</b></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 center-align orange-text text-darken-4">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Projetos em execução</span>
                                <p className={styles.iconDestaque}><i className="large material-icons">bookmark</i></p>
                            </div>
                            <div className="card-action">
                                <h3><b className="z-n">{numbers[2]}</b></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <h2 className="h2-eading">Notícias</h2>
                    <div className="col s12 m12 l4">
                        <div className="card destaque-shadow">
                            <div className="card-image">
                                <Image src="/images/noticias/2022/03-desafio-flex.png" width={500} height={300} alt="Desafio Flex" />
                            </div>
                            <div className="card-content">
                                <span className="card-title grey-text text-darken-4" style={{ fontSize: '20px' }}>Equipe Campeã do 3º Desafio Flex</span>
                                <p>A Uesc é campeã do 3º Desafio Flex de Inovação em São Paulo</p>
                                <p><Link href="https://www2.uesc.br/noticias/599/A-Uesc-e-campea-do-3o-Desafio-Flex-de-Inovacao-em-Sao-Paulo" passHref>
                                    <i className="tiny material-icons">lightbulb_outline</i> Saiba Mais
                                </Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className="card destaque-shadow">
                            <div className="card-image">
                                <Image src="/images/noticias/2022/01-processo-seletivo-04-300x229.png" width={300} height={229} alt="Processo Seletivo" />
                            </div>
                            <div className="card-content">
                                <span className="card-title grey-text text-darken-4" style={{ fontSize: '20px' }}>Processo Seletivo Turma 2023.1</span>
                                <p>Encontra-se aberto o processo seletivo para a turma 2023.1 do PPGMC, Edital UESC 134/2022...</p>
                                <p><Link href="/processos-seletivos" passHref>
                                    <i className="tiny material-icons">lightbulb_outline</i> Saiba Mais
                                </Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div className="card destaque-shadow">
                            <div className="card-image">
                                <Image src="/images/noticias/2022/02-carimbo-nota4.png" width={500} height={300} alt="Nota 4" />
                            </div>
                            <div className="card-content">
                                <span className="card-title grey-text text-darken-4" style={{ fontSize: '20px' }}>PPGMC-UESC Alcança Nota 4</span>
                                <p>O PPGMC-UESC obtêm nota 4 na avaliação CAPES quadriênio 2017-2020...</p>
                                <p><Link href="https://www2.uesc.br/noticias/581/Programas-de-pos-graduacao-da-Uesc-elevam-conceitos-na-avaliacao-da-Capes" passHref>
                                    <i className="tiny material-icons">lightbulb_outline</i> Saiba Mais
                                </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="container">
                    <div className="row">
                        <h2 className="h2-eading">Projetos</h2>
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="col s12 m6 l3">
                                <div className="card">
                                    <div className="card-content destaque-shadow">
                                        <span className="card-title grey-text text-darken-4" style={{ fontSize: '20px' }}>Projeto de Pesquisa no campo da neurobiologia</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non lorem mauris...</p>
                                        <p><Link href="#">
                                            <i className="tiny material-icons">layers</i> Tenho interesse
                                        </Link></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="container">
                    <div className="row">
                        <h2 className="h2-eading">Laboratórios</h2>
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="col s12 m6 l3">
                                <div className="card">
                                    <div className="card-content destaque-shadow">
                                        <span className="card-title grey-text text-darken-4" style={{ fontSize: '20px' }}>Nova eleição para chefe dos laboratórios</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio urna, suscipit quis commodo id...</p>
                                        <p><Link href="#">
                                            <i className="tiny material-icons">visibility</i> Ler tudo
                                        </Link></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}