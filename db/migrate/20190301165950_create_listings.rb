class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :guidelines, null: false
      t.string :location, null: false
      t.text :extras
      t.integer :trip_counter, null: false
      t.integer :price, null: false
      t.integer :user_id, null: false
      t.integer :car_id, null: false
      t.timestamps
    end
    add_index :listings, :car_id, unique: true
    add_index :listings, :user_id
  end
end
