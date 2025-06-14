const Cart = require("../models/Cart");
const CartItem = require("../models/CartItem");
const Product = require("../models/Product");
const Gallery = require('../models/Gallery');
const ProductSize = require("../models/ProductSize");

const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity, color, size } = req.body;

    if (!userId || !productId || !quantity) {
      return res.status(400).json({ error: "userId, productId, and quantity are required" });
    }

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const productSize = await ProductSize.findOne({
      where: { product_id: productId, size: size }
    });

    if (!productSize) {
      return res.status(400).json({ error: "Size không tồn tại cho sản phẩm này" });
    }

    let cart = await Cart.findOne({ where: { user_id: userId } });
    if (!cart) {
      cart = await Cart.create({ user_id: userId });
    }

    let cartItem = await CartItem.findOne({
      where: {
        cart_id: cart.id,
        product_id: productId,
        color: color || null,
        size: size || null,
      },
    });

    const existingCartQuantity = cartItem ? cartItem.quantity : 0;
    const totalDesiredQuantity = existingCartQuantity + quantity;

    if (totalDesiredQuantity > productSize.quantity) {
      return res.status(400).json({ error: `Số lượng trong kho không đủ. Hiện chỉ còn ${productSize.quantity} sản phẩm.` });
    }

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = await CartItem.create({
        cart_id: cart.id,
        product_id: productId,
        quantity,
        color: color || null,
        size: size || null,
      });
    }

    res.status(200).json({ message: "Product added to cart successfully", cartItem });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Failed to add product to cart" });
  }
};

const getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOne({
      where: { user_id: userId },
      include: [
        {
          model: CartItem,
          include: [
            {
              model: Product,
              attributes: ["id", "name", "price"],
              required: false,
              include: [
                {
                  model: Gallery,
                  attributes: ["thumbnail"],
                },
                {
                  model: ProductSize,
                  as: "Sizes",
                  attributes: ["size"],
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const cartItemsWithStatus = cart.CartItems.map((cartItem) => {
      const productExists = !!cartItem.Product;
      return {
        ...cartItem.toJSON(),
        productExists,
        error: productExists ? null : "Sản phẩm không tồn tại",
      };
    });

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { cartItemId } = req.params;
    const { quantity, size } = req.body;

    const cartItem = await CartItem.findByPk(cartItemId);
    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    //Fallback nếu size từ request chưa có, thì lấy từ cartItem
    const targetSize = size || cartItem.size;

    if (!targetSize) {
      return res.status(400).json({ error: "Size không xác định được" });
    }

    if (quantity !== undefined) {
      if (quantity < 1) {
        return res.status(400).json({ error: "Quantity must be at least 1" });
      }

      const productSize = await ProductSize.findOne({
        where: { product_id: cartItem.product_id, size: targetSize }
      });

      if (!productSize) {
        return res.status(400).json({ error: "Size không tồn tại trong kho" });
      }

      if (quantity > productSize.quantity) {
        return res.status(400).json({ error: `Số lượng trong kho không đủ. Hiện chỉ còn ${productSize.quantity} sản phẩm.` });
      }

      cartItem.quantity = quantity;
    }

    if (size !== undefined && size !== cartItem.size) {
      cartItem.size = size;
    }

    await cartItem.save();

    res.status(200).json({ message: "Cart item updated successfully", cartItem });
  } catch (error) {
    console.error("Error updating cart item:", error);
    res.status(500).json({ error: "Failed to update cart item" });
  }
};


const removeCartItem = async (req, res) => {
  try {
    const { cartItemId } = req.params;

    const cartItem = await CartItem.findByPk(cartItemId);
    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    await cartItem.destroy();

    res.status(200).json({ message: "Cart item removed successfully" });
  } catch (error) {
    console.error("Error removing cart item:", error);
    res.status(500).json({ error: "Failed to remove cart item" });
  }
};

module.exports = { addToCart, getCart, updateCartItem, removeCartItem };