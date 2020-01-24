const controller = require('../controllers/controller');
const path = require('path');

module.exports = app => {
    app.get('/ppets', controller.allPets);
    app.get('/ppets/:id', controller.onePet);
    app.post('/ppets', controller.createPet);
    app.put('/ppets/:id', controller.editPet);
    app.delete('/ppets/:id', controller.deletePet);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}