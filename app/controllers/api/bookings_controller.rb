class Api::BookingsController < ApplicationController
  MONTHS = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
  }

  def index
    @bookings = Booking.all
  end 

  def create
    start_dates = booking_params[:start_date].split(' ')
    end_dates = booking_params[:end_date].split(' ')
    start_month = MONTHS[start_dates[1].to_sym]
    end_month = MONTHS[end_dates[1].to_sym]
    start_date = create_date(start_dates, start_month)
    end_date = create_date(end_dates, end_month)
    debugger
    @booking = Booking.new(start_time: start_date, end_time: end_date)
    if(!@booking.is_valid?(params[:listing_id]))
      render json: "Overlap in booking schedule"
    else
      @booking.user_id = current_user.id
      @booking.listing_id = params[:listing_id].to_i
      if(@booking.save)
        # might need to change in jbuilder to have user id on outside of booking state
        render :create
      else 
        render json: @booking.errors.full_messages, status: 422
      end 
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

  def create_date(dates, month)
    result = dates[2..3].map {|el| el.to_i}
    start_date = DateTime.new(result[1], month, result[0])
  end 
end
