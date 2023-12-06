import React from "react";
import "../assets/style.css"
import Whats from "../assets/media/whatsapp.png"
import Email from "../assets/media/email.svg"

function Principal() {
    return (
        <main>
            <a href="https://wa.me/qr/ZPON3B2U37CMD1" target="_blank" className="btn-outline btn-cyan-color" id="whats"><img src={Whats} alt=""/></a>
            <a href="mailto:liviavsgomes@gmail.com" target="_blank" className="btn-outline btn-cyan-color" id="email"><img src={Email} alt=""/></a>
            <section className="container-fluid container-box1" id="home">
                <section className="box1">
                    <div>
                        <h2 className="text-light">OLÁ, EU SOU</h2>
                        <h1 className="cyan-color">LÍVIA GOMES</h1>
                        <h2 className="mb-4 text-light">Desenvolvedora Front-end & UI Designer.</h2>
                    </div>
                    <div className="buttons">
                        <a className="me-2 btn btn-outline btn-cyan-color" href="https://www.linkedin.com/in/l%C3%ADvia-gomes-6a5771230/" target="_blank"><img className="me-2 relative-bottom" src="./assets/linkedin.svg" alt=""/>LinkedIn</a>
                        <a className="btn btn-outline rosa-chock-color" href="https://github.com/ViviSGG" target="_blank"><img className="me-2" src="./assets/github.svg" alt=""/>GitHub</a>
                    </div>
                </section>
            </section>
            <section className="container-fluid container-box2 cinza-claro-color" id="sobre">
                <section className="box2">
                    <img className="me-5 perfil rounded" src="assets\perfil2.jpeg" alt=""/>
                    <div className="div-box2">
                        <div>
                            <h2 className="text-light">SOBRE MIM</h2>
                            <h3 className="text-light">Recife, Pernambuco</h3>
                        </div>
                        <div>
                            <p className="text-secondary">Técnica em Desenvolvimento de Sistemas, graduando em Análise e Desenvolvimento de Sistemas, bolsista pelo programa Embarque Digital na Faculdade Senac Pernambuco. Estou cursando o 4º período, com previsão de término em Julho de 2024.</p>
                            <p className="text-secondary">Possuo habilidade com versionamento de código, Prototipação, HTML5, CSS3, BootStrap, MySQL, Python e atualmente estudando JavaScript, Node.js e React.js.</p>
                        </div>
                        {/* <figure>
                            <img src="./assets/figma.svg" alt="">
                            <img src="./assets/youtube.svg" alt="">
                            <img src="./assets/twitter.svg" alt="">
                            <img src="./assets/twitch.svg" alt="">
                        </figure> */}
                        <div className="buttons">
                            <a className="me-2 btn btn-outline btn-cyan-color" href="assets\Lívia Gomes - Currículo.pdf" target="_blank"><img className="me-2" src="./assets/download-cloud.svg" alt=""/>Currículo</a>
                            <a className="btn btn-outline rosa-chock-color" href="mailto:liviavsgomes@gmail.com" target="_blank"><img className="me-2" src="./assets/email.svg" alt=""/>E-email</a>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid container-box3" id="projetos">
                <section className="box3">
                    <h2 className="text-light mb-4">PROJETOS</h2>
                    <section className="cards-videos mb-4">
                        <figure className="card card-video">
                            <video className="card-img-top" src="assets\legPretaBIG-pitch-capivair  - Feito com o Clipchamp_1685144292413 - Compressed with FlexClip.mp4" controls></video>
                            <figcaption className="ps-3 pt-1 text-secondary">Edição, Lívia Gomes</figcaption>
                            <div className="card-body">
                                <h3 className="text-light">Capivair</h3>
                                <p className="card-text text-secondary">Plataforma para monitoramento de poluição industrial. Projeto integrador 2023.1.</p>
                                <p className="cyan-color">Tecnologias usadas no projeto</p>
                                <ul type="circle">
                                    <li className="cyan-color">HTML5</li>
                                    <li className="cyan-color">CSS3</li>
                                    <li className="cyan-color">JavaScript</li>
                                    <li className="cyan-color">Git / GitHub</li>
                                </ul>
                                <div className="buttons">
                                    <a href="https://github.com/brazadrian/capivair" target="_blank" className="btn btn-outline btn-cyan-color"><img className="me-2 relative-bottom" src="./assets/link.svg" alt=""/>Repositório</a>
                                    <a href="#" className="btn btn-outline rosa-chock-color"><img className="me-2 relative-bottom" src="./assets/link.svg" alt=""/>Visualizar</a>
                                </div>
                            </div>
                        </figure>
                        <figure className="card card-video">
                            <img className="card-img-top" src="./assets/telas exercícios js.png" alt=""/>
                            <div className="card-body">
                                <h3 className="text-light">Prática com JavaScript</h3>
                                <p className="card-text text-secondary">Resolução, lista de exercícios de Funções em JavaScript.</p>
                                <p className="cyan-color">Tecnologias usadas no projeto</p>
                                <ul type="circle">
                                    <li className="cyan-color">JavaScript</li>
                                    <li className="cyan-color">HTML5</li>
                                    <li className="cyan-color">CSS3</li>
                                    <li className="cyan-color">BootStrap</li>
                                    <li className="cyan-color">Git / GitHub</li>
                                </ul>
                                <div className="buttons">
                                    <a href="https://github.com/ViviSGG/pratica-js-function" target="_blank" className="btn btn-outline btn-cyan-color"><img className="me-2 relative-bottom" src="./assets/link.svg" alt=""/>Repositório</a>
                                    <a href="https://vivisgg.github.io/pratica-js-function/" target="_blank" className="btn btn-outline rosa-chock-color"><img className="me-2 relative-bottom" src="./assets/link.svg" alt=""/>Visualizar</a>
                                </div>
                            </div>
                        </figure> 
                    </section>
                    <section className="cards-videos mb-4">
                        <figure className="card card-video">
                            <img className="card-img-top" src="assets\page-studioghibli.png" alt=""/>
                            <div className="card-body">
                                <h3 className="text-light">Studio Ghibli</h3>
                                <p className="card-text text-secondary">Página temática - prática com react.js.</p>
                                <p className="cyan-color">Tecnologias usadas no projeto</p>
                                <ul type="circle">
                                    <li className="cyan-color">HTML5</li>
                                    <li className="cyan-color">CSS3</li>
                                    <li className="cyan-color">React.js</li>
                                    <li className="cyan-color">Vite</li>
                                    <li className="cyan-color">Git / GitHub</li>
                                </ul>
                                <div className="buttons">
                                    <a href="https://github.com/ViviSGG/projeto-StudioGhibli" target="_blank" className="btn btn-outline btn-cyan-color"><img className="me-2 relative-bottom" src="./assets/link.svg" alt=""/>Repositório</a>
                                </div>
                            </div>
                        </figure>
                        <figure className="card card-video">
                            <img className="card-img-top" src="./assets/clone-insta.png" alt=""/>
                            <div className="card-body">
                                <h3 className="text-light">Clone login do Instagram</h3>
                                <p className="card-text text-secondary">Instagram clone com React.js.</p>
                                <p className="cyan-color">Tecnologias usadas no projeto</p>
                                <ul type="circle">
                                    <li className="cyan-color">HTML5</li>
                                    <li className="cyan-color">CSS3</li>
                                    <li className="cyan-color">React.js</li>
                                    <li className="cyan-color">Git / GitHub</li>
                                </ul>
                                <div className="buttons">
                                    <a href="https://github.com/ViviSGG/Desafio-InstagramClone-React" target="_blank" className="btn btn-outline btn-cyan-color"><img className="me-2 relative-bottom" src="./assets/link.svg" alt=""/>Repositório</a>
                                </div>
                            </div>
                        </figure> 
                    </section>
                    <section className="cards-imagens">
                        <div className="card card-img">
                            <img className="card-img-top" src="./assets/Naped.jpeg" alt=""/>
                            <div className="card-body">
                                <h3 className="text-light">Naped</h3>
                                <p className="card-text text-secondary">Page responsiva, feita com HTML5 E CSS3 puro.</p>
                                <p className="cyan-color">Tecnologias usadas no projeto</p>
                                <ul type="circle">
                                    <li className="cyan-color">HTML5</li>
                                    <li className="cyan-color">CSS3</li>
                                    <li className="cyan-color">Git / GitHub</li>
                                </ul>
                                <div className="buttons">
                                    <a href="https://github.com/ViviSGG/Projeto-Naped" target="_blank" className="btn btn-outline btn-cyan-color"><img className="me-2 relative-bottom" src="./assets/link.svg" alt=""/>Repositório</a>
                                    <a href="https://vivisgg.github.io/Projeto-Naped/" target="_blank" className="btn btn-outline rosa-chock-color"><img className="me-2 relative-bottom" src="./assets/link.svg" alt=""/>Visualizar</a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-img">
                            <img className="card-img-top" src="./assets/inverno.jpeg" alt=""/>
                            <div className="card-body">
                                <h3 className="text-light">Inverno</h3>
                                <p className="card-text text-secondary">Page responsiva, feita com HTML5 E CSS3 puro.</p>
                                <p className="cyan-color">Tecnologias usadas no projeto</p>
                                <ul type="circle">
                                    <li className="cyan-color">HTML5</li>
                                    <li className="cyan-color">CSS3</li>
                                    <li className="cyan-color">Git / GitHub</li>
                                </ul>
                                <div className="buttons">
                                    <a href="https://github.com/ViviSGG/desafio3-Vai-na-Web" target="_blank" className="btn btn-outline btn-cyan-color"><img className="me-2 relative-bottom" src="./assets/link.svg" alt=""/>Repositório</a>
                                    <a href="https://vivisgg.github.io/desafio3-Vai-na-Web/" target="_blank" className="btn btn-outline rosa-chock-color"><img className="me-2 relative-bottom" src="./assets/link.svg" alt=""/>Visualizar</a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-img">
                            <img className="card-img-top" src="./assets/telas.jpg" alt=""/>
                            <div className="card-body">
                                <h3 className="text-light">Flamingo</h3>
                                <p className="card-text text-secondary">Prototipação de alta fidelidade.</p>
                                <p className="cyan-color">Tecnologias usadas no projeto</p>
                                <ul type="circle">
                                    <li className="cyan-color">Figma</li>
                                </ul>
                                <div className="buttons">
                                    {/* <a href="#" className="btn btn-outline btn-cyan-color"><img className="me-2 relative-bottom" src="./assets/link.svg" alt="">Repositório</a> */}
                                    <a href="https://www.figma.com/proto/fSh7GJY21FCJALoUdAu2l0/english-diary?type=design&node-id=31-703&t=gfXkcN9hKzXU7foq-0&scaling=min-zoom&page-id=2%3A2&starting-point-node-id=31%3A961&show-proto-sidebar=1" target="_blank" className="btn btn-outline rosa-chock-color"><img className="me-2 relative-bottom" src="./assets/link.svg" alt=""/>Visualizar</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <section className="container-fluid container-box4 cinza-claro-color" id="experiencias">
                <section className="box4">
                    <h2 className="text-light mb-4">EXPERIÊNCIA</h2>    
                    <div className="mb-3 empresa">
                        <h3 className="cyan-color">Speed+</h3>
                        <span className="cyan-color">Agosto 2023 - Atual</span>
                    </div>
                    <h4 className="text-light">CALL CENTER (ESTÁGIO HOME OFFICE)</h4>
                    <p className="text-secondary">Realizar atendimento aos clientes, atualizar informações em plataformas digitais, bem como atendimento digital.</p>
                </section>
            </section>
        </main>
    )
}
export default Principal;