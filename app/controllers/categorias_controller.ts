import type { HttpContext } from '@adonisjs/core/http'
import Categoria from '../models/categoria.js'

export default class CategoriasController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    try {
      const categorias = await Categoria.all();
      return categorias;
    } catch (error) {
      console.error('error', error);
      return {
        message: 'Error al obtener las categorias',
        error: error.message,
      };
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    try {
      const data = request.only(['nombre']);
      const categoria = await Categoria.create(data);
      return categoria;
    } catch (error) {
      console.error('error', error);
      return {
        message: 'Error al crear la categoria',
        error: error.message,
      };
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    try {
      const categoria = await Categoria.findOrFail(params.id);
      return categoria;
    } catch (error) {
      console.error('error', error);
      return {
        message: 'Error al obtener la categoria',
        error: error.message,
      };
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    try {
      const data = request.only(['nombre']);
      const categoria = await Categoria.findOrFail(params.id);
      categoria.merge(data);
      await categoria.save();
      return categoria;
    } catch (error) {
      console.error('error', error);
      return {
        message: 'Error al actualizar la categoria',
        error: error.message,
      };
    }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    try {
      const categoria = await Categoria.findOrFail(params.id);
      await categoria.delete();
      return {
        message: 'Categoria eliminada exitosamente',
      };
    } catch (error) {
      console.error('error', error);
      return {
        message: 'Error al eliminar la categoria',
        error: error.message,
      };
    }
  }
}
