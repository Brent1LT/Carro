class Api::BookingsController < ApplicationController

  def index
    @bookings = Booking.all
  end 

  def create
    start_dates = booking_params[:start_date].split(',')
    end_dates = booking_params[:end_date].split(',')
    start_dates = start_dates.map {|el| el.to_i}
    start_date = DateTime.new(*start_dates)
    end_date = DateTime.new(*end_dates)
     
    @booking.user_id = current_user.id
    @booking.listing_id = params[:id]
    @booking = Booking.new(start_date: start_date, end_date: end_date)
    if(@booking.save)
      render :create
    else 
      render json: @booking.errors.full_messages, status: 422
    end 
  end 

  def destroy
    @booking = Booking.find_by(id: params[:id])
    if @booking.destroy
      render json: {bookingId: @booking.id}
    else 
      render json: @booking.errors.full_messages, status: 422
    end 
  end 

  private

  def booking_params
    # params[:booking][:start_date] ||= []
    # params[:booking][:end_date] ||= []

    params.require(:booking).permit(:start_date, :end_date)
  end 
end
