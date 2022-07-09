import '../../styles/components/navbar.css';
import LocationMarkerDetails from './locationMarkerDetails.js';
import '../../styles/components/modal.css';
import {useSelector, useDispatch} from 'react-redux';
import { IsNavBarOpenClose, IsRightNavbarOpenClose } from '../../actions';

import { useAuth0 } from '@auth0/auth0-react';


const Navbar = () => {
    const dispatch = useDispatch();

    const ShowLoctionMarkerDetail = useSelector(state => state.locationMarkerDetail);
    const isCollapsed = useSelector(state => state.navbarOpenClose);

    const { user , isAuthenticated } = useAuth0();
    return <div className={isCollapsed ? "navbar-container navbar-container-collapsed" : "navbar-container navbar-container-expanded"}>
        {/* <div className='logo--name'>Event Maps</div> */}
        {
            isAuthenticated ? 
            <span>
                <strong><p className='user--desc'>Welcome,{user.name} </p></strong>
                <div>
                    <img src={user.picture} alt={user.name + "'s picture"}  className="user-profile-img" />
                </div>
                <button className='btn btn-success view--events' onClick={() => {
                    dispatch(IsRightNavbarOpenClose());
                    dispatch(IsNavBarOpenClose());
                    }}>
                    Manage my events
                </button>
            </span>
            : <strong><p className='user--desc'>Welcome to EventMaps. Please login to continue </p></strong>  
        }
        {ShowLoctionMarkerDetail ? <LocationMarkerDetails /> 
        : null}
    </div>
}

export default Navbar