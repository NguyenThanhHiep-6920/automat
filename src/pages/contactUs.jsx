import {Card,Row} from  'react-bootstrap'
import avatar from '../images/avatar.jpg'
/**
 * Render page about contact infomation
 * @param {*} props 
 * @returns <Card> components
 */
const ContactUs=(props)=>{
    return(
        <>
        <p style={{paddingLeft: "10em"}}>
            <h2>Poděkování</h2>
            Chtěli bychom poděkovat všem učitelům, že nás učí, především prof. Dr. Ing. Alexandr Štefek, který nás tímto projektem provedl.
            <h2>Zpracovali:</h2>
        </p>
        <Row style={{paddingLeft: "10em"}}>
            <Card border="primary" style={{ width: '18rem'}}>
                <Card.Header as="h3">Student</Card.Header>
                <Card.Body>
                    <Card.Title>Nguyen Thanh Hiep</Card.Title>
                    <Card.Img width="100" height="200" src={avatar} />
                    <Card.Text>
                            Phone:
                            <br/>
                            Adress:
                            <br/>
                            Email:
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Group: 22-5-KB-C</small>
                </Card.Footer>
            </Card>
            <Card border="primary" style={{ width: '18rem'}}>
                <Card.Header as="h3">Student</Card.Header>
                <Card.Body>
                    <Card.Title>Dang Quy Tai</Card.Title>
                    <Card.Img width="100" height="200" src={avatar} />
                    <Card.Text>
                            Phone:
                            <br/>
                            Adress:
                            <br/>
                            Email:
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Group: 22-5-KB-C</small>
                </Card.Footer>
            </Card>
        </Row>
        </>
    );
}
export default ContactUs