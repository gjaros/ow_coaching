class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.references :user, foreign_key: true
      t.integer :platform
      t.integer :region
      t.string :tag
      t.integer :sr

      t.timestamps
    end
  end
end
