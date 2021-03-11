'use strict';

 const { sanitizeEntity } = require('strapi-utils');
 
 const sanitizeUser = user =>
   sanitizeEntity(user, {
     model: strapi.query('user', 'users-permissions').model,
   });
 
 const formatError = error => [
   { messages: [{ id: error.id, message: error.message, field: error.field }] },
 ];
 

module.exports = {
    async updateUser(ctx) {
        const { id } = ctx.state.user;

        let updateData = {
            ...ctx.request.body,
        };

        const data = await strapi.plugins['users-permissions'].services.user.edit({ id }, updateData);

        ctx.send(sanitizeUser(data));
    },
};
