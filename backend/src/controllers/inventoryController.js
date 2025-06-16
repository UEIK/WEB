const Product = require('../models/Product');
const ProductSize = require('../models/ProductSize');
const Gallery = require('../models/Gallery');

const getInventory = async (req, res) => {
    try {
        let { page = 1, limit = 12, productId } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);
        const offset = (page - 1) * limit;

        const whereCondition = {};
        if (productId) {
            whereCondition.product_id = productId;
        }

        const totalCount = await ProductSize.count({ where: whereCondition });

        const sizes = await ProductSize.findAll({
            where: whereCondition,
            include: [
                {
                    model: Product,
                    attributes: ['name'],
                    include: [
                        {
                            model: Gallery,
                            attributes: ['thumbnail'],
                            required: false
                        }
                    ]
                }
            ],
            offset,
            limit
        });

        const inventoryData = sizes.map(size => ({
            size_id: size.id,
            product_id: size.product_id,
            product_name: size.Product?.name || "Unknown",
            product_image: size.Product?.Galleries?.[0]?.thumbnail || null,
            size: size.size,
            quantity: size.quantity
        }));

        res.json({
            data: inventoryData,
            totalPages: Math.ceil(totalCount / limit)
        });

    } catch (error) {
        console.error('❌ Error fetching inventory:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const updateInventory = async (req, res) => {
    try {
        const { size_id, quantity } = req.body;

        if (!size_id || quantity === undefined) {
            return res.status(400).json({ message: 'Missing size_id or quantity' });
        }

        const productSize = await ProductSize.findByPk(size_id);
        if (!productSize) {
            return res.status(404).json({ message: 'ProductSize not found' });
        }

        productSize.quantity = quantity;
        await productSize.save();

        res.json({ message: 'Inventory updated successfully' });

    } catch (error) {
        console.error('❌ Error updating inventory:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { getInventory, updateInventory };
