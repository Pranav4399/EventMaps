import {Modal, Button} from 'react-bootstrap';
import '../../styles/components/modal.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetailsModal = (props) => {
    const {showModal, setShowModal, userEmail} = props;

    const [userDetails, setUserDetails] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:3000/events/'${userEmail}'`)
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
          alert(error);
      });
    },[]);
    
    return (
      <>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header>
            <Modal.Title>
              <h4>Your Events</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              userDetails.map((item, index) => (
                <div>{item.eventName}</div>
              ))
            }
          </Modal.Body>
        </Modal>
      </>
    );
  }

export default UserDetailsModal;