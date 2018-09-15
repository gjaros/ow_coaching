class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.references :student, foreign_key: true
      t.boolean :reviewed
      t.string :title
      t.string :link
      t.integer :coachability

      t.timestamps
    end
  end
end
