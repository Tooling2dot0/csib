/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var should = require('should');
var util = require('util');
var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var testprefix = 'arm-cli-traffic-manager-endpoint-tests';
var groupPrefix = 'xplatTestGTMPECreate';
var groupName,
	location ,
	trafficMPPrefix = 'xplatTestTrafficMP' ,
	trafficMPEPrefix = 'xplatTestTrafficMPE' ;
	
var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'eastus'
}];
	

describe('arm', function () {
	describe('compute', function () {
		var suite, retry = 5;

		before(function (done) {
				suite = new CLITest(testprefix, requiredEnvironment);
				suite.setupSuite(function() {		  
				location = process.env.AZURE_VM_TEST_LOCATION;
				groupName =  suite.isMocked ? 'xplatTestGTMPCreate' : suite.generateId(groupPrefix, null);	  		  
				trafficMPPrefix =  suite.isMocked ? 'xplatTestTrafficMP' : suite.generateId(trafficMPPrefix, null);
				trafficMPEPrefix =  suite.isMocked ? 'xplatTestTrafficMPE' : suite.generateId(trafficMPEPrefix, null);
			
				done();
			});
		});
		after(function (done) {
			deleteUsedGroup(function() {
				suite.teardownSuite(done);
			});
		});
		beforeEach(function (done) {
		  suite.setupTest(done);
		});
		afterEach(function (done) {
		  suite.teardownTest(done);
		});

		describe(' network ', function () {
		
			
			
			it('create', function (done) {
				createGroup(function(){
					var cmd = util.format('network traffic-manager profile endpoint create %s %s %s %s --json', groupName, trafficMPPrefix, trafficMPEPrefix, location).split(' ');
					testUtils.executeCommand(suite, retry, cmd, function (result) {
						result.exitStatus.should.equal(0);
						done();
					});
				});
			});
			
			
			
			it('set', function (done) {
				var cmd = util.format('network traffic-manager profile endpoint set %s %s %s --json', groupName, trafficMPPrefix, trafficMPEPrefix).split(' ');
				testUtils.executeCommand(suite, retry, cmd, function (result) {
					result.exitStatus.should.equal(0);  
					var allResources = JSON.parse(result.text);
					allResources.name.should.equal(trafficMPPrefix);
					done();
				});
			});
			
			
			it('delete', function (done) {
				var cmd = util.format('network traffic-manager profile endpoint delete  %s %s %s --quiet', groupName, trafficMPPrefix, trafficMPEPrefix).split(' ');
				testUtils.executeCommand(suite, retry, cmd, function (result) {
					result.exitStatus.should.equal(0);
					done();
				});
			});
		  
		});
	
		function createGroup(callback) {
			var cmd = util.format('group create %s --location %s --json', groupName,location).split(' ');
			testUtils.executeCommand(suite, retry, cmd, function (result) {
			  result.exitStatus.should.equal(0);
			  callback();
			});
		}
		function deleteUsedGroup(callback) {
			if(!suite.isPlayback()) {
				var cmd = util.format('group delete %s --quiet', groupName).split(' ');
				testUtils.executeCommand(suite, retry, cmd, function (result) {
					result.exitStatus.should.equal(0);
					callback();
				});
			} else callback();
		}
		
	});
});