# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demo = User.create!(
  email: 'demo@email.com',
  password: 'password',
  firstname: 'demo',
  lastname: 'login'
)

listing1 = Listing.create!(
 guidelines: "no eating in the car plz",
 location: "here",
 extras: nil,
 trip_counter: 12,
 price: 57,
 user_id: demo[:id],
)

# listing.photos.attach(io: File.open("/Users/brentbumann/Downloads/IMG_0093.JPG"), filename: "camaro.jpg")