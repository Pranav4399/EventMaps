import '../../styles/components/navbar.css';
import LocationMarkerDetails from './locationMarkerDetails.js';
import {useSelector} from 'react-redux';

const Navbar = () => {

    const ShowLoctionMarkerDetail = useSelector(state => state.locationMarkerDetail);

    return <div className="navbar-container w-1/5 float-left relative">
        <h1 className="text-3xl font-bold underline">
            EventMaps logo comes here
        </h1>
        <p className="m-5">Welcome to EventMaps, A open source meetup.com alternative through maps</p>
        {ShowLoctionMarkerDetail ? <LocationMarkerDetails /> : null}
        <button onClick={() =>alert('Hello bro')} className="absolute bottom-0 left-0 w-full h-9 bg-slate-300">Login to post your event</button>
    </div>
}

export default Navbar