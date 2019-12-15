import axios from 'axios';

const url = process.env.REACT_APP_DB_URL;

const fetchNotes = async () => {
    const res = await axios.get(`${url}/notes.json`);
    const payload = Object.keys(res.data).map((key => ({
        ...res.data[key],
        id: key
    })));

    return ({ type: 'FETCH_NOTES', payload});
}
export default fetchNotes;

