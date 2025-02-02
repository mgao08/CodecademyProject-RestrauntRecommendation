import React from 'react';
import { Row, Col, Flex, Tabs, Input, Button } from 'antd';
import styles from './SearchBar.module.css';

function SearchBar(props) {   // must be an array of objects {key, label, children}
   // TODO: possible data formatting
   const tabItems = props.props.map((item, i) => {
      return {
         key: i,
         label: item.label,
         children: item.content
      }
   });

   return (
      <>
         <div className={styles.titleBanner}>ravenous</div>
         <Flex vertical className={styles.searchInput}>
            <Tabs
               centered
               items={tabItems}
               className={styles.searchTab}
            />
            <Row justify={'center'} gutter={[24, 8]}>
               <Col md={16} lg={8}>
                  <Input size='large' placeholder='Search Business' />
               </Col>
               <Col md={16} lg={8}>
                  <Input size='large' placeholder='Where?' />
               </Col>
            </Row>
            <Button size='large' className={styles.Button}>Lets Go!</Button>

         </Flex>
      </>
   );
}

export default SearchBar;