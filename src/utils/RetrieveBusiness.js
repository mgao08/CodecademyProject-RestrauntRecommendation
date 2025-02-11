// Yelp API info here
const yelpKey = "iIKdD6iBCJvSZ6kCi12m5sNWzK32t8YeS31pmrtGXE4bAInrqEhUf09clbA5OEQL0l6bs4hIV2xZ6mwDqtwHEFgmdvMumHB3p_GIMgDS6t4Ft-zykrtWjsQUz-SqZ3Yx";
const yelpBaseUrl = "https://api.yelp.com/v3/businesses/";

// Use only for CORS error
const corsAnywhereBaseUrl = "https://cors-anywhere.herokuapp.com/";

// Number of API calls per request
const fetchLimit = 6;

function RetrieveBusiness(searchTerms, location, sortByOption) {
   const forgeUrl = () => {
      const locationEndpoint = `location=${location}`;
      const termEndpoint = `term=${searchTerms}`;
      const sortEndpoint = `sort_by=${sortByOption}`;
      const limitEndpoint = `limit=${fetchLimit}`;
      const searchEndpoint = `search?${locationEndpoint}&${termEndpoint}&${sortEndpoint}&${limitEndpoint}`;
      const fullUrl = `${yelpBaseUrl}${searchEndpoint}&api_key=${yelpKey}`;

      // return fullUrl;                           // Normal API URL
      return `${corsAnywhereBaseUrl}${fullUrl}`;   // URL bypass CORS
   }

   const searchBusiness = async () => {
      const url = forgeUrl();
      const options = {
         method: 'GET',
         headers: {
            accept: 'application/json',
            authorization: `Bearer ${yelpKey}`
         }
      }

      try {
         const res = await fetch(url, options);
         if (res.ok) {
            let resJson = await res.json();
            return resJson.businesses;
         }
      } catch(error) {
         console.log(`From Yelp API searchBusiness: ${error}`);
      }
   }

   // return the fetched data here
   return searchBusiness();
}

export default RetrieveBusiness;