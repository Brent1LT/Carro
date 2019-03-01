class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :make, null: false
      t.string :model, null: false
      t.string :trim
      t.string :description, null: false
      t.integer :year, null: false
      t.integer :mpg, null: false
      t.integer :num_of_seats, null: false
      t.integer :num_of_doors, null: false
      t.boolean :transmission, null: false
      t.boolean :gas, null: false
      t.integer :listing_id, null: false
      t.integer :user_id, null: false 
      t.timestamps
    end
    add_index :cars, :listing_id, unique: true
    add_index :cars, :user_id
    add_index :cars, :make
  end
end
