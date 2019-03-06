# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demo = User.create!(
  email: 'demo@email.com',
  password: '12345678',
  firstname: 'demo',
  lastname: 'login'
)

brent = User.create!(
  email: 'brent@email.com',
  password: '12345678',
  firstname: 'Brent',
  lastname: 'Bumann'
)

listing1 = Listing.create!(
 guidelines: "no eating in the car plz",
 location: "San Francisco",
 extras: nil,
 trip_counter: 12,
 price: 57,
 user_id: brent[:id],
)

car1 = Car.create!(
  make: 'Chevy',
  model: 'Camaro',
  trim: '1LT',
  year: 2016,
  mpg: 18,
  gas: 'regular',
  num_of_doors: 2,
  num_of_seats: 4,
  transmission: 'manual',
  listing_id: listing1[:id],
  user_id: brent[:id],
  description: 'Build for speed!'
)

listing1.photos.attach(io: File.open("/Users/brentbumann/Downloads/IMG_0093.JPG"), filename: "camaro1.jpg")
listing1.photos.attach(io: File.open("/Users/brentbumann/Downloads/IMG_0087.JPG"), filename: "camaro2.jpg")
listing1.photos.attach(io: File.open("/Users/brentbumann/Downloads/IMG_0088.JPG"), filename: "camaro3.jpg")
listing1.photos.attach(io: File.open("/Users/brentbumann/Downloads/IMG_0091.JPG"), filename: "camaro4.jpg")
listing1.photos.attach(io: File.open("/Users/brentbumann/Downloads/IMG_0126.JPG"), filename: "camaro5.jpg")
