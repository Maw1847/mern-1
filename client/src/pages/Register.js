import React from 'react';
import Navigation from '../composants/Navigation';
import axios from 'axios'
import '../styles/register.css'

const Register = () => {

    const [matricule, setMatricule] = React.useState([]);
    const [nomComplet, setNomCoplet] = React.useState('');
    const [classe, setClasse] = React.useState('');

    const onSubmitHandler = async() =>{
        let url = 'http://localhost:5000/addStudent'
        const result = await axios.post(url, {matricule, nomComplet, classe}); 

        if (result) alert(`Ajout effectué avec succès!`)
        else alert(`Quelque chose s'est mal passée!`)
    }

    return (
        <div>
            <Navigation />
            <h1>Ajouter un nouvel étudiant</h1>
            
            <div className='formu' >
            <form className='forme' >
                <div className="form-group">
                    <label>Matricule : </label>
                    <input type="number" className='form-control' onChange={(e)=>setMatricule(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Nom Complet : </label>
                    <input type="text" className='form-control' onChange={(e)=>setNomCoplet(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Classe : </label>
                    <input type="text" className='form-control' onChange={(e)=>setClasse(e.target.value)} />
                </div>
                <br />
                <div className='text-center' >
                    <button type='submit' className='btn btn-primary text-center' onClick={onSubmitHandler} >Ajouter</button>
                </div>
            </form>
            </div>
            

        </div>

    );
};

export default Register;