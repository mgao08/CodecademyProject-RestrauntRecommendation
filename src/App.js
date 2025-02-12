import { useState } from 'react';
import styles from './App.module.css';
import { ConfigProvider } from 'antd';

import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import RetrieveBusiness from './utils/RetrieveBusiness.js';

function App() {
   const sampleBusiness = {
      image_url: 'https://img.freepik.com/free-photo/fried-chicken-breast-with-vegetables_140725-4649.jpg?t=st=1738488623~exp=1738492223~hmac=91ed570712f5ff0b1193532b005119e58e113a0d99ff900bb1d62d3cdc3ce5c0&w=900',
      name: 'Stellar Bistro',
      location: {
         address1: "No 3 Rd",
         city: "Galaxy City",
         state: "VA",
         country: "US",
         zip_code: "88888"
      },
      categories: [
         {
            alias: "burgers",
            title: "Burgers"
         }
      ],
      rating: 4.3,
      review_count: 27
   };

   let sampleBusinessList = [];
   for (let i = 0; i < 8; i++) {
      sampleBusinessList.push(sampleBusiness);
   }

   // handle functions
   const [sortOption, setSortOption] = useState("best_match");
   const [businessName, setBusinessName] = useState("");
   const [businessLocation, setBusinessLocation] = useState("");

   const [infoList, setInfoList] = useState(sampleBusinessList);
   
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
         if(data) {
            console.log(data);   // TODO: remove after testing
            setInfoList(data);
         } else {
            console.log("data fetching failed, consider bad searching terms");
         }
      });
   }


   return (
      <ConfigProvider
         theme={{
            components: {
               Card: {
                  bodyPadding: 0,
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
            <BusinessList props={infoList}/>
         </div>
      </ConfigProvider>
   );
}

export default App;
