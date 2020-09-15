//Model Product === Product

const fs = require('fs');

class modelProduct {
    constructor(id, task, status, tag, created_at, completed_at) {
        this.id = id;
        this.task = task;
        this.status = status;
        this.tag = tag;
        this.created_at = created_at;
        this.completed_at = completed_at;
    }
    static help (){
        
    }
    static list(){
        const data = fs.readFileSync('./data.json', 'utf-8');
        const parseData = JSON.parse(data);

        let tempData = [];
        parseData.forEach(data => {
            const {id, task, status, tag, created_at, completed_at} = data;
            tempData.push(new modelProduct(id, task, status, tag, created_at, completed_at))
        });
        return tempData;

    }
    static add(params){
        const tasks = this.list();
        const [task, status, tag, createdAt, completedAt] = params;
        const nextId = tasks[tasks.length - 1].id + 1;
        const createdAt = date1;
        let date1 = (new Date ()).toLocaleDateString().split("/");
        const completedAt = date2;
        let date2 = (new Date ()).toLocaleDateString().split("/");
        const tempObject = {
            id : nextId,
            task : task,
            status :status,
            tag : tag,
            created_at : createdAt,
            completed_at : completedAt,
        }
        tasks.push(tempObject);

        this.save(tasks);
        return `Task ${task} has been added.`
    }
    static update(params){
        const tasks = this.list();
        const id = Number(params[0]);
        const task = params[1];

        tasks.forEach(element => {
            if (element.id === id){
                element.task = task;
            }
        }
            );
        this.save(tasks);
        return `Id ${id} has been updated.`
    }
    static delete(params){
        const tasks = this.list();
        const id = Number(params[0]);

        const tempData = tasks.filter((element) => element.id !== id);
        this.save(tempData);
        return `Id ${id} has been deleted.`;
    }
    static complete(params){
        const tasks = this.list();
        const id = Number(params[0]);
        const completedAt = [];
        const uncomplete = [];

        tasks.forEach(element => {
            if (element[id].completedAt === true){
                completedAt.push(element[id]);
            } else {
                uncomplete.push(element[id]);
            }
        }
        )
    }
    static save(data){
        fs.writeFileSync('./data.json'. JSON.stringify(data, null, 2));
    }
}

module.exports = modelProduct;