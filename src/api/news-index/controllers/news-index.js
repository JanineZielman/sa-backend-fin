'use strict';

/**
 *  news-index controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::news-index.news-index');
