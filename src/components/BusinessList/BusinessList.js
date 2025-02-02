import React from 'react';
import { Row, Col } from 'antd';
import Business from '../Business/Business.js';

function BusinessList(props) { // Pass in an array of props for Business
   // TODO: possible reformatting for data from API

   const arrOfBusiness = props.props;
   // props always passed as object, props.props points to the array
   // For .map() is not a function error, check if array has been unwrapped from object

   return (
      <Row
         gutter={{
            xs:8, sm:16, md:24, lg:32
            // set to a slightly larger number than col span for responsive padding
         }}
      >
         {arrOfBusiness.map((businessInfo, i) => {
            return (    // must return otherwise the function returns void & nothing rendered
               <Col className='gutter-row' xs={24} sm={24} md={12} lg={8}>
                  <Business props={businessInfo} key={i} />
               </Col>
            )
         })}
      </Row>
   );
}

export default BusinessList;