import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Categoria from './categoria.js'
import Autor from './autor.js'


export default class Libro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({columnName: 'titulo'})
  declare titulo: string

  @column({columnName: 'fecha_publicacion'})
  declare fechaPublicacion: Date

  @column({columnName: 'autor_id'})
  declare autorId: number

  @column({columnName: 'categoria_id'})
  declare categoriaId: number

 @belongsTo(() => Autor, {
    foreignKey: 'autor_id',
  })
  declare autor: BelongsTo<typeof Autor>


  @belongsTo(() => Categoria, {
    foreignKey: 'categoria_id',
  })
  declare categoria: BelongsTo<typeof Categoria>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
