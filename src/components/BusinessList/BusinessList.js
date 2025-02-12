import React from 'react';
import { Row, Col } from 'antd';
import Business from '../Business/Business.js';

function BusinessList(props) { // Pass in an array of props for Business
   const arrOfBusiness = props.props;

   return (
      <Row gutter={[70, 70]}>
         {arrOfBusiness.map((businessInfo, i) => {
            return (
               <Col className='gutter-row' xs={24} sm={24} md={12} lg={8} key={`col-${i}`}>
                  <Business props={businessInfo} key={`card-${i}`} />
               </Col>
            )
         })}
      </Row>
   );
}

export default BusinessList;