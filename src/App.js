import './App.css';

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
      category: 'Fusion Cuisine',
      rating: '4.3',
      reviewCount: 27
   };

   const sampleBusinessList = [];
   for (let i = 0; i < 8; i++) {
      sampleBusinessList.push(sampleBusiness);
   }

   const sampleItems = [
      {
         key: 1,
         label: 'Best Match',
         content: 'Best Match Contents'
      },
      {
         key: 2,
         label: 'Highest Rated',
         content: 'Highest Rated Content'
      },
      {
         key: 3,
         label: 'Most Reviewed',
         content: 'Most Reviewed Content'
      }
   ];

   // console.log(sampleBusinessList);

   return (
      <>
         <SearchBar props={sampleItems} />
      
         <BusinessList props={sampleBusinessList} />
      </>
   );
}

export default App;
