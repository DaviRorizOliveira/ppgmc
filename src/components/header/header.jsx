// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import styles from "./header.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header className="teal darken-4 white-text">
            <div className="container">
                <div className="row header-cont">
                    <div className="col s12 m12 l1">
                        <Link href="/" passHref legacyBehavior>
                            <a className="center-align" title="PPGMC">
                                <Image src="/images/header-imgs/ppgmc-logo-branco.svg" height={40} width={40} alt="PPGMC" />
                            </a>
                        </Link>
                    </div>
                    <div className="col s12 m12 l6">
                        <h1 className="h1 header-title center-align">Programa de Pós-Graduação em Modelagem Computacional</h1>
                    </div>
                    <div className="col s6 m6 l2">
                        <FontAwesomeIcon icon={faPhone} className="material-icons white-text tiny icon-and-title"/>
                        <Link href="tel:733680-5297" passHref legacyBehavior>
                            <a className="center-align slink" title="Contato" alt="contato"> (73) 3680-5297</a>
                        </Link>
                    </div>
                    <div className="col s6 m6 l3">
                        <div className="flags center-align">
                            <Link href="/" passHref legacyBehavior>
                                <a title="Pt-BR">
                                    <Image src="/images/header-imgs/bandeira_brasil.png" height={20} width={30} alt="Pt-BR" />
                                </a>
                            </Link>
                            <Link href="/" passHref legacyBehavior>
                                <a title="English">
                                    <Image src="/images/header-imgs/bandeira_usa.png" height={20} width={30} alt="English" />
                                </a>
                            </Link>
                            <Link href="/" passHref legacyBehavior>
                                <a title="Español">
                                    <Image src="/images/header-imgs/bandeira_espanha.png" height={20} width={30} alt="Español" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}