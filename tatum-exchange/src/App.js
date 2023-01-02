const tatum = require('tatum-client-lib');
const algosdk = require('algosdk');

// Set up Tatum client
const tatumClient = tatum.ApiClient.instance;
tatumClient.basePath = 'https://api.tatum.io';
const apiKey = '0773365f-779a-4eb6-b69b-f5daa6956fc8_100';
const apiSecret = '';
const apiKeyAuth = new tatum.ApiKeyAuth('api_key', apiKey);
apiKeyAuth.apiKey = apiKey;
apiKeyAuth.apiKeyPrefix = 'api_key';
tatumClient.authentications['api_key'].apiKey = apiKey;
tatumClient.authentications['api_key'].apiKeyPrefix = 'api_key';

// Set up Algorand client
const algodClient = new algosdk.Algod(apiKey, apiSecret, 'https://testnet-algorand.api.tatum.io/v1');

// Fetch current block time
algodClient.status().then(function(status) {
  console.log(`Current block time: ${status.time}`);
}).catch(function(error) {
  console.error(error);
});

// Fetch list of open orders
tatumClient.orderApi.ordersGet({status: 'OPEN'}).then(function(orders) {
  console.log(`Number of open orders: ${orders.length}`);
}).catch(function(error) {
  console.error(error);
});
