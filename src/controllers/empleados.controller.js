import EmpleadosSchema  from '../models/empleados.model.js';

let response = {
    msg: "",
    exito: false
}


// METODO PARA CREACION DE DATOS
export const create = ( req, res ) => {
    let empleado = new EmpleadosSchema({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })

    empleado.save( (err) => {
        if(err){
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El Empleado se gaurdo correctamente"
        res.json(response)
    })

}

// METODO PARA BUSCAR
export const find = ( req, res ) => {
    EmpleadosSchema.find( (err, empleados) => {
        if(err){
            console.log(err)
            response.exito = false,
            response.msg = "Error al buscar los empleados"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Empleados encontrados correctamente"
        res.json(empleados)
    })
}


//METODO PARA BUSCAR UNO
export const findOne = (req,res) => {
    EmpleadosSchema.findOne({
        _id: req.params.id
    }, (err, empleado) => {
        res.json(empleado)
    })
}


//METODO UPDATE
export const update = ( req, res ) => {
    let empleado = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    }

    EmpleadosSchema.findByIdAndUpdate({_id:req.params.id}, empleado, (err) => {
        if(err){
            console.log(err)
            response.exito = false
            response.msg = "Error al Actualizar Empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Empleado Actualizado Correctamente"
        res.json(response)
    })
}


//METODO REMOVE
export const remove = ( req, res ) => {
    EmpleadosSchema.findByIdAndRemove({_id:req.params.id}, (err) => {
        if(err){
            console.log(err)
            response.exito = false
            response.msg = "Error al Eliminar Empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Empleado Eliminado Correctamente"
        res.json(response)
    })
}