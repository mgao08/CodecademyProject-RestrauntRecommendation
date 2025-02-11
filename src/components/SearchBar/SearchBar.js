import React, { useState } from 'react';
import { Row, Col, Flex, Input } from 'antd';
import styles from './SearchBar.module.css';
// import RetrieveBusiness from '../../utils/RetrieveBusiness.js';

function SearchBar({ handleChange, handleSubmit }) {

   /*
   const [sortOption, setSortOption] = useState("rating");
   const [businessName, setBusinessName] = useState("");
   const [businessLocation, setBusinessLocation] = useState("");

   const handleChange = ({ target }) => {
      const { name, value } = target;
      
      switch (name) {
         case 'sortOption':
            // Set visual effect for activated button
            const btns = document.querySelectorAll(`[name=${name}]`);
            btns.forEach(btn => btn.removeAttribute('aria-pressed'));
            target.setAttribute('aria-pressed', true);
            setSortOption(value);
            break;
         case 'businessName':
            setBusinessName(value);
            break;
         case 'businessLocation':
            setBusinessLocation(value);
            break;
         default:
            console.log(`ERROR: Unknown search filter ${name}`);
            break;
      }
   }

   const handleSubmit = () => {
      const result = RetrieveBusiness(businessName, businessLocation, sortOption);
      result.then(data => {   // extract data from Promise
         return data;
      });
   }
   */

   return (
      <>
         <div className={styles.titleBanner}><span>ravenous</span></div>
         <Flex vertical className={styles.searchInput}>
            <Row
               gutter={32}
               justify={'center'}
               className={styles.buttonGroup}
            >
               <Col sm={24} md={4}>
                  <button aria-pressed
                     name='sortOption'
                     value='best_match'
                     onClick={handleChange}
                     type='text'>
                        Best Match
                  </button>
               </Col>
               <Col sm={24} md={4}>
                  <button
                     name='sortOption'
                     value='rating'
                     onClick={handleChange}
                     type='text'>
                        Highest Rated
                  </button>
               </Col>
               <Col sm={24} md={4}>
                  <button
                     name='sortOption'
                     value='review_count'
                     onClick={handleChange}
                     type='text'>
                        Most Reviewed
                  </button>
               </Col>
               <Col span={24}><hr className={styles.divider} /></Col>
            </Row>

            <Row justify={'center'} gutter={[24, 8]}>
               <Col md={16} lg={8}>
                  <Input
                     name='businessName'
                     onChange={handleChange}
                     size='large'
                     placeholder='Search Business' />
               </Col>
               <Col md={16} lg={8}>
                  <Input
                     name='businessLocation'
                     onChange={handleChange}
                     size='large'
                     placeholder='Where?' />
               </Col>
            </Row>
            <button
               size='large'
               className={styles.goButton}
               onClick={handleSubmit}>
                  Lets Go!
            </button>

         </Flex>
      </>
   );
}

export default SearchBar;