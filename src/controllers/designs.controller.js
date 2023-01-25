import Design from '../models/designs.model.js'

let response = {
    msg: "",
    exito: false
}


// METODO PARA CREACION DE DATOS
export const create = ( req, res ) => {

    let design = new Design({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        urlimg: req.body.urlimg
    })

    design.save( (err) => {
        if(err){
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar el Diseño"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El Diseño se gaurdo correctamente"
        //ESTADO 201 - CREATED
        res.status(201).json(response)
    })

}

// METODO PARA BUSCAR
export const find = ( req, res ) => {
    Design.find( (err, designs) => {
        res.json(designs)
    })
}


//METODO PARA BUSCAR UNO
export const findOne = ( req, res ) => {
    Design.findOne({
        _id: req.params.id
    }, (err, design) => {
        res.json(design)
    })
}


//METODO UPDATE
export const update = ( req, res ) => {
    let design = {
        design_id: req.body.design_id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        urlimg: req.body.urlimg
    }

    Design.findByIdAndUpdate(req.params.id, {$set: design}, (err) => {
        if(err){
            console.log(err)
            response.exito = false,
            response.msg = "Error al modificar el Diseño"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El Diseño se modifico correctamente"
        res.json(response)

    })
}


//METODO REMOVE
export const remove = ( req, res ) => {
    Design.findByIdAndRemove({_id:req.params.id}, (err) => {
        if(err){
            console.log(err)
            response.exito = false
            response.msg = "Error al Eliminar Diseño"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Diseño Eliminado Correctamente"
        res.json(response)
    })
}