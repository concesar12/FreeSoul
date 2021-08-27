/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './TabNav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaWhatsapp} from 'react-icons/fa';
import {FaTruck} from 'react-icons/fa';
import Logo from '../../FreesoulDocs/FreeSoulLogoweb-01.png';
import {IconContext} from "react-icons"
import {FaShoppingBag} from 'react-icons/fa'
import {FaRegEnvelopeOpen} from 'react-icons/fa'


class TabNav extends React.Component {

    render(){
        return(
            <div>
                <div className="top-bar topBar">
                    <div className="container">
                        <div className="col-12">
                            <p>
                                Envíos a toda Colombia
                                <a className="topLink" href="tel:+64225946488"><FaWhatsapp/> Contáctanos</a>
                                <a className="topLink" href="https://envia.co/" target="_blank" rel="noreferrer"><FaTruck/> Sigue tu pedido</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="tabcss">
                    <center>
                        <img
                            className="logo"
                            src={Logo}
                            alt="FreeSoul-Logo"
                        />
                        <IconContext.Provider value={{style: {width:'60px', height:'70px', color:"#4d6ab2"}}}> 
                            <span className="icon1"><FaShoppingBag/></span> 
                        </IconContext.Provider>
                        
                        <IconContext.Provider value={{style: {width:'60px', height:'70px', color:"#4d6ab2"}}}> 
                            <span className="icon2"><FaRegEnvelopeOpen/> </span> 
                        </IconContext.Provider> 
                    </center>

                      
                </div>
                    
                <div>
                    <ul className="nav nav-tabs justify-content-center tabcss">
                        {
                            this.props.tabs.map(tab => {
                                const active =(tab === this.props.selected ? 'active' : '');
                                return(
                                    <li className="nav-item" key={tab}>
                                        <a href="#" className={"nav-link " + active} onClick={ () => this.props.setSelected(tab)}>
                                            {tab}
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default TabNav;