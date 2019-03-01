class Api::ListingsController < ApplicationController
  def create
    @listings = Listing.new(listing_params)
    if @listing.save
      render :show
    else 
      render json: @listing.errors.full_messages, status: 422
    end 
  end 

  def update
    @listing = Listing.find_by(id: params[:id])

    if @listing.update(listing_params)
      render :show
    else 
      render json: @listing.errors.full_messages, status: 422
    end
  end 
  
  def destroy
    @listing = Listing.find_by(id: params[:id])
    if @listing.destroy
      render :show
    else 
      render json: @listing.errors.full_messages, status: 422
    end 
  end 

  def show
    @listing = Listing.find_by(id: params[:id])
  end 
  
  def index
    @listings = Listing.all
  end 

  private 

  def listing_params
    params.require(:listings).permit(:guidelines, :trip_counter, :price, :car_id, :location, :extras)
  end 
end
