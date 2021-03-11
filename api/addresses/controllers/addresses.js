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
    },

    async updateMyAddress(ctx) {

        const { id } = ctx.state.user;
        let updateData = {
            ...ctx.request.body,
            'users_permissions_user':{ id },
        };

        let userAddress = await strapi.query('addresses').findOne({ "users_permissions_user.id": id });
        if (!userAddress) {
            userAddress = await strapi.query('addresses').create(updateData);
            return sanitizeEntity(userAddress, {model: strapi.models.addresses });
        }
        
        const addressId = userAddress.id;
        const entity = await strapi.query('addresses').update({ "id": addressId }, updateData);
        return sanitizeEntity(entity, {model: strapi.models.addresses });
    }
};
