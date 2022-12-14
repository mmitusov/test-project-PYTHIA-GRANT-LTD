import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { campaignDonation } from '../../http/campaignAPI'

const CreateDonation = ({currCampaign, show, onHide}) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const addDonation = () => {
    campaignDonation(currCampaign.name, name, price).then(data => {setName(''); setPrice(0);})
    onHide()
  }

  return (
    <Modal
    show={show}
    onHide={onHide}   
    size="lg"    
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {`${currCampaign.name} is currently: ${currCampaign.status}`}
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Form>
        <Form.Control 
          className='mt-3'
          placeholder='Your Name'
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
        <Form.Control 
          className='mt-3'
          placeholder='Amount'
          type='number'
          value={price}
          onChange={(e) => {setPrice(e.target.value)}}
        />
        <hr/>
      </Form>
    </Modal.Body>

    <Modal.Footer>
      <Button variant='outline-success' onClick={() => addDonation()}>Donate</Button>
      <Button variant='outline-danger' onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default CreateDonation