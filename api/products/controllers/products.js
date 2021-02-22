'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async searchbycategories(ctx) {
        const { categoryname } = ctx.query;
        let entity = await strapi.query('products').find({ "category.name": categoryname });
        
        return sanitizeEntity(entity, { model: strapi.models.products });
    },

    async recommendations(ctx) {
        const { slug } = ctx.params;
        let product = await strapi.query('products').findOne({ slug: slug });

        let entity = await strapi.query('products').find({ "category.name": product.category.name, _limit: 5 });
        return sanitizeEntity(entity, { model: strapi.models.products });
    },

    async search(ctx) {
        const { category, q, sort, priceLTE, priceGTE } = ctx.query;

        let entity;
        let query = {};
        if (sort) {
            query = Object.assign(query, {_sort: sort});
        }
        if (category) {
            query = Object.assign(query, {"category.name": category});
        }
        if (priceLTE) {
            query = Object.assign(query, {price_lte: priceLTE});
        }
        if (priceGTE) {
            query = Object.assign(query, {price_gte: priceGTE});
        }
        
        if (q) {
            query = Object.assign(query, {_q: q})
            entity = await strapi.query('products').search(query);
        } else {
            entity = await strapi.query('products').find(query)
        }

        return sanitizeEntity(entity, { model: strapi.models.products });
    }
};
