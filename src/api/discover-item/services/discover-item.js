'use strict';

/**
 * discover-item service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::discover-item.discover-item');
