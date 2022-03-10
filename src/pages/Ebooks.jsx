import { useState, useEffect, useContext } from 'react';
import Axios from "axios";
import EbookCard from '../components/EbookCard';
import './Ebooks.css';

const Ebooks = (props) => {
    const [ebookList, setEbookList] = useState([]);

    useEffect(() => {
        if (props.id) {
            Axios
                .get(`https://api.jsonbin.io/b/62293e2da703bb67492711a1`)
                .then((response) => setEbookList(response.data))
                .catch(error => console.log(`API (ebooks) call error: ${error}`))
        } else {
            Axios
                .get("https://api.jsonbin.io/b/62293e2da703bb67492711a1")
                .then((response) => setEbookList(response.data))
                .catch(error => console.log(`API (ebooks) call error: ${error}`))
        }
    }, [])

    return (
        <div className={`${props.className} Ebooks`}>
            {ebookList
                .map((ebook, index) => (
                    <div className='Ebooks-unit' key={index}>
                        <EbookCard ebook={ebook} />
                    </div>
                ))}
        </div>
    )
}

export default Ebooks;