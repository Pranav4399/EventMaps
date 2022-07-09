import '../../styles/components/rightnavbar.css';
import {useSelector, useDispatch} from 'react-redux';
import { IsRightNavbarOpenClose } from '../../actions';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Collapse } from 'react-bootstrap';


const RightNavbar = () => {
    const isRightNavCollapsed = useSelector(state => state.rightNavbarOpenClose);
    const dispatch = useDispatch();

    const ToggleRightNav = () => {
      dispatch(IsRightNavbarOpenClose());
    }

    const deleteEvent = (eventId) => {
      axios
      .delete(`http://localhost:3000/events/${eventId}`, {
        headers :  {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
          alert("Event Deleted");
      })
      .catch((error) => {
          alert(error);
      });
    }

    const { user , isAuthenticated } = useAuth0();
    const [userDetails, setUserDetails] = useState([]);
    const [open, setOpen] = useState("");

    const handleToggle = key => {
      setOpen(open !== key.target.id ? key.target.id : null);
    }

    useEffect(() => {
      if(isAuthenticated){
        axios.get(`http://localhost:3000/events/'${user.email}'`)
          .then((response) => {
            setUserDetails(response.data);
            console.log(userDetails);
        })
        .catch((error) => {
              alert(error);
        });
      }
    },[isAuthenticated])

    return <div className={isRightNavCollapsed ? "right-navbar-container right-navbar-container-expanded"
                                               : "right-navbar-container right-navbar-container-collapsed"}>
              <div className="right--menu--button">
                  <button className="openbtn" onClick={ToggleRightNav}>&#215;</button>
              </div>
              {
                userDetails.map((item, index) => (
                  <div className='row userDetails--item' key={index}>
                    <h4>{item.eventName}</h4>
                    <p>{item.eventDate}</p>
                    <div>
                      <Button
                        id={"collapsible_" + index}
                        onClick={handleToggle}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className="uparrow btn btn-success"
                        >
                          	&#x25BC;
                      </Button>
                      <Collapse in={open === "collapsible_" + index}>
                        <div id="example-collapse-text">
                          {item.eventDescription}
                        </div>
                      </Collapse>
                      <button className='btn btn-warning' disabled>Edit</button>
                      <button className='btn btn-danger' style={{'margin' : '10px'}} onClick={() => deleteEvent(item._id)}>Delete</button>
                    </div>
                   
                  </div>
                ))
              }
            </div>
}

export default RightNavbar