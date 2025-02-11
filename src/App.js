import { useState } from 'react';
import styles from './App.module.css';

// import Business from './components/Business/Business.js';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import RetrieveBusiness from './utils/RetrieveBusiness.js';


function App() {
   const sampleBusiness = {
      //imageSrc, name, address, city, state, zipcode, category, rating, reviewCount
      imageSrc: 'https://img.freepik.com/free-photo/fried-chicken-breast-with-vegetables_140725-4649.jpg?t=st=1738488623~exp=1738492223~hmac=91ed570712f5ff0b1193532b005119e58e113a0d99ff900bb1d62d3cdc3ce5c0&w=900',
      name: 'Stellar Bistro',
      address: 'No. 88, Star Avenue',
      city: 'Galaxy City',
      state: 'Star Province',
      zipcode: '88888',
      category: 'Fusion',
      rating: '4.3',
      reviewCount: 27
   };

   const sampleBusinessList = [];
   for (let i = 0; i < 8; i++) {
      sampleBusinessList.push(sampleBusiness);
   }

   let businessList = [];

   // handle functions
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
         businessList = data;
         console.log(businessList);
      });
   }

   return (
      <>
         <SearchBar
            className={styles.searchBar}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
         />
      
         <div className={styles.businessList}>
            <BusinessList
               props={sampleBusinessList}
            />
         </div>
      </>
   );
}

export default App;
