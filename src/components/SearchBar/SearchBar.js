import React from 'react';
import { Row, Col, Flex, Input } from 'antd';
import styles from './SearchBar.module.css';

function SearchBar(props) {   // must be an array of objects {key, label, children}
   // TODO: possible data formatting

   return (
      <>
         <div className={styles.titleBanner}><span>ravenous</span></div>
         <Flex vertical className={styles.searchInput}>
            <Row
               gutter={32}
               justify={'center'}
               className={styles.buttonGroup}
            >
               <Col sm={24} md={4}><button value='BestMatch' type='text'>Best Match</button></Col>
               <Col sm={24} md={4}><button value='HighestRated' type='text'>Highest Rated</button></Col>
               <Col sm={24} md={4}><button value='MostReviewed' type='text'>Most Reviewed</button></Col>
               <Col span={24}><hr className={styles.divider} /></Col>
            </Row>

            <Row justify={'center'} gutter={[24, 8]}>
               <Col md={16} lg={8}>
                  <Input size='large' placeholder='Search Business' />
               </Col>
               <Col md={16} lg={8}>
                  <Input size='large' placeholder='Where?' />
               </Col>
            </Row>
            <button size='large' className={styles.goButton}>Lets Go!</button>

         </Flex>
      </>
   );
}

export default SearchBar;