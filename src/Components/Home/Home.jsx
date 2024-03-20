

import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading"? <h3>Loading...</h3>: <Outlet></Outlet>
            }
         
        </div>
    );
};


export default Home;