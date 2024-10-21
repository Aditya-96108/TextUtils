import React from 'react';
import propTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <button className="navbar-brand btn btn-link" onClick={props.showHome}>
          {props.title}
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button className="nav-link active btn btn-link" onClick={props.showHome}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={props.showAbout}>
                About
              </button>
            </li>
          </ul>
          <div className={`form-check form-switch ms-auto text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input 
              className="form-check-input" 
              onClick={props.toggleMode} 
              type="checkbox" 
              role="switch" 
              id="flexSwitchCheckDefault" 
              checked={props.mode === 'light'} 
            />
            <label 
              className="form-check-label" 
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
  mode: propTypes.string.isRequired,
  toggleMode: propTypes.func.isRequired,
  showAbout: propTypes.func.isRequired,
  showHome: propTypes.func.isRequired
};

Navbar.defaultProps = {
  title: 'set title here'
};
