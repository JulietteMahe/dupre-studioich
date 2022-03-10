import { useState, useEffect, useContext } from 'react';
import Axios from "axios";
import PrestaList from '../components/PrestaList';
import './Prestations.css';

const Prestations = (props) => {
    const [prestaList, setPrestaList] = useState([]);

    useEffect(() => {
        if (props.id) {
            Axios
                .get(`https://api.jsonbin.io/b/62294aae7caf5d678364846b`)
                .then((response) => setPrestaList(response.data))
                .catch(error => console.log(`API (presta) call error: ${error}`))
        } else {
            Axios
                .get("https://api.jsonbin.io/b/62294aae7caf5d678364846b")
                .then((response) => setPrestaList(response.data))
                .catch(error => console.log(`API (presta) call error: ${error}`))
        }
    }, [])

    return (
        <div className={`${props.className} Prestations`}>
            {prestaList
                .map((presta, index) => (
                    <div className='Presta-unit' key={index}>
                        <PrestaList presta={presta} />
                    </div>
                ))}
        </div>
    )
}

export default Prestations;