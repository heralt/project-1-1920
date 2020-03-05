export function search(parameter) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const baseUrl = 'https://zoeken.oba.nl/api/v1';
    const endPoint = '/search/?q=';
    const key = '03b058d877ec4276bb63dd1c6e1f3768';
    const detail = 'Default';
    const pageSize = '&pagesize=20';
    let page = '&page=1';
    let query = '';

    if(parameter){
        query = parameter;
    } else {
        query = 'special:all';
    }

    const url = `${cors}${baseUrl}${endPoint}${query}${pageSize}${page}&authorization=${key}&refine=true&detaillevel=${detail}&output=json`;
    return url;
}

export function getData(url) {
    return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err);
    })
}




// function fetchCall(url) {
//   // public="166270b1475823ac569dab2a55e8aa3a" secret="484253216f9014c8e418f243f9dafc63" description="OBA_api_1"
//   // const secret = '484253216f9014c8e418f243f9dafc63';    
//   // const config = {
//   //     headers: { 
//   //         Authorization: `Bearer ${secret}`,
//   //     },
//   //     // mode: 'no-cors'
//   // }

//   console.log("url : ", url);
//   try {
//     return fetch(url)
//      .then(response => {
//        if (!response.ok)   {
//          throw alert(Error(response.statusText + " To API "));
//        }
//        else{
//          console.log("responseJson", response);
//          return response.json();
//        }
//      })
//    } catch (err) {
//      console.error(err);
//    }
// }

// export function API(url){
//   return {
//     url: url,
//     fetchCall: () => fetchCall(url, {}) 
//   };
// }

// export function obaApi(endpoint, endpointParams, endpointParamsValue) {
//   const key = '166270b1475823ac569dab2a55e8aa3a';
//   const cors = 'https://cors-anywhere.herokuapp.com/';
//   const url = `${cors}https://zoeken.oba.nl/api/v1${endpoint}authorization=${key}${endpointParams}${endpointParamsValue}&output=json`;
//   return {
//     url: url,
//     fetchCall: () => fetchCall(url, {}),
//   };
// }


// //List of endpoints
// export const endpoints = {
//   search: '/search/?', //Allows the searching of the AquaBrowser using a query string, and to sort and filter the results.
//   details: '/details/?', //Allows the user to look up a single record using an id value.
//   refine: '/refine/?', //Gets the refine dimensions for a given rctx. This means that refine can only be done _after_ a search. The resulting rctx can be provided on the URL for this endpoint. If you don't provide an rctx, it will list the configured refine facet names.
//   schema: '/schema/?', //Returns a given RelaxNG schema file. Does not require authentication.
//   index: '/index/?', //Retrieves the entries of a specified index. Path is needed, /index/ is not an endpoint, /index/awards/ is for example. Special indexes 'format', 'language', 'targetaudience', 'readinglevel', 'type', are also available, these list the standardized names used in the site. When &lang= param is provided, translations also provided.
//   availability: '/availability/?', //Allows the user to return availability information based on an id/bibnet enrich id as returned by searching.
// }
// //List of endpoints
// export const endpointParameters = {
//   search: {
//       q: '&q=', // The query in AquaBrowser query syntax.
//       sortIndex: '&sort=',
//       sortValue: { // The key on which to sort.
//           relevance: 'relevance',
//           year: 'year',
//           title: 'title',
//           author: 'author',
//       },
//       refineIndex: '&refine=',
//       refineValue: { // Do not calculate refine facets for this query. Will provide quicker response.
//           true: 'true',
//           false: 'false'
//       },
//       dedupIndex: '&dedup=',
//       dedupValue: { // Enables or disables deduplication of search results (if supported by the current search provider).
//           true: 'true',
//           false: 'false',
//       },
//       detaillevelIndex: '&detaillevel=',
//       detaillevelValue: { 
//           Default: 'Default', // Mirrors site output
//           Minimum: 'Minimum', // Only title, author, cover, id
//           Basic: 'Basic', // Only very basic output, all that is needed for displaying result, nothing more (best perfomance)
//           Extended: 'Extended', // Output everything, even internal MARC representation. (worst performance)
//           Librarian: 'Librarian', // Display all info and interesting stuff for librarians / technical personnel
//       },
//   },
//   details: {
//       id: ''
//   }
// }
