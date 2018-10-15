class CreateTips < ActiveRecord::Migration[5.2]
  def change
    create_table :tips do |t|
      t.references :review, foreign_key: true
      t.integer :timestamp
      t.text :comment
      t.string :helpfulness, default: [0, 0].to_yaml
      t.string :tags

      t.timestamps
    end
  end
end
