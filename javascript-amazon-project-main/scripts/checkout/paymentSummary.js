import {cart} from '../../data/cart';
import { getProduct } from '../../data/products';
import {getDeliveryOption} from '../../data/deliveryOptions.js';


export function renderPaymentSummary(){
    let productPriceCents = 0;
    let ShippingPriceCents = 0;

    cart.forEach((cartItem) => {
       const product = getProduct(cartItem.productId);
       productPriceCents += product.priceCents * cartItem.quantity;

       const deliveryOption = getDeliveryOption(cartItem.getDeliveryOptionId);
        ShippingPriceCents += deliveryOption.priceCents

    });
}