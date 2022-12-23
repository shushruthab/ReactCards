import axios from "axios";
import { useState } from "react"
import {v4 as uuid} from "uuid";

const useFlip = (initalstate) => {
    const [value, setValue] = useState(initalstate);

    const toggle = () => {
        setValue(value => !value);
    }

    return [value, toggle];
}


const useAxios = (url) => {
    const [values, setValues] = useState([]);

    async function getResponse (restOfUrl="") {
        url = restOfUrl ? `${url}${restOfUrl}` : url;
        let res = await axios.get(url);
        setValues(value => [...value, {...res.data, id: uuid()}])
    }

    return [values, getResponse];
}


export {
    useFlip,
    useAxios,
};
