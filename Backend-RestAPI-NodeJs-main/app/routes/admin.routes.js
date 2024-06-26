//utilisation d'express.js dans cette fichier
 module.exports = (app) => { 
    const admins = require('../controllers/admin.controller.js');

// Define routes for CRUD operations
    app.post('/admins', admins.create);

    
    app.get('/admins', admins.findAll);

   
    app.get('/admins/:adminId', admins.findOne);

    
    app.put('/admins/:adminId', admins.update);

    
    app.delete('/admins/:adminId', admins.delete);
}
