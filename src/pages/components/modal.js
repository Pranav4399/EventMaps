import {Modal, Button} from 'react-bootstrap';
import '../../styles/components/modal.css';

const LocationModal = (props) => {
    const {show, setShow, setChoice} = props;
  
    return (
      <>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header>
            <Modal.Title>
              <h4>Disclaimer For Location access</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <span className="modal-title font-bold">
                Welcome to EventMaps. We would like to request your location to center the map accrodingly 
                to your city. In the event that you don't wish to allow access, 
                Please close the popup and continue. Assuming that you concur, 
                this location will be stored in your browser's localStorage and the map will be
                centered based on that from next time.
              </span>
          </Modal.Body>
          <Modal.Footer>
            <Button className='btn btn-success' variant="secondary" onClick={() => {setChoice(true); setShow(false); localStorage.setItem('userChoice', true);}}>
              Agree
            </Button>
            <Button className='btn btn-danger' variant="secondary" onClick={() => {setChoice(false); setShow(false);}}>
              Disagree
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default LocationModal;