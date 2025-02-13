import { useState } from 'react';
import styles from './App.module.css';
import { ConfigProvider } from 'antd';

import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import RetrieveBusiness from './utils/RetrieveBusiness.js';
import LoadingCardList from './components/LoadingCardList/LoadingCardList.js';

function App() {

   // handle functions
   const [sortOption, setSortOption] = useState("best_match");
   const [businessName, setBusinessName] = useState("");
   const [businessLocation, setBusinessLocation] = useState("");

   const [infoList, setInfoList] = useState();
   const [loading, setLoading] = useState(false);
   const [fetchNum, setFetchNum] = useState(6);
   
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
      setLoading(true);
      const result = RetrieveBusiness(businessName, businessLocation, sortOption, fetchNum);
      result.then(data => {   // extract data from Promise
         if(data) {
            setLoading(false);
            setInfoList(data);
         } else {
            console.log("Data fetching failed, consider bad searching terms");
         }
      });
   }


   return (
      <ConfigProvider
         theme={{
            components: {
               Card: {
                  bodyPadding: 12,
               }
            }
         }}
      >
         <SearchBar
            className={styles.searchBar}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
         />
      
         <div className={styles.businessList}  id="listHolder">
            {!loading? null : <LoadingCardList numOfCards={fetchNum} loading={loading} />}
            {infoList? <BusinessList props={infoList}/> : <h2 className={styles.hintText}>Search By Typing Business Name & Address Above</h2>}
         </div>
      </ConfigProvider>
   );
}

export default App;
