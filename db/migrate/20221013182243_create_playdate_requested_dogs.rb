class CreatePlaydateRequestedDogs < ActiveRecord::Migration[7.0]
  def change
    create_table :playdate_requested_dogs do |t|
      t.integer :dog_id
      t.integer :playdate_id
      t.boolean :accepted

      t.timestamps
    end
  end
end
