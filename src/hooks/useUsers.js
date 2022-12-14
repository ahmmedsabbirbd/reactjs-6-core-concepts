import axios from "axios";
import { useEffect, useState } from "react"

const useUsers = ()=> {
    const [users, setUsers] = useState([]);

    useEffect( ()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data=> setUsers(data.data));
    }, [])

    return [users, setUsers];
}

export default useUsers;