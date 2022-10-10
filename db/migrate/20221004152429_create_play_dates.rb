class CreatePlayDates < ActiveRecord::Migration[7.0]
  def change
    create_table :play_dates do |t|
      t.string :date
      t.string :time
      t.text :notes

      t.timestamps
    end
  end
end
