import { fetchCampaign } from '../http/campaignAPI'
import { useState, useEffect } from 'react'
import { Col, ListGroup, Row, Button, Card} from 'react-bootstrap'

function CampaignList() {
    const [campaign, setCampaign] = useState([])
    useEffect(() => {    
      fetchCampaign().then(data => setCampaign([...data]))
    }, [])

    return (   
      <Row className='justify-content-md-center'>   
        <Col md={3}>
          <ListGroup>
            {campaign.map(info =>
                <Card 
                  className="text-center mt-4"      
                  key={info.alphanumericId}
                >
                    <Card.Header>Owner</Card.Header>
                    <Card.Body>
                      <Card.Title>{info.name}</Card.Title>
                      <Card.Text>
                      {info.description}
                      </Card.Text>
                      <Button variant="primary">More details</Button>
                    </Card.Body>
                </Card>
            )}
          </ListGroup>
        </Col>
      </Row>      
    );
  }
  
  export default CampaignList;







    