'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async myActiveOrder(ctx) {
        const user = ctx.state.user;

        let order = await strapi.services.orders.findOne({ "users_permissions_user.id": user.id, status: "active" });

        if (!order) {
            let entity = await strapi.services.orders.create({ users_permissions_user: user, status: "active" });
            return sanitizeEntity(entity, { model: strapi.models.orders });
        }

        return sanitizeEntity(order, { model: strapi.models.orders });
    },

    async syncMyOrder(ctx) {
        const user = ctx.state.user;

        let order = await strapi.services.orders.findOne({ "users_permissions_user.id": user.id, status: "active" });
        if (!order) {
            order = await strapi.services.orders.create({ users_permissions_user: user, status: "active" });
        }

        let { orderProducts } = ctx.request.body;
        if (orderProducts) {
            let i;
            for (i = 0; i < orderProducts.length; i++) {
                orderProducts[i].order = order.id;
                let orderProduct = await strapi.services['order-products'].findOne({ "product.id": orderProducts[i].id, variants: orderProducts[i].variants });
                if (!orderProduct)
                    strapi.services['order-products'].create(orderProducts[i]);
                else
                    strapi.services['order-products'].update({ id: orderProduct.id }, orderProducts[i]);
            }
        }
        order.order_products = orderProducts;

        return sanitizeEntity(order, { model: strapi.models.orders });
    },
};
