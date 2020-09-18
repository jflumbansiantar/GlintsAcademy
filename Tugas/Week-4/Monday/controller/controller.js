//Product Controller

const Product = require('../model/model');
const View = require('../view/view');

class ProductController{
    static help (){
        const help = Product.help();
        View.help(help);
        // console.log(help)
    }
    static list(){
        const list = Product.list();
        View.list(list);
        console.log(list)
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
    static message(){
        View.message("Please input something.")
    }
}

module.exports = ProductController;
