import { formatPrice } from './formatters'

export const sanitizeProduct = (product) => {
  return {
    ...product,
    price: formatPrice(product.price),
    original_price:
      product.original_price && formatPrice(product.original_price),
    thumbnail: product.thumbnail.replace('http', 'https'),
    installments: {
      ...product.installments,
      amount: formatPrice(product.installments.amount),
    },
  }
}
