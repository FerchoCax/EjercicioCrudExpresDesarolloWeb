import mysql from "mysql";

const conectar =  mysql.createConnection({
    host:'localhost',
    user:'usr_escuela',
    password:'usr_escuela1',
    database:'db_escuela'
});

conectar.connect(result =>{
    if(result){
	console.error('Error en la conexion'+ result)
	return;
    }
    console.log('Conexion exitosa ID:'+conectar.threadId);

})

export {conectar};
