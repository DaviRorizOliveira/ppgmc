import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    // Simulating the current page and subpage for demonstration
    const current = 'home'; // Atualize conforme a lógica da sua aplicação
    const subcurrent = 'disciplinas'; // Atualize conforme a lógica da sua aplicação

    return (
        <>
            {/* SUBMENU */}
            <ul id="dropdown-academico" className="dropdown-content">
                <li className={subcurrent === 'disciplinas' ? 'active' : ''}>
                    <Link href="/academico/disciplinas" legacyBehavior>
                        <a>Disciplinas</a>
                    </Link>
                </li>
                <li className={subcurrent === 'normas' ? 'active' : ''}>
                    <Link href="/academico/normas" legacyBehavior>
                        <a>Normas</a>
                    </Link>
                </li>
                <li className={subcurrent === 'colegiado' ? 'active' : ''}>
                    <Link href="/academico/colegiado" legacyBehavior>
                        <a>Colegiado</a>
                    </Link>
                </li>
            </ul>
            <ul id="dropdown-pesquisa" className="dropdown-content">
                <li className={subcurrent === 'laboratorios' ? 'active' : ''}>
                    <Link href="/pesquisa/laboratorios" legacyBehavior>
                        <a>Laboratórios</a>
                    </Link>
                </li>
                <li className={subcurrent === 'grupo-de-pesquisa' ? 'active' : ''}>
                    <Link href="/pesquisa/grupo-de-pesquisa" legacyBehavior>
                        <a>Grupo de Pesquisa</a>
                    </Link>
                </li>
            </ul>
            <ul id="dropdown-acoes" className="dropdown-content">
                <li className={subcurrent === 'insercao-social' ? 'active' : ''}>
                    <Link href="/acoes/1" legacyBehavior>
                        <a>Inserção Social</a>
                    </Link>
                </li>
                <li className={subcurrent === 'internacionalizacao' ? 'active' : ''}>
                    <Link href="/acoes/2" legacyBehavior>
                        <a>Internacionalização</a>
                    </Link>
                </li>
            </ul>

            {/* MENU */}
            <nav className="main-nav teal darken-4 white-text">
                <div className="nav-wrapper container">
                    <Link href="/#" legacyBehavior>
                        <a data-target="mobile-navbar" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                    </Link>
                    <ul className="hide-on-med-and-down">
                        <li className={current === 'home' ? 'active' : ''}>
                            <Link href="/" legacyBehavior>
                                <a>Principal</a>
                            </Link>
                        </li>
                        <li className={current === 'programa' ? 'active' : ''}>
                            <Link href="/programa" legacyBehavior>
                                <a>O Programa</a>
                            </Link>
                        </li>
                        <li className={current === 'processos-seletivos' ? 'active' : ''}>
                            <Link href="/processos-seletivos" legacyBehavior>
                                <a>Processos Seletivos</a>
                            </Link>
                        </li>
                        <li className={current === 'academico' ? 'active' : ''}>
                            <Link href="#" legacyBehavior>
                                <a className="dropdown-trigger" data-target="dropdown-academico">
                                    Acadêmico<i className="material-icons right">arrow_drop_down</i>
                                </a>
                            </Link>
                        </li>
                        <li className={current === 'dissertacoes' ? 'active' : ''}>
                            <Link href="/dissertacoes" legacyBehavior>
                                <a>Dissertações</a>
                            </Link>
                        </li>
                        <li className={current === 'docentes' ? 'active' : ''}>
                            <Link href="/corpo-docente" legacyBehavior>
                                <a>Docentes</a>
                            </Link>
                        </li>
                        <li className={current === 'discentes' ? 'active' : ''}>
                            <Link href="/discentes" legacyBehavior>
                                <a>Discentes</a>
                            </Link>
                        </li>
                        <li className={current === 'pesquisa' ? 'active' : ''}>
                            <Link href="#" legacyBehavior>
                                <a className="dropdown-trigger" data-target="dropdown-pesquisa">
                                    Pesquisa<i className="material-icons right">arrow_drop_down</i>
                                </a>
                            </Link>
                        </li>
                        <li className={current === 'acoes' ? 'active' : ''}>
                            <Link href="#" legacyBehavior>
                                <a className="dropdown-trigger" data-target="dropdown-acoes">
                                    Ações Sociais<i className="material-icons right">arrow_drop_down</i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* SUBMENU MOBILE */}
            <ul id="dropdown-academico-mob" className="dropdown-content">
                <li className={subcurrent === 'disciplinas' ? 'active' : ''}>
                    <Link href="/academico/disciplinas" legacyBehavior>
                        <a>Disciplinas</a>
                    </Link>
                </li>
                <li className={subcurrent === 'normas' ? 'active' : ''}>
                    <Link href="/academico/normas" legacyBehavior>
                        <a>Normas</a>
                    </Link>
                </li>
                <li className={subcurrent === 'colegiado' ? 'active' : ''}>
                    <Link href="/academico/colegiado" legacyBehavior>
                        <a>Colegiado</a>
                    </Link>
                </li>
            </ul>
            <ul id="dropdown-pesquisa-mob" className="dropdown-content">
                <li className={subcurrent === 'laboratorios' ? 'active' : ''}>
                    <Link href="/pesquisa/laboratorios" legacyBehavior>
                        <a>Laboratórios</a>
                    </Link>
                </li>
                <li className={subcurrent === 'grupo-de-pesquisa' ? 'active' : ''}>
                    <Link href="/pesquisa/grupo-de-pesquisa" legacyBehavior>
                        <a>Grupo de Pesquisa</a>
                    </Link>
                </li>
            </ul>
            <ul id="dropdown-acoes-mob" className="dropdown-content">
                <li className={subcurrent === 'insercao-social' ? 'active' : ''}>
                    <Link href="/acoes/1" legacyBehavior>
                        <a>Inserção Social</a>
                    </Link>
                </li>
                <li className={subcurrent === 'internacionalizacao' ? 'active' : ''}>
                    <Link href="/acoes/2" legacyBehavior>
                        <a>Internacionalização</a>
                    </Link>
                </li>
            </ul>

            {/* MENU MOBILE */}
            <ul className="sidenav" id="mobile-navbar">
                <li className={current === 'home' ? 'active' : ''}>
                    <Link href="/" legacyBehavior>
                        <a>Principal</a>
                    </Link>
                </li>
                <li className={current === 'programa' ? 'active' : ''}>
                    <Link href="/programa" legacyBehavior>
                        <a>O Programa</a>
                    </Link>
                </li>
                <li className={current === 'processos-seletivos' ? 'active' : ''}>
                    <Link href="/processos-seletivos" legacyBehavior>
                        <a>Processos Seletivos</a>
                    </Link>
                </li>
                <li className={current === 'academico' ? 'active' : ''}>
                    <Link href="#" legacyBehavior>
                        <a className="dropdown-trigger" data-target="dropdown-academico-mob">
                            Acadêmico<i className="material-icons right">arrow_drop_down</i>
                        </a>
                    </Link>
                </li>
                <li className={current === 'dissertacoes' ? 'active' : ''}>
                    <Link href="/dissertacoes" legacyBehavior>
                        <a>Dissertações</a>
                    </Link>
                </li>
                <li className={current === 'docentes' ? 'active' : ''}>
                    <Link href="/corpo-docente" legacyBehavior>
                        <a>Docentes</a>
                    </Link>
                </li>
                <li className={current === 'discentes' ? 'active' : ''}>
                    <Link href="/discentes" legacyBehavior>
                        <a>Discentes</a>
                    </Link>
                </li>
                <li className={current === 'pesquisa' ? 'active' : ''}>
                    <Link href="#" legacyBehavior>
                        <a className="dropdown-trigger" data-target="dropdown-pesquisa-mob">
                            Pesquisa<i className="material-icons right">arrow_drop_down</i>
                        </a>
                    </Link>
                </li>
                <li className={current === 'acoes' ? 'active' : ''}>
                    <Link href="#" legacyBehavior>
                        <a className="dropdown-trigger" data-target="dropdown-acoes-mob">
                            Ações Sociais<i className="material-icons right">arrow_drop_down</i>
                        </a>
                    </Link>
                </li>
            </ul>
        </>
    );
}