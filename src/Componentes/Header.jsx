import React from "react";
import "../assets/style.css"

function Header(){
    return (
        <header>
            <section>
                <h2 className="tbn cyan-color mb-0">Portfólio</h2>
                <nav>
                    <ul className="ps-0 mb-0 no-mobile">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sobre">Sobre mim</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#experiencias">Experiência</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}
export default Header;