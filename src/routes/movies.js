const { Router } = require('express');
const mysqlConnection = require('../controllers/databases');

const router = Router();

router.get('/',(req, res)=>{
    mysqlConnection.query('SELECT * FROM movies',(error,rows,fields)=>{
        if(!error){
            res.json(rows);
        }else{
            console.log(error);
        }
    });
});

router.get('/:id',(req, res)=>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM movies WHERE id = ?',[id],(error, rows, fields)=>{
        if(!error){
            res.json(rows[0]);
        }else{
            console.log(error);
            res.status(500).json({status:"not could add",detail:error.sqlMessage});
        }
    });
});

router.post('/',(req, res)=>{
    const { id, titulo, direccion, pais, anio } = req.body;
    const query = 'CALL movieAddOrEdit(?,?,?,?,?,?)';

    mysqlConnection.query(query,[true, id, titulo, direccion, pais, anio],(error,rows,fields)=>{
        if(!error){
            res.json({status:"movie saved"});
        }else{
            console.log(error);
            res.status(500).json({status:"do not saved",detail:error.sqlMessage});
        }
    });
});

router.put('/',(req, res)=>{
    const { id, titulo, direccion, pais, anio } = req.body;
    const query = 'CALL movieAddOrEdit(?,?,?,?,?,?)';

    mysqlConnection.query(query,[false, id, titulo, direccion, pais, anio],(error,rows,fields)=>{
        if(!error){
            res.json({status:"movie updated"});
        }else{
            console.log(error);
            res.status(500).json({status:"do not updated",detail:error.sqlMessage});
        }
    });
});

router.delete('/:id',(req, res)=>{
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM movies WHERE id = ?',[id],(error, rows, fields)=>{
        if(!error){
            res.json({status:"movie deleted"});
        }else{
            console.log(error);
            res.status(500).json({status:"do not deleted",detail:error.sqlMessage});
        }
    });
});


module.exports = router; 