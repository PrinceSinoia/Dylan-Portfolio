// import React from 'react'
// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://your-wordpress-site.com/graphql',
//   cache: new InMemoryCache(),
// });

// function Client() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Client


import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://your-wordpress-site.com/graphql',
  cache: new InMemoryCache(),
});

export default client;