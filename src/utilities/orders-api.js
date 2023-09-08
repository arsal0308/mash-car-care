import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// export function getCart() {
//   return sendRequest(`${BASE_URL}/cart`);
// }
export function getCart() {
  const response = sendRequest(`${BASE_URL}/cart`);
  console.log('getCart response= ', response)
  return response
}
export function addItemToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}
