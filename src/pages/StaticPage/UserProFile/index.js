import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card } from 'antd';

const { Meta } = Card;

class UserProfile extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} md={6}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Europe Street beat"
                            description="www.instagram.com"
                        />
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                </Col>
            </Row>
        );
    }
}

export default UserProfile;