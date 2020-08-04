import React, { ReactNode } from 'react';
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import { Link } from 'react-router-dom';
import './styles.css'
interface PageHeaderProps{
    children?: ReactNode;
    title: string;
}

export default function PageHeader(props: PageHeaderProps){
    return (
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to='/'>
                        <img src={backIcon} alt="Voltar" />
                    </Link>
                    <img src={logoImg} alt="Proffy" />
                </div>

                <div className="header-content">
                    <strong>
                        {props.title}
                    </strong>
                    {props.children}
                </div>
            </header>
    );
}