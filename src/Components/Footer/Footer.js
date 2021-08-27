import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import {IconContext} from "react-icons"
import {FaWhatsapp} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';

export default function Footer(){
    return(
        <>
            <div className="fContainer">
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-4 column">
                            <h2>Nosotras</h2>
                            <p> Lorem bla bla blaLorem bla bla blaLorem bla bla blaLorem bla bla blaLorem bla bla blaLorem bla bla blaLorem bla bla bla</p>
                            <p className="bold">Leer más</p>
                            <IconContext.Provider value={{style: {margin:'10px', width:'40px', height:'40px', color:"#4d6ab2"}}}>
                                <FaInstagram/>
                                <FaFacebook/>
                                <FaWhatsapp/>
                            </IconContext.Provider>

                        </div>
                        <div className="col-4 column">
                            <h2>Ayuda</h2>
                            <ul>
                                <button className="btnPopUp" >Buscar</button><br/>
                                <button className="btnPopUp" >Contáctanos</button><br/>
                                <button className="btnPopUp" >Políticas de Reembolso</button><br/>
                                <button className="btnPopUp" >Términos de Servicio</button><br/>
                                <button className="btnPopUp" >Políticas de Privacidad</button>
                            </ul>
                        </div>
                        <div className="col-4 column">
                            <h2>Newsletter</h2>
                            <p>¿Te gustaría conocer las promos que manejamos según la temporada? Sorteos y más cosas, deja tu correo electrónico</p>
                            <input id="email" type="email" placeholder="  Correo Electrónico"></input>
                            <div className="btnSpace">
                                <button className="btnSend">Enviar</button>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="nav-bar botBar">
                <div className="container my-0">
                    <div className="col-12">
                        <p className="my-0 text-white">2021 FreeSoul</p>
                    </div>
                </div>
            </div>
        </>
    )
}