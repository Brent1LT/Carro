class RemoveCarIdFromListings < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :car_id, :integer
  end
end
