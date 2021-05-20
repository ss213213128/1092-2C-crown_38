const Category = require('../../models/categoryModel_xx')

exports.fetchCategories = async() => {
    try{
        const [rows] = await Category.fetchAll();
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}
