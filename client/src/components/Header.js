import React, { Component } from 'react';

class Header extends Component{
    render() {
        return (
            <div>
               <nav>
                  <div className="nav-wrapper">
                      <a className="left brand-logo">
                        Nature Cryo
                      </a>
                      <ul className="right">
                          <a>Login With Google</a>
                      </ul>
                  </div>
               </nav>
            </div>
        );
    }
}

export default Header;