'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async insertProductIntoOrder(ctx) {
        const user = ctx.state.user;

        let order = await strapi.services.orders.findOne({ "users_permissions_user.id": user.id, status: "active" });
        if (!order) {
            order = await strapi.services.orders.create({ users_permissions_user: user, status: "active" });
        }

        let orderProductData = {
            ...ctx.request.body,
            order,
        };

        let orderProduct = await strapi.services['order-products'].findOne({ "order.id": order.id, "product.id": "productData.product.id" });
        let result;
        if (orderProduct) {
            result = await strapi.services['order-products'].update({ id: orderProduct.id }, orderProductData);
            return sanitizeEntity(result, { model: strapi.models['order-products'] });
        }
        result = await strapi.services['order-products'].create(orderProductData);
        return sanitizeEntity(result, { model: strapi.models['order-products'] });
    },
};
