class CreateDogs < ActiveRecord::Migration[7.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :breed
      t.integer :user_id
      t.string :profile_pic
      t.text :about_me

      t.timestamps
    end
  end
end
