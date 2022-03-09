import { useState, useEffect, useContext } from 'react';
import Axios from "axios";
import EbookCard from '../components/EbookCard';
import './Ebooks.css';

const Ebooks = (props) => {
    const [ebookList, setEbookList] = useState([]);

    useEffect(() => {
        if (props.id) {
            Axios
                .get(`https://a.nacapi.com/sainstgram.posts?userid=${props.id}`)
                .then((response) => setEbookList(response.data))
                .catch(error => console.log(`API (ebooks) call error: ${error}`))
        } else {
            Axios
                .get("https://a.nacapi.com/sainstgram.posts")
                .then((response) => setEbookList(response.data))
                .catch(error => console.log(`API (ebooks) call error: ${error}`))
        }
    }, [])

    return (
        <div className={`${props.className} Ebooks`}>
            Ebooks
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