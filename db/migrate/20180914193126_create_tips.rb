class CreateTips < ActiveRecord::Migration[5.2]
  def change
    create_table :tips do |t|
      t.references :review, foreign_key: true
      t.integer :timestamp
      t.text :comment
      t.integer :helpfulness
      t.string :tag

      t.timestamps
    end
  end
end
