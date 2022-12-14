import useUsers from '../../hooks/useUsers';
import User from '../User/User';

const Data = () => {
    const [ users ] = useUsers();

    return (
        <div>
            <h1>Data</h1>
            {
                users.map(user=> <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Data;