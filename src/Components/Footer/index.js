import { Container, Row, Col } from 'react-bootstrap';
import { Typography } from 'antd';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
    return (
        <div className='footer-container'>
            <hr className='footer-line' /> {/* Line above the footer */}
            <Container>
                <Row className='Footer'>
                    {/* <Col xs={12} sm={4}>
                        <Typography.Link href="tel:+123456789" style={{ color: 'grey' }}>+123456789</Typography.Link>
                    </Col> */}
                    <Col xs={12} sm={4}>
                        <Typography.Link href="https://www.google.com" target="_blank" style={{ color: 'grey', }}>Privacy & Policy  | </Typography.Link>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Typography.Link href="https://www.google.com" target="_blank" style={{ color: 'grey', marginRight: 20, marginLeft: 12 }}>Terms of Use</Typography.Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;





