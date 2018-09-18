class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.references :coach, foreign_key: true
      t.references :post, foreign_key: true
      t.text :summary
      t.integer :rating, default: 0
      t.string :title

      t.timestamps
    end
  end
end
