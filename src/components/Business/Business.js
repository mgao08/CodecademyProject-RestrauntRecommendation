import React from 'react';
import { Card, Col, Row } from "antd";

function Business({props}) {
   //    image_url: 'https://img.freepik.com/free-photo/fried-chicken-breast-with-vegetables_140725-4649.jpg?t=st=1738488623~exp=1738492223~hmac=91ed570712f5ff0b1193532b005119e58e113a0d99ff900bb1d62d3cdc3ce5c0&w=900',
   //    name: 'Stellar Bistro',
   //    location: {
   //       country: "US",
   //       display_address: ["No 3 Rd", "Olive street", "Galaxy City, BC 88888"]
   //    },
   //    categories: [
   //       {
   //          alias: "burgers",
   //          title: "Burgers"
   //       }
   //    ],
   //    rating: 4.3,
   //    review_count: 27

   const ulNoDot={
      "list-style-type": "none",
      "padding-left": 0,
   };


   // image banner
   const businessImg = (
      <img src={props.image_url} alt="Business Image" />
   );

   // business name
   const businessName = (
      <h1>{ props.name? props.name : "Name Undefined"}</h1>
   );

   // business info
   const businessInfo = (
      <ul style={ulNoDot}>
         <li>{ props.location.display_address[0]? props.location.display_address[0] : "Address Undefined" }</li>
         <li>{ props.location.display_address[1]? props.location.display_address[1] : "City Undefined" }</li>
         <li>{ props.location.display_address[2]? props.location.display_address[2] : "Zipcode Undefined"}</li>
      </ul>
   );

   // business category & rating
   const categoryRating = (
      <ul style={ulNoDot}>
         <li>{ props.categories[0].title? props.categories[0].title : "Category Undefined" }</li>
         <li>{ props.rating? `${props.rating} stars` : "Rating Undefined" }</li>
         <li>{ props.review_count? `${props.review_count} reviews` : "Review Count Undefined"}</li>
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