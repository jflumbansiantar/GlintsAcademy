class View {
    // static help (){
    //     const help = Product.help();
    //     View.help(help);
        // console.log(help)
    // }
    static list(data){
        data.forEach(el => {
            console.log(el)
        })
    }
    // static add(params){
    //     const result = Product.add(params);
    //     View.message(result);
    // }
    // static update(params){
    //     const result = Product.update(params);
    //     View.message(result);
    // }
    // static delete(params){
    //     const result = Product.delete(params);
    //     View.message(result);
    // }
    // static complete(params){
    //     const result = Product.complete(params);
    //     View.message(result);
    // }
    // static uncomplete(params){
    //     const result = Product.uncomplete(params);
    //     View.message(result);
    // }
    static message(){
        View.message("Please input something.")
    }
}

module.exports = View;