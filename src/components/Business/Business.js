import React from 'react';
import { Card, Flex } from "antd";
import styles from "./Business.module.css";

function Business({props}) {
   const { image_url, name, location, rating, review_count, categories } = props;
   const { Meta } = Card;

   // image banner
   const businessImg = (
      <img src={image_url} alt="Business Cover" className={styles.cardCover}/>
   );

   // business name
   const businessName = (
      <h1>{ name? name : "Name Undefined"}</h1>
   );

   // business info
   const businessInfo = (
      <ul className={styles.businessInfo}>
         <li>{ location.address1? location.address1 : "N/A" }</li>
         <li>
            { location.city? location.city : "N/A" },&nbsp;
            { location.state? location.state : "N/A"}
         </li>
         <li>
            { location.country? location.country : "N/A"}&nbsp;
            { location.zip_code? location.zip_code : "N/A"}
         </li>
      </ul>
   );

   // business category & rating
   const categoryRating = (
      <ul className={styles.businessRating}>
         <li className={styles.category}>
            { categories[0].title? categories[0].title : "Category Undefined" }
         </li>
         <li className={styles.rating}>
            { rating? `${rating} stars` : "Rating Undefined" }
         </li>
         <li>{ review_count? `${review_count} reviews` : "Review Count Undefined"}</li>
      </ul>
   );

   return (
      <Card hoverable
         cover={businessImg}
         className={styles.cardContainer}
      >
         <Meta
            title={businessName}
            description={
               <Flex justify='space-between'>
                  {businessInfo}
                  {categoryRating}
               </Flex>
            }
            className={styles.cardBody}
         />
      </Card>
   );
}

export default Business;