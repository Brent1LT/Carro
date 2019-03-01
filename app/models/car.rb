# == Schema Information
#
# Table name: cars
#
#  id           :bigint(8)        not null, primary key
#  make         :string           not null
#  model        :string           not null
#  trim         :string
#  description  :string           not null
#  year         :integer          not null
#  mpg          :integer          not null
#  num_of_seats :integer          not null
#  num_of_doors :integer          not null
#  transmission :boolean          not null
#  gas          :boolean          not null
#  listing_id   :integer          not null
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Car < ApplicationRecord
  validates :make, :model, :description, :year, :mpg, :num_of_seats, presence: true
  validates :num_of_doors, :transmission, :gas, presence: true

  belongs_to :listing,
  foreign_key: :listing_id,
  class_name: 'Listing'

  belongs_to :user,
  foreign_key: :user_id,
  class_name: 'User'
end
