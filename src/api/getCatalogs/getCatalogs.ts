import { storeInstance } from '../index';


export const getCatalogs = async () => {
  const response = await storeInstance.get('/catalogs');

  console.log('response', response);
};
