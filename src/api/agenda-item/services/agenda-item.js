'use strict';

/**
 * agenda-item service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::agenda-item.agenda-item');
