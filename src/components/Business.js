import React from 'react';

function Business(image, name, address, city, state, zipcode, category, rating, reviewCount) {


   // image banner
   const businessImg = (
      <img src={image} /* add styles here */ />
   );

   // business name
   const businessName = (
      <h1>{ name? name : "Name Undefined"}</h1>
   );

   // business info
   const businessInfo = (
      <ul>
         <li>{ address? address : "Address Undefined" }</li>
         <li>{ city? city : "City Undefined" }</li>
         <li>{ state? state : "State Undefined" }&emsp;{ zipcode? zipcode : "Zipcode Undefined"}</li>
      </ul>
   );

   // business category & rating
   const categoryRating = (
      <ul>
         <li>{ category? category : "Category Undefined" }</li>
         <li>{ rating? rating : "Rating Undefined" }</li>
         <li>{ reviewCount? reviewCount : "Review Count Undefined"}</li>
      </ul>
   );

   return (
      <>
         {businessImg}
         {businessName}
         {businessInfo}
         {categoryRating}
      </>
   );
}

export default Business;