class View {
    static list(data){
        data.forEach(el => {
            console.log(`${el.id}. ${el.task}`)
        })
    }
    static help(data){
        console.log(data)
    }
    static add(data){
        console.log(data)
    }
    static update(data){
        console.log(data)
    }
    static delete(data){
        console.log(data)
    }
    static complete(data){
        console.log(data)
    }
    static uncomplete(data){
        console.log(data)
    }
    static message(data){
        console.log(data)
    }
}

module.exports = View;