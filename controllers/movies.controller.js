const Movie = require('../models/movie.model')

exports.getMovies = (req,res) => {
    try{
        return res.status(200).json(
            {
                message: "Consulta de Peliculas"
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error al consultar Peliculas",
                data: error
            }
        );
    }
}

exports.getMovieById = (req,res) => {
    try{
        const movieId = req.params.movieId;
        return res.status(200).json(
            {
                message: "Consultando de Pelicula por ID: "+movieId
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error en consultar pelicula",
                data: error
            }
        );
    }
}

exports.newMovies = (req,res) => {
    try{
        const newMovie = req.body;
        return res.status(200).json(
            {
                message: "Pelicula creado",
                data: newMovie
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error al crear la pelicula",
                data: error
            }
        );
    }
}

exports.updateMovie = (req,res) => {
    try{
        const movieId = req.params.movieId;
        const newMovie = req.body;

        return res.status(201).json(
            {
                message: "Actualizar pelicula por ID: "+movieId,
                data: updateMovie
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error al actualizar",
                data: error
            }
        );
    }
}

exports.deleteMovie = (req,res) => {
    try{
        const movieId = req.params.movieId;
        return res.status(200).json(
            {
                message: "Película eliminada con ID: "+movieId
            }
        );
    }catch (error){
        return res.status(500).json(
            {
                message: "Error al eliminar pelicula",
                data: error
            }
        );
    }
}