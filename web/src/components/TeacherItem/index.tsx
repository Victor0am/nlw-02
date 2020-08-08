import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import TeacherList from '../../pages/TeacherList';
import api from '../../services/api';
export interface Teacher {
    id: number;
        avatar: string;
        bio: string;
        cost: number;
        name: string;
        subject: string;
        whatsapp: string;
}
interface TeacherItemProps {
    teacher: Teacher;
}
export default function TeacherItem(props: TeacherItemProps) {

    function createNewConnection(){
        api.post('connnections', {user_id: props.teacher.id})
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={props.teacher.avatar} alt={props.teacher.name} />
                <div>
                    <strong>{props.teacher.name}</strong>
                    <span>{props.teacher.subject}</span>
                </div>
            </header>
            <p>
                {props.teacher.bio}        
        </p>
            <footer>
                <p>
                    Preço/hora
                <strong>R$ {props.teacher.cost},00</strong>
                </p>
                <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${props.teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whastsapp" />
                Entrar em contato
            </a>
            </footer>
        </article>
    );
}