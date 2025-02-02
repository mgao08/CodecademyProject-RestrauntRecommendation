import React from 'react';
import { Card, Col, Row } from "antd";

function Business({props}) {

   const ulNoDot={
      "list-style-type": "none",
      "padding-left": 0,
   };


   // image banner
   const businessImg = (
      <img src={props.imageSrc} alt="Sample Business" />
   );

   // business name
   const businessName = (
      <h1>{ props.name? props.name : "Name Undefined"}</h1>
   );

   // business info
   const businessInfo = (
      <ul style={ulNoDot}>
         <li>{ props.address? props.address : "Address Undefined" }</li>
         <li>{ props.city? props.city : "City Undefined" }</li>
         <li>{ props.state? props.state : "State Undefined" }&emsp;{ props.zipcode? props.zipcode : "Zipcode Undefined"}</li>
      </ul>
   );

   // business category & rating
   const categoryRating = (
      <ul style={ulNoDot}>
         <li>{ props.category? props.category : "Category Undefined" }</li>
         <li>{ props.rating? `${props.rating} stars` : "Rating Undefined" }</li>
         <li>{ props.reviewCount? `${props.reviewCount} reviews` : "Review Count Undefined"}</li>
      </ul>
   );

   return (
      <Card
         cover={businessImg}
      >
         <Row>
            <Col span={24}>{businessName}</Col>
         </Row>
         <Row>
            <Col span={16}>
               {businessInfo}
            </Col>
            <Col span={8}>
               {categoryRating}
            </Col>
         </Row>
      </Card>
   );
}

export default Business;