import styles from './App.module.css';

// import Business from './components/Business/Business.js';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';

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

   // console.log(sampleBusinessList);

   return (
      <>
         <SearchBar
            className={styles.searchBar}
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
