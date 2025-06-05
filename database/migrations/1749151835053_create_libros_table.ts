import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'libros'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo').notNullable()
      table.integer('fecha_publicacion').notNullable()
      table.integer('autor_id').unsigned().references('id').inTable('autors')
      table.integer('categoria_id').unsigned().references('id').inTable('categorias')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
