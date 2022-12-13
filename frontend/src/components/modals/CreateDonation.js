import { Button, Dropdown, Form, Modal } from 'react-bootstrap'

const CreateDonation = ({show, onHide}) => {
  const donationType = ['active','successful','expired','fraud']
  return (
    <Modal
    show={show}
    onHide={onHide}   
    size="lg"    
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Add new donation
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        
        <div className='d-flex justify-content-around'>
          <Dropdown className='mt-3 mb-3'>
            <Dropdown.Toggle>{'Set campaign statuses'}</Dropdown.Toggle>
              <Dropdown.Menu>{donationType.map((type, i) => 
                <Dropdown.Item key={i}>
                  {type}
                </Dropdown.Item>
              )}</Dropdown.Menu>
          </Dropdown>
        </div>

        <Form.Control 
          className='mt-3'
          placeholder='Your Name'
        />
        <Form.Control 
          className='mt-3'
          placeholder='Amount'
          type='number'
        />

        <hr/>

      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant='outline-success' onClick={onHide}>Donate</Button>
      <Button variant='outline-danger' onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default CreateDonation