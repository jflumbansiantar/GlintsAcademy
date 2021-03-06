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
        const help = ["List", "Add", "Update", "Delete", "Status"];
        return help;
        // console.log(help)
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
        //
        const tasks = this.list();
        const [task, status] = params;
        const nextId = tasks[tasks.length - 1].id + 1;
        
        const tempObject = {
            id : nextId,
            task : task,
            status : (status == 'true'),
            tag : [],
            created_at : new Date(),
            completed_at : null,
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
        tasks.forEach(element => {
            if(element.id === id){
                element.status = true;
                if(element.status === true){
                    element.completed_at = new Date();
                }
            }
        })
        // return tasks
        this.save(tasks);
        return `Id ${id} has been completed.`
    }
    static uncomplete(params){
        const tasks = this.list();
        const id = Number(params[0]);
        tasks.forEach(element => {
            if(element.id === id){
                element.status = false;
                if(element.status !== true){
                    element.completed_at = "null";
                }
            }
        })
        // return tasks
        this.save(tasks);
        return `Id ${id} has not completed yet.`
    }
    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    }
}

module.exports = modelProduct;






























/**
 * SIDE Notes
 * Function Complete dan Uncomplete terlalu ribet...
 * Blum bisa untuk DRY. Masih perlu banyak latihan lagi :(
 */