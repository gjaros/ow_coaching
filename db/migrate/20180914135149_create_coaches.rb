class CreateCoaches < ActiveRecord::Migration[5.2]
  def change
    create_table :coaches do |t|
      t.references :profile, foreign_key: true
      t.integer :reputation, default: 0
      t.string :roles

      t.timestamps
    end
  end
end
