import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
const FormItem = Form.Item;

const SearchBars = ({ handleChange, handleSubmit }) => {
  return (
    <div className="searchbars">
      <Row>
          <Form layout="inline" >
            <Col xs={24} lg={19}>
              <FormItem>
                <Input placeholder="Username" />
              </FormItem>
            </Col>
          </Form>
      </Row>
    </div>
  )
}

export default SearchBars;  
