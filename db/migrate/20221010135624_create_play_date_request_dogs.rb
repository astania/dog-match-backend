class CreatePlayDateRequestDogs < ActiveRecord::Migration[7.0]
  def change
    create_table :play_date_request_dogs do |t|
      t.integer :requested_dog_id
      t.integer :play_date_id
      t.boolean :accepted

      t.timestamps
    end
  end
end
