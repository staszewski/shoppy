import React from 'react';
import { Row, Col } from 'antd';

const Footer = () => {
  return (
    <div className="footer">
      <Row>
          <Col xs={24}>
            <div className="footer__content">
                <p>Coded by Kamil Staszewski</p>
                <div className="footer__credit">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div>
            </div>
          </Col>
      </Row>
    </div>
  )
}

export default Footer
