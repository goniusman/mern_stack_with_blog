import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../../store/actions/authAction'


const Header = ({auth, logout}) => {
    return (
        <>
            <header id="header" className="fixed-top header-inner-pages header-scrolled">
                <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><Link>Tempo</Link></h1>
            
                <Link className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"/></Link>

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><Link to="/" className="nav-link scrollto " >Home</Link></li>
                    <li><a className="nav-link scrollto" href="#about">About</a></li>
                    <li><a className="nav-link scrollto" href="#services">Services</a></li>
                    <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                    <li><a className="nav-link scrollto" href="#team">Team</a></li>
                    <li><Link to="/blog" className="active" >Blog</Link></li>
                    <li className="dropdown"><Link><span>Drop Down</span> <i className="bi bi-chevron-down"></i></Link>
                        <ul>
                        <li><Link>Drop Down 1</Link></li>
                        <li className="dropdown"><Link><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                            <ul>
                            <li><Link>Deep Drop Down 1</Link></li>
                            <li><Link>Deep Drop Down 2</Link></li>
                            <li><Link>Deep Drop Down 3</Link></li>
                            <li><Link>Deep Drop Down 4</Link></li>
                            <li><Link>Deep Drop Down 5</Link></li>
                            </ul>
                        </li>
                        <li><Link>Drop Down 2</Link></li>
                        <li><Link>Drop Down 3</Link></li>
                        <li><Link>Drop Down 4</Link></li>
                        </ul>
                    </li>
                    
                    { auth.isAuthenticated ? <li><Link className="nav-link scrollto" onClick={logout} >Logout</Link></li> : <li><Link className="nav-link scrollto" to="/login" >Login</Link></li> }
                 </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
            </header>
       
        </>
    )
}




const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Header) 