import React from "react";
import { useParams, Link } from "react-router-dom";

import { FiChevronLeft } from "react-icons/fi";

import {Header} from './styles'

import logoImg from '../../assets/logo.svg';

const Repository: React.FC = () => {
    const params = useParams();

    return (
        <Header>
            <img src={logoImg} alt="Github Explorer" />
            <Link to="/">
                <FiChevronLeft size={16}/>
                Voltar
            </Link>
        </Header>
    );
}

export default Repository;