/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AutorsController from '../app/controllers/autors_controller.js'
import CategoriasController from '../app/controllers/categorias_controller.js'
import LibrosController from '../app/controllers/libros_controller.js'


 // Autores
router.get('/autores', ([AutorsController,'index']))
router.post('/autores', ([AutorsController,'store']))
router.get('/autores/:id', ([AutorsController,'show']))
router.put('/autores/:id', ([AutorsController,'update']))
router.delete('/autores/:id', ([AutorsController,'destroy']))

// Categorias ok
router.get('/categorias', ([CategoriasController,'index']))
router.post('/categorias', ([CategoriasController,'store']))
router.get('/categorias/:id', ([CategoriasController,'show']))
router.put('/categorias/:id', ([CategoriasController,'update']))
router.delete('/categorias/:id', ([CategoriasController,'destroy']))

// Libros
router.get('/libros', ([LibrosController,'index']))
router.post('/libros', ([LibrosController,'store']))
router.get('/libros/:id', ([LibrosController,'show']))
router.put('/libros/:id', ([LibrosController,'update']))
router.delete('/libros/:id',([ LibrosController,'destroy']))

