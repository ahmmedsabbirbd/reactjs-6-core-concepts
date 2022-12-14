import { Link, Outlet } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';

const V1 = () => {
    const [users] = useUsers();

    return (
        <div>
            {
                users.map(user=> <Link key={user.id} to={`${user.id}`}>{user.id}</Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default V1;