import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/navigation.css'

const Navigation = () => {
  return (
    <div className="row nav">
            <div className="col-sm-2">
                <NavLink exact to='/' >
                    Accueil
                </NavLink>
            </div>
            <div className="col-sm-2">
                <NavLink exact to='/liste' >
                    Liste des étudiants
                </NavLink>
            </div>
            <div className="col-sm-2">
                <NavLink exact to='/register' >
                    Ajouter un étudiant
                </NavLink>
            </div>
        </div>
  );
};

export default Navigation;
