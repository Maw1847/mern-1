import axios from 'axios';
import React from 'react';
import Navigation from '../composants/Navigation';

const Liste = () => {

    const [students, setStudents] = React.useState([]);

    React.useEffect(()=> {
        let url = 'http://localhost:5000/allStudents'
        axios.get(url).then((res)=>setStudents(res.data));
    }, [])

    const renderTable = ()=> {
        let compteur = 0;
        return <>
            <table className='table' >
                <thead className='thead-black' >
                    <tr>
                        <th>N°</th>
                        <th>Matricule</th>
                        <th>Nom Complet</th>
                        <th>Classe</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student=>(
                        <tr>
                            <td>{++compteur}</td>
                            <td>{student.matricule}</td>
                            <td>{student.nomComplet}</td>
                            <td>{student.classe}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    }

    return (
        <div>
            <Navigation />
            <h1 className="text-center">
                Liste des étudiants
            </h1>
            
            {students?.length?renderTable():null}


        </div>
    );
};

export default Liste;