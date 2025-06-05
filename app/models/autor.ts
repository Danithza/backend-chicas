import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Autor extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({columnName: 'nombre'})
  declare nombre: string

  @column({columnName: 'fecha_nacimiento'})
  declare fechaNacimiento: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
