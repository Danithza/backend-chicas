import type { HttpContext } from '@adonisjs/core/http'
import Libro from '../models/libro.js'

export default class LibrosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    try{
      const libros = await Libro.all();
      return libros;
    }catch(error){
      console.error('error', error)
      return {
        message: 'Error al obtener los libros',
        error: error.message,
      }
    }
  }
  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    try{
      const data = request.only(['titulo', 'fecha_publicacion', 'autor_id', 'categoria_id']);
    const libro = await Libro.create(data);
    return libro;
  }catch(error){
    console.error('error', error)
    return {
      message: 'Error al crear el libro',
      error: error.message,
    }
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    try{
      const libro = await Libro.findOrFail(params.id);
      return libro;
    }catch(error){
      console.error('error', error)
      return {
        message: 'Error al obtener el libro',
        error: error.message,
      }
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    try{
      const libro = await Libro.findOrFail(params.id);
      const data = request.only(['titulo', 'fecha_publicacion', 'autor_id', 'categoria_id']);
      libro.merge(data);
      await libro.save();
      return libro;
    }catch(error){
      console.error('error', error)
      return {
        message: 'Error al actualizar el libro',
        error: error.message,
      }
    }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    try{
      const libro = await Libro.findOrFail(params.id);
      await libro.delete();
      return libro;
    }catch(error){
      console.error('error', error)
      return {
        message: 'Error al eliminar el libro',
        error: error.message,
      }
    }
  }
}
