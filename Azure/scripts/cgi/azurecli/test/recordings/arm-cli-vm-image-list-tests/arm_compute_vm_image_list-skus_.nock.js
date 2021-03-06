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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/publishers/a10networks/artifacttypes/vmimage/offers/a10-vthunder-adc/skus?api-version=2015-05-01-preview')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"vthunder_byol\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/a10networks/ArtifactTypes/VMImage/Offers/a10-vthunder-adc/Skus/vthunder_byol\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '269',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'aabc032f-f552-46d5-a81c-12e4e0f2c30d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31979',
  'x-ms-correlation-request-id': '8ef15ce5-b296-47a9-bc7d-3b3cc2ee24ae',
  'x-ms-routing-request-id': 'EASTASIA:20150427T150108Z:8ef15ce5-b296-47a9-bc7d-3b3cc2ee24ae',
  date: 'Mon, 27 Apr 2015 15:01:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/publishers/a10networks/artifacttypes/vmimage/offers/a10-vthunder-adc/skus?api-version=2015-05-01-preview')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"vthunder_byol\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/a10networks/ArtifactTypes/VMImage/Offers/a10-vthunder-adc/Skus/vthunder_byol\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '269',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'aabc032f-f552-46d5-a81c-12e4e0f2c30d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31979',
  'x-ms-correlation-request-id': '8ef15ce5-b296-47a9-bc7d-3b3cc2ee24ae',
  'x-ms-routing-request-id': 'EASTASIA:20150427T150108Z:8ef15ce5-b296-47a9-bc7d-3b3cc2ee24ae',
  date: 'Mon, 27 Apr 2015 15:01:08 GMT',
  connection: 'close' });
 return result; }]];