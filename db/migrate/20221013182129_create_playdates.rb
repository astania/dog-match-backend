class CreatePlaydates < ActiveRecord::Migration[7.0]
  def change
    create_table :playdates do |t|
      t.string :date
      t.string :time
      t.text :notes
      t.integer :dog_id

      t.timestamps
    end
  end
end
