# == Schema Information
#
# Table name: listings
#
#  id           :bigint(8)        not null, primary key
#  guidelines   :string           not null
#  location     :string           not null
#  extras       :text
#  trip_counter :integer          not null
#  price        :integer          not null
#  user_id      :integer          not null
#  car_id       :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
