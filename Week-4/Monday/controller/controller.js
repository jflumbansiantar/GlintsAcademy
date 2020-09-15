//Product Controller

const Product = require('../model/model');
const View = require('../view/view');

class ProductController{
    static help (){
        const help = Product.help();
        view.help(help);
    }
    static list(){
        const list = Product.list();
        View.list(list);
    }
    static add(params){
        const result = Product.add(params);
        View.message(result);
    }
    static update(params){
        const result = Product.update(params);
        View.message(result);
    }
    static delete(params){
        const result = Product.delete(params);
        View.message(result);
    }
    static complete(params){
        const result = Product.complete(params);
        View.message(result);
    }
    static uncomplete(params){
        const result = Product.uncomplete(params);
        View.message(result);
    }
}
console.log(ProductController)
// module.exports = ProductController;
