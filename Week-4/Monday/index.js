//EXERCISE

const command = process.argv[2];
const params = process.argv.slice(3);
const ProductController = require('./controller/controller');

switch (command) {
    case 'help':
        ProductController.help();
        break;
    case 'list':
        ProductController.list();
        break;
    case 'add':
        ProductController.add(params);
        break;
    case 'update':
        ProductController.update(params);
        break;
    case 'delete':
        ProductController.delete(params);
        break;
    case 'complete':
        ProductController.complete(params);
        break;
    case 'uncomplete':
        ProductController.uncomplete(params);
        break;
    default:
        ProductController.message();
        break;    

}
