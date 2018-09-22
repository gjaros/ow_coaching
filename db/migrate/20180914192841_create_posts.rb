class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.references :profile, foreign_key: true
      t.string :title
      t.string :link
      t.string :coachability, default: '[0, 0]'

      t.timestamps
    end
  end
end
