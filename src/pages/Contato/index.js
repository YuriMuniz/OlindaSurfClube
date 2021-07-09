import React from 'react';
import {MdEmail, MdSmartphone} from 'react-icons/md';
import {FaInstagram, FaFacebook} from 'react-icons/fa';

import {Container, Content, Title, Row} from './styles' 

function Contato(){
    return (
        <Container>
            <Content>
                <Title>
                    <span>Contato</span>
                    <a href="/">Home</a>
                </Title>
                <Row>
                    <MdEmail />
                    <span></span>
                </Row>
                <Row>
                    <MdSmartphone />
                    <span></span>
                </Row>
                <Row>
                    <FaInstagram />
                    <span></span>
                </Row>
                <Row>
                    <FaFacebook />
                    <span> </span>
                </Row>     
            </Content>
        </Container>
    )
}

export default Contato;