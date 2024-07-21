import Image from 'next/image';
import styles from './Slider.module.css';

export default function Slider() {
    return (
        <div className="slider slide-show">
            <ul className="slides">
                <li>
                    <Image src="/images/header-imgs/slideshow/img2.jpg" alt="Slide 2" layout="fill" objectFit="cover" />
                    <div className="caption center-align">
                        <h5 className="light grey-text text-lighten-3">Programa de Pós-Graduação em</h5>
                        <h3>Modelagem Computacional em Ciência e Tecnologia</h3>
                        <h5 className="light grey-text text-lighten-3">Universidade Estadual de Santa Cruz - UESC</h5>
                    </div>
                </li>
                {/* Outros slides podem ser adicionados aqui */}
                <li>
                    <Image src="/images/header-imgs/slideshow/img6.jpg" alt="Slide 6" layout="fill" objectFit="cover" />
                    <div className="caption right-align">
                        <h3>Modelagem Computacional</h3>
                        <h5 className="light grey-text text-lighten-3">para mudar o mundo!</h5>
                    </div>
                </li>
                <li>
                    <Image src="/images/header-imgs/slideshow/img1.jpg" alt="Slide 1" layout="fill" objectFit="cover" />
                    <div className="caption center-align">
                        <h3>Universidade Estadual de Santa Cruz</h3>
                        <h5 className="light grey-text text-lighten-3">UESC/BA</h5>
                    </div>
                </li>
            </ul>
        </div>
    );
}