class Api::CarsController < ApplicationController

  def create
    @car = Car.new(car_params)

    if @car.save 
      render :show
    else 
      render json: @car.errors.full_messages, status: 422
    end 
  end 

  def destroy
    @car = Car.find_by(id: params[:id])

    if @car.destroy 
      render :show
    else 
      render json: @car.errors.full_messages, status: 422
    end 
  end 

  private

  def car_params
    params.require(:car).permit(:make, :model, :year, :trim, :description, :mpg, :num_of_seats, :num_of_doors, :transmission, :gas, :listing_id, :user_id)
  end
end
