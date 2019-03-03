class ChangeTransmissionToBeStringInCars < ActiveRecord::Migration[5.2]
  def change
    change_column :cars, :transmission, :string
    change_column :cars, :gas, :string
  end
end
