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
    }
};
