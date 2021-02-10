'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        const { email } = ctx.request.body;

        let entity = await strapi.services.subscribers.findOne({ email: email });
        if (entity)
            return ctx.throw(422, 'Email already exists');
        
        if (ctx.is('multipart')) {
          const { data, files } = parseMultipartData(ctx);
          entity = await strapi.services.subscribers.create(data, { files });
        } else {
          entity = await strapi.services.subscribers.create(ctx.request.body);
        }
        return sanitizeEntity(entity, { model: strapi.models.subscribers });
    },
};
