// import React from 'react';
// import { Provider } from 'react-redux';

// // Import Redux store from the file we created in /utils
// import store from './store';

// export default function StoreProvider(props) {
//   // Return the provider component provided by react-redux
//   return <Provider store={store} {...props} />;
// }

// import React, { createContext, useContext } from "react";
// import { useProductReducer } from './reducers'

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   }); //Copy over to Reducers

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
