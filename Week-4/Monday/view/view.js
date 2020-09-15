class View {
    static list(data){
        // console.log(data);
        data.forEach(element => {
            console.log(`${element.id}. [${element.tag}] ${element.task}`)
        }
            );
    }
    static message(data){
        console.log(data);
    }
}

module.exports = View;