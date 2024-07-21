import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col m12 l12">
                        <div className="col s12 row">
                            <div className="col s12 m6 l5">
                                <h5>Endereço</h5>
                                <ul>
                                    <li>Campus Soane Nazaré de Andrade</li>
                                    <li>Pavilhão Juizado Modelo</li>
                                    <li>1º andar - Sala 121</li>
                                    <li>Rodovia Jorge Amado, Km 16, Bairro Salobrinho</li>
                                    <li>Ilhéus-Bahia - CEP 45662-900.</li>
                                </ul>
                            </div>
                            <div className="col s12 m6 l4">
                                <h5>Contato</h5>
                                <ul>
                                    <li>
                                        <Link href="tel:+557336805297" passHref legacyBehavior>
                                            <a className="a-orange-darker">
                                                <i className="tiny material-icons">contact_phone</i> (73) 3680-5297
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="mailto:ppgmc@uesc.br" passHref legacyBehavior>
                                            <a className="a-orange-darker">
                                                <i className="tiny material-icons">contact_mail</i> ppgmc@uesc.br
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col s12 m12 l3">
                                <h5>Site da UESC</h5>
                                <ul>
                                    <li>
                                        <Link href="http://www.uesc.br/" passHref legacyBehavior>
                                            <a className="a-orange-darker" target="_blank">
                                                <i className="tiny material-icons">link</i> www.uesc.br
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.facebook.com/groups/426688820753476" passHref legacyBehavior>
                                            <a className="a-orange-darker" target="_blank">ⓕ Facebook PPGMC</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="teal darken-4 white-text">
                <div className="container">
                    <div className="col s12 footer-copyright">
                        Copyright ©{currentYear} All rights reserved | PPGMC/UESC
                    </div>
                </div>
            </div>
        </footer>
    );
}