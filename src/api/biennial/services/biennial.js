'use strict';

/**
 * biennial service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::biennial.biennial');
