'use strict';

/**
 * news-index service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-index.news-index');
