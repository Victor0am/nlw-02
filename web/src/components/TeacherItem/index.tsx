import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/43154449?s=400&u=a2f97e7b57442b98d5cdc142749a2f4b333dc465&v=4" alt="Avatar" />
                <div>
                    <strong>Victor</strong>
                    <span>Matéria</span>
                </div>
            </header>
            <p>
                Descrição
        </p>
            <footer>
                <p>
                    Preço/hora
                <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whastsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}