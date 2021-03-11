'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async myAddress(ctx) {

        const { id } = ctx.state.user;
        let entity = await strapi.query('addresses').findOne({ "users_permissions_user.id": id });

        return sanitizeEntity(entity, {model: strapi.models.addresses });
    }
};
