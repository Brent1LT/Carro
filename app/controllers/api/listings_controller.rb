class Api::ListingsController < ApplicationController

  def create
    @listing = Listing.new(listing_params)
    @listing.user_id = current_user.id
    Listing.transaction do
      if @listing.save!
        @car = Car.new(car_params)
        @car.user_id = current_user.id
        @car.listing_id = @listing.id
        @car.save!
        @user = @listing.user
        render :create
      else 
        render json: @listing.errors.full_messages, status: 422
      end 
    end 
  end 

  def update
    @listing = Listing.find_by(id: params[:id])
    if @listing.update(listing_params)
      @user = @listing.user
      @car = @listing.car
      render :show
    else 
      render json: @listing.errors.full_messages, status: 422
    end
  end 
  
  def destroy
    @listing = Listing.find_by(id: params[:id])
    if @listing.destroy
      render json: {listingId: @listing.id}
    else 
      render json: @listing.errors.full_messages, status: 422
    end 
  end 

  def show
    @listing = Listing.find_by(id: params[:id])
    if @listing 
      @car = @listing.car
      @user = @listing.user
    end 
  end 
  
  def index
    @listings = Listing.all
  end 

  private 

  def listing_params
    params.require(:listing).permit(:guidelines, :trip_counter, :price, :location, :extras, photos: [])
  end 

  def car_params
    params.require(:car).permit(:make, :model, :year, :trim, :description, :mpg, :num_of_seats, :num_of_doors, :transmission, :gas)
  end
end
