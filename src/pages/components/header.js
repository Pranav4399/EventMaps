import '../../styles/components/header.css';
import logo from '../../assets/logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import { IsLogged } from '../../actions';
import { useDispatch, useSelector} from 'react-redux';
import { IsNavBarOpenClose, IsRightNavbarOpenClose } from '../../actions';

const Header = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    const IsRightNavbarOpen = useSelector(state => state.rightNavbarOpenClose);

    if(isAuthenticated)
        dispatch(IsLogged());
    
    const ToggleNav = () => {
        if(IsRightNavbarOpen)
            dispatch(IsRightNavbarOpenClose());

        dispatch(IsNavBarOpenClose());
    }

    const isCollapsed = useSelector(state => state.navbarOpenClose);

    return <div className='header-container'>
        <div className="menu--button">
            <button className="openbtn" onClick={ToggleNav}>&#9776;</button>
        </div>
        <div className='meetmaps--logo'>
            {/* <img src={logo} alt="Meetmaps logo" /> */}
            <h2>EventMaps</h2>
        </div>
        <div className='header--links'>
            {
                isAuthenticated ? 
                    <button className='btn btn-danger logout--btn' onClick={() => logout()}>Logout</button>
                : <button className='btn btn-primary login--btn' onClick={() => loginWithRedirect()}>Login</button>  
            }
            
        </div>
    </div>
}

export default Header