const getAllProductsByCategoryId = db => async(id) => {
    const allProducts = await db('products').select('*')
    .where('id', function () {
        this
        .select('categories_products.products_id')
        .from('categories_products')
        .whereRaw('categories_products.products_id = products.id')
        .where('categories_id', id)
    });
    return allProducts
}

const getAllProductsStandard = db => async() => {
    const allProductsStandard = await db('products').select('*')
    return allProductsStandard
}

module.exports = {
    getAllProductsByCategoryId,
    getAllProductsStandard
}
