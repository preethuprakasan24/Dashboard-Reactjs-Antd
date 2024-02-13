
import React from 'react';
import { Space, Button, Row, Col } from 'antd';
import './style.css';

const HomePage = () => {
    return (
        <div>
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="content">
                        <Row justify="center" align="middle">
                            <Col xs={4} lg={24}>
                                <Space direction="vertical" style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: '250px', }}>
                                    <h1>We offer modern solutions for growing your business</h1>
                                    <div className="text-center text-lg-start">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                    <div>
                                        <Button type="primary">Get Started</Button>
                                    </div>
                                </Space>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
