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

var __ = require('underscore');
var util = require('util');
var utils = require('../../../util/utils');
var resourceUtils = require('../resource/resourceUtils');
var tagUtils = require('../tag/tagUtils');
var $ = utils.getLocaleString;

function DnsZone(cli, dnsManagementClient) {
  this.cli = cli;
  this.dnsManagementClient = dnsManagementClient;
}

__.extend(DnsZone.prototype, {
  create: function (resourceGroupName, zoneName, params, _) {
    zoneName = utils.trimTrailingChar(zoneName, '.');
    var dnsZone = this.get(resourceGroupName, zoneName, _);
    if (dnsZone) {
      throw new Error(util.format($('A dns zone with name "%s" already exists in the resource group "%s"'), zoneName, resourceGroupName));
    }

    var zoneProfile = {
      zone: {
        properties: {},
        location: 'global'
      },
      ifNoneMatch: '*'
    };

    if (params.tags) {
      zoneProfile.zone.tags = tagUtils.buildTagsParameter(null, params);
    }

    var progress = this.cli.interaction.progress(util.format($('Creating dns zone "%s"'), zoneName));
    try {
      this.dnsManagementClient.zones.createOrUpdate(resourceGroupName, zoneName, zoneProfile, _);
    } finally {
      progress.end();
    }
    this.show(resourceGroupName, zoneName, params, _);
  },

  list: function (resourceGroupName, params, _) {
    var output = this.cli.output;
    var progress = this.cli.interaction.progress($('Getting the dns zones'));
    var dnsZones = null;

    try {
      dnsZones = this.dnsManagementClient.zones.list(resourceGroupName, _);
      var nextLink = dnsZones.nextLink;
      while (nextLink !== undefined) {
        output.silly('Following nextLink');
        var nextZones = this.dnsManagementClient.zones.listNext(nextLink, _);
        dnsZones.zones = dnsZones.zones.concat(nextZones.zones);
        nextLink = nextZones.nextLink;
      }
    } finally {
      progress.end();
    }

    this.cli.interaction.formatOutput(dnsZones.zones, function (outputData) {
      if (outputData.length === 0) {
        output.warn($('No dns zones found'));
      } else {
        output.table(outputData, function (row, item) {
          row.cell($('Name'), item.name);
          row.cell($('Location'), item.location);
          row.cell($('Type'), item.type);
        });
      }
    });
  },

  get: function (resourceGroupName, zoneName, _) {
    zoneName = utils.trimTrailingChar(zoneName, '.');
    var progress = this.cli.interaction.progress(util.format($('Looking up the dns zone "%s"'), zoneName));
    try {
      var dnsZone = this.dnsManagementClient.zones.get(resourceGroupName, zoneName, _);
      return dnsZone;
    } catch (e) {
      if (e.code === 'ResourceNotFound') {
        return null;
      }
      throw e;
    } finally {
      progress.end();
    }
  },

  set: function (resourceGroupName, zoneName, params, _) {
    zoneName = utils.trimTrailingChar(zoneName, '.');
    var dnsZone = this.get(resourceGroupName, zoneName, _);
    if (!dnsZone) {
      throw new Error(util.format($('A dns zone with name "%s" not found in the resource group "%s"'), zoneName, resourceGroupName));
    }

    if (params.tags) {
      var tags = tagUtils.buildTagsParameter(null, params);
      tagUtils.appendTags(dnsZone.zone, tags);
    }

    if (params.tags === false) {
      dnsZone.zone.tags = {};
    }

    this.update(resourceGroupName, zoneName, dnsZone, _);
    this.show(resourceGroupName, zoneName, params, _);
  },

  show: function (resourceGroupName, zoneName, params, _) {
    zoneName = utils.trimTrailingChar(zoneName, '.');
    var dnsZone = this.get(resourceGroupName, zoneName, _);
    var output = this.cli.output;
    var interaction = this.cli.interaction;

    if (dnsZone) {
      var resourceInfo = resourceUtils.getResourceInformation(dnsZone.zone.id);
      interaction.formatOutput(dnsZone.zone, function (zone) {
        output.data($('Id:                    '), zone.id);
        output.data($('Name:                  '), zone.name);
        output.data($('Type:                  '), resourceInfo.resourceType);
        output.data($('Location:              '), zone.location);
        output.data($('eTag:                  '), zone.eTag);
        output.data($('Number of record sets: '), zone.properties.numberOfRecordSets);
        if (!__.isEmpty(zone.tags)) {
          output.data($('Tags:                  '), tagUtils.getTagsInfo(zone.tags));
        }
      });
    } else {
      if (output.format().json) {
        output.json({});
      } else {
        output.warn(util.format($('A dns zone with name "%s" not found in the resource group "%s"'), zoneName, resourceGroupName));
      }
    }
  },

  delete: function (resourceGroupName, zoneName, params, _) {
    zoneName = utils.trimTrailingChar(zoneName, '.');
    var dnsZone = this.get(resourceGroupName, zoneName, _);
    if (!dnsZone) {
      throw new Error(util.format($('A dns zone with name "%s" not found in the resource group "%s"'), zoneName, resourceGroupName));
    }

    if (!params.quiet && !this.cli.interaction.confirm(util.format($('Delete dns zone "%s"? [y/n] '), zoneName), _)) {
      return;
    }

    var parameters = {
      ifMatch: dnsZone.zone.properties.eTag
    };

    var progress = this.cli.interaction.progress(util.format($('Deleting dns zone "%s"'), zoneName));
    try {
      this.dnsManagementClient.zones.deleteMethod(resourceGroupName, zoneName, parameters, _);
    } finally {
      progress.end();
    }
  },

  update: function (resourceGroupName, zoneName, zoneProfile, _) {
    zoneName = utils.trimTrailingChar(zoneName, '.');
    var progress = this.cli.interaction.progress(util.format($('Updating dns zone "%s"'), zoneName));
    try {
      this.dnsManagementClient.zones.createOrUpdate(resourceGroupName, zoneName, zoneProfile, _);
    } catch (e) {
      throw e;
    } finally {
      progress.end();
    }
  }
});

module.exports = DnsZone;