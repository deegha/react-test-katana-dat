import * as apiConfig from './apiConfiguration'; 

class ProductApi{  
  static productDetails(id) {
    return fetch(apiConfig.HOST_URL+"/pd/products/"+id,{
      method: 'GET',
      headers : {
        'Authorization': apiConfig.ACCESS_TOKEN,
        'X-ebao-tenant-id': apiConfig.X_EBAO_TENT_ID
      }
    }).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ProductApi;  