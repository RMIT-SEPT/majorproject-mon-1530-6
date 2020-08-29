import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {

        return (

            <nav className="navbar" style={{ backgroundColor: "#9e9e9e " }} role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a href="/" className="button is-light my-0">
                                    <strong>HOME</strong>
                                </a>

                            </div>

                        </div>
                    </div>

                </div>
            </nav>

        )
    }
}
