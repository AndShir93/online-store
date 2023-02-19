import * as React from 'react';
import { initializationApi } from './api/api';
import { fetchCatalogs, store } from './store/reducers';


const App: React.FC = () => {
  React.useEffect(() => {
    initializationApi();
    store.dispatch(fetchCatalogs());
  }, []);

  return (
    <>
    </>
  );
};

export default App;
