import type { HttpContext } from '@adonisjs/core/http'
import Autor from '../models/autor.js'

export default class AutorsController {
  /**
   *Listar autores*/
  async index({}: HttpContext) {
    try{
      const  autores = await Autor.all();
      return autores;
    }catch(error){
      console.error('error', error)
      return {
        message: 'Error al obtener los autores',
        error: error.message,
      }
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    try{
      const data = request.only(['nombre', 'fecha_nacimiento']);
    const autor = await Autor.create(data);
    return autor;
  }catch(error){
    console.error('error', error)
    return {
      message: 'Error al crear el autor',
      error: error.message,
    }
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    try{
      const autor = await Autor.findOrFail(params.id);
      return autor;
    }catch(error){
      console.error('error', error)
      return {
        message: 'Error al obtener el autor',
        error: error.message,
      }
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    try{
      const autor = await Autor.findOrFail(params.id);
      const data = request.only(['nombre', 'fecha_nacimiento']);
      autor.merge(data);
      await autor.save();
      return autor;
    }catch(error){
      console.error('error', error)
      return {
        message: 'Error al actualizar el autor',
        error: error.message,
      }
    }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    try{
      const autor = await Autor.findOrFail(params.id);
      await autor.delete();
      return { message: 'Autor eliminado correctamente' };
    }catch(error){
      console.error('error', error)
      return {
        message: 'Error al eliminar el autor',
        error: error.message,
      }
    }
  }
}
