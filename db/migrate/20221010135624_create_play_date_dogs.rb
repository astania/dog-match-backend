class CreatePlayDateDogs < ActiveRecord::Migration[7.0]
  def change
    create_table :play_date_dogs do |t|
      t.integer :dog_id
      t.integer :requested_dog_id
      t.integer :play_date_id

      t.timestamps
    end
  end
end
