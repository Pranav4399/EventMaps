import {Modal, Button} from 'react-bootstrap';
import '../../styles/components/modal.css';

const LocationModal = (props) => {
    const {show, setShow, setChoice} = props;
  
    return (
      <>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title><p className="modal-title font-bold">Welcome to EventMaps. We would like to know the city you're in to center the map accrodingly. 
              If you don't wish to agree, Please close the popup and proceed. If you agree, this city will also be stored in your browser's local storage for future instances</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {setChoice(true); setShow(false); localStorage.setItem('userChoice', true);}}>
              Agree
            </Button>
            <Button variant="secondary" onClick={() => {setChoice(false); setShow(false);}}>
              Disagree
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default LocationModal;