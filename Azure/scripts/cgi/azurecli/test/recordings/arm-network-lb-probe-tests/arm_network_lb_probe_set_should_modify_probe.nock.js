// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"54898330-3213-4b35-ab57-1c953bdfd5a0\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"54898330-3213-4b35-ab57-1c953bdfd5a0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"54898330-3213-4b35-ab57-1c953bdfd5a0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1670',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"54898330-3213-4b35-ab57-1c953bdfd5a0"',
  'x-ms-request-id': 'b31a5925-827a-46f4-87e2-8d09f0010e31',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31911',
  'x-ms-correlation-request-id': 'e3d5855e-29f2-4265-87da-338e365daaef',
  'x-ms-routing-request-id': 'EASTASIA:20150427T112413Z:e3d5855e-29f2-4265-87da-338e365daaef',
  date: 'Mon, 27 Apr 2015 11:24:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"54898330-3213-4b35-ab57-1c953bdfd5a0\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"54898330-3213-4b35-ab57-1c953bdfd5a0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"54898330-3213-4b35-ab57-1c953bdfd5a0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Http\",\r\n          \"port\": 80,\r\n          \"requestPath\": \"healthcheck.aspx\",\r\n          \"intervalInSeconds\": 5,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1670',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"54898330-3213-4b35-ab57-1c953bdfd5a0"',
  'x-ms-request-id': 'b31a5925-827a-46f4-87e2-8d09f0010e31',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31911',
  'x-ms-correlation-request-id': 'e3d5855e-29f2-4265-87da-338e365daaef',
  'x-ms-routing-request-id': 'EASTASIA:20150427T112413Z:e3d5855e-29f2-4265-87da-338e365daaef',
  date: 'Mon, 27 Apr 2015 11:24:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"3f5da4cb-39b1-47d2-ad44-1cc502ea27ec\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"3f5da4cb-39b1-47d2-ad44-1cc502ea27ec\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"3f5da4cb-39b1-47d2-ad44-1cc502ea27ec\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 66,\r\n          \"intervalInSeconds\": 10,\r\n          \"numberOfProbes\": 3\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1624',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0601bdc1-b072-4045-b13e-b32bda373c79',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0601bdc1-b072-4045-b13e-b32bda373c79?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1175',
  'x-ms-correlation-request-id': '5e58447c-7f10-42cc-971d-258177e1f4cd',
  'x-ms-routing-request-id': 'EASTASIA:20150427T112414Z:5e58447c-7f10-42cc-971d-258177e1f4cd',
  date: 'Mon, 27 Apr 2015 11:24:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"3f5da4cb-39b1-47d2-ad44-1cc502ea27ec\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"3f5da4cb-39b1-47d2-ad44-1cc502ea27ec\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"3f5da4cb-39b1-47d2-ad44-1cc502ea27ec\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 66,\r\n          \"intervalInSeconds\": 10,\r\n          \"numberOfProbes\": 3\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1624',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0601bdc1-b072-4045-b13e-b32bda373c79',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0601bdc1-b072-4045-b13e-b32bda373c79?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1175',
  'x-ms-correlation-request-id': '5e58447c-7f10-42cc-971d-258177e1f4cd',
  'x-ms-routing-request-id': 'EASTASIA:20150427T112414Z:5e58447c-7f10-42cc-971d-258177e1f4cd',
  date: 'Mon, 27 Apr 2015 11:24:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0601bdc1-b072-4045-b13e-b32bda373c79?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2babb010-786c-497e-9ded-6a815234e2b5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31910',
  'x-ms-correlation-request-id': 'fe8d30eb-5800-4243-9e90-fce6603e1bfa',
  'x-ms-routing-request-id': 'EASTASIA:20150427T112415Z:fe8d30eb-5800-4243-9e90-fce6603e1bfa',
  date: 'Mon, 27 Apr 2015 11:24:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0601bdc1-b072-4045-b13e-b32bda373c79?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2babb010-786c-497e-9ded-6a815234e2b5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31910',
  'x-ms-correlation-request-id': 'fe8d30eb-5800-4243-9e90-fce6603e1bfa',
  'x-ms-routing-request-id': 'EASTASIA:20150427T112415Z:fe8d30eb-5800-4243-9e90-fce6603e1bfa',
  date: 'Mon, 27 Apr 2015 11:24:15 GMT',
  connection: 'close' });
 return result; }]];