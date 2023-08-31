# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.destroy_all
Listing.destroy_all
Car.destroy_all


brent = User.create!(
  email: 'brent@email.com',
  password: '12345678',
  firstname: 'Brent',
  lastname: 'Bumann'
)

demo = User.create!(
  email: 'demo@email.com',
  password: '12345678',
  firstname: 'demo',
  lastname: 'login'
)

dom = User.create!(
  email: 'toretto@email.com',
  password: '12345678',
  firstname: 'Dom',
  lastname: 'Toretto'
)

paul = User.create!(
  email: '2f2f@email.com',
  password: '12345678',
  firstname: 'Paul',
  lastname: 'Walker'
)


doc = User.create!(
  email: 'tothefuture@email.com',
  password: '12345678',
  firstname: 'Dr. Emmett',
  lastname: 'Brown'
)

flash = User.create!(
  email: 'flash@email.com',
  password: '12345678',
  firstname: 'Flash',
  lastname: 'Sloth'
)

batman = User.create!(
  email: 'thebat@email.com',
  password: '12345678',
  firstname: 'Bruce',
  lastname: 'Wayne'
)

shaggy = User.create!(
  email: 'zoinks@email.com',
  password: '12345678',
  firstname: 'Shaggy',
  lastname: 'Rogers'
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
  description: 'Built for speed!'
)


listing2 = Listing.create!(
 guidelines: "As per Turo's rules, the car must be returned in the same condition it was received (interior and exterior). We can bill you to have the car cleaned after drop off.",
 location: "San Francisco",
 extras: "Falcon Doors, GPS, Nav",
 trip_counter: 65,
 price: 89,
 user_id: demo[:id],
)

car2 = Car.create!(
  make: 'Tesla',
  model: 'Model-X',
  trim: nil,
  year: 2018,
  mpg: 999,
  gas: 'electric',
  num_of_doors: 4,
  num_of_seats: 8,
  transmission: 'automatic',
  listing_id: listing2[:id],
  user_id: demo[:id],
  description: 'Basically drives itself!'
)

listing3 = Listing.create!(
 guidelines: "Meant to be driven a quatermile at a time",
 location: "Los Angeles",
 extras: "Great for drag racing!",
 trip_counter: 123,
 price: 98,
 user_id: dom[:id],
)

car3 = Car.create!(
  make: 'Dodge',
  model: 'Charger',
  trim: "R/T",
  year: 1970,
  mpg: 3,
  gas: 'premium',
  num_of_doors: 2,
  num_of_seats: 2,
  transmission: 'manual',
  listing_id: listing3[:id],
  user_id: dom[:id],
  description: 'Enhanced to make sure you never lose a street race!'
)

listing4 = Listing.create!(
 guidelines: "Make sure you know the right timing to hit the nos!",
 location: "Los Angeles",
 extras: "Great for drag racing!",
 trip_counter: 107,
 price: 125,
 user_id: paul[:id],
)

car4 = Car.create!(
  make: 'Nissan',
  model: 'GTR',
  trim: 'R32',
  year: 1999,
  mpg: 8,
  gas: 'premium',
  num_of_doors: 2,
  num_of_seats: 2,
  transmission: 'manual',
  listing_id: listing4[:id],
  user_id: paul[:id],
  description: 'Enhanced to make sure you never lose a street race!'
)

listing5 = Listing.create!(
 guidelines: "Roads?!? Where we're going, we don't need roads.",
 location: "Los Angeles",
 extras: "Never any late fees with this car!",
 trip_counter: 208,
 price: 153,
 user_id: doc[:id],
)

car5 = Car.create!(
  make: 'DMC',
  model: 'DeLorean',
  trim: nil,
  year: 1983,
  mpg: 16,
  gas: 'regular',
  num_of_doors: 2,
  num_of_seats: 2,
  transmission: 'manual',
  listing_id: listing5[:id],
  user_id: doc[:id],
  description: 'I need you to go back with me!'
)

listing6 = Listing.create!(
 guidelines: "Any late return will lead to a late return fee according to Turo regulations",
 location: "Zootopia",
 extras: "What's the ruuuush?",
 trip_counter: 54,
 price: 200,
 user_id: flash[:id],
)

car6 = Car.create!(
  make: 'Lamborghini',
  model: 'Huracan',
  trim: nil,
  year: 2018,
  mpg: 12,
  gas: 'premium',
  num_of_doors: 2,
  num_of_seats: 2,
  transmission: 'automatic',
  listing_id: listing6[:id],
  user_id: flash[:id],
  description: 'Just your average, everyday driver'
)

listing7 = Listing.create!(
 guidelines: "Only to be used for fighting crime",
 location: "Zootopia",
 extras: "Where is he???!!",
 trip_counter: 65,
 price: 157,
 user_id: batman[:id],
)

car7 = Car.create!(
  make: 'Bat',
  model: 'Mobile',
  trim: nil,
  year: 2018,
  mpg: 12,
  gas: 'premium',
  num_of_doors: 2,
  num_of_seats: 1,
  transmission: 'automatic',
  listing_id: listing7[:id],
  user_id: batman[:id],
  description: 'Heavily armored, weaponized vehicle. Weapons are fully functional'
)

listing8 = Listing.create!(
 guidelines: "Like zoinks, bring her back with either a full tank of gas or some food!",
 location: "Hanna-Barbera",
 extras: nil,
 trip_counter: 40,
 price: 86,
 user_id: shaggy[:id],
)

car8 = Car.create!(
  make: 'Mystery',
  model: 'Machine',
  trim: nil,
  year: 1976,
  mpg: 12,
  gas: 'regular',
  num_of_doors: 3,
  num_of_seats: 6,
  transmission: 'automatic',
  listing_id: listing8[:id],
  user_id: shaggy[:id],
  description: 'Mean, green, mystery machine!'
)

listing1.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/Camaro1.JPG"), filename: "camaro1.jpg")
listing1.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/Camaro2.JPG"), filename: "camaro2.jpg")
listing1.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/Camaro3.JPG"), filename: "camaro3.jpg")
listing1.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/Camaro4.JPG"), filename: "camaro4.jpg")
listing1.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/Camaro5.JPG"), filename: "camaro5.jpg")

listing2.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/tesla1.jpg"), filename: "tesla1.jpg")
listing2.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/tesla2.jpeg"), filename: "tesla2.jpg")
listing2.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/tesla3.jpg"), filename: "tesla3.jpg")
listing2.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/tesla4.jpg"), filename: "tesla4.jpg")

listing3.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/1970chargerRT1.jpg"), filename: "charger1.jpg")
listing3.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/1970chargerRT2.jpg"), filename: "charger2.jpg")
listing3.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/1970chargerRT3.jpg"), filename: "charger3.jpg")

listing4.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/gtr1.jpg"), filename: "gtr1.jpg")
listing4.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/gtr2.jpg"), filename: "gtr2.jpg")
listing4.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/gtr3.jpg"), filename: "gtr3.jpg")

listing5.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/delorean1.png"), filename: "delorean1.jpg")
listing5.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/delorean2.jpg"), filename: "delorean2.jpg")
listing5.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/delorean3.jpg"), filename: "delorean3.jpg")

listing6.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/huracan1.jpg"), filename: "huracan1.jpg")
listing6.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/huracan2.jpg"), filename: "huracan2.jpg")
listing6.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/huracan3.jpg"), filename: "huracan3.jpg")
listing6.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/huracan4.jpg"), filename: "huracan4.jpg")
listing6.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/huracan5.jpg"), filename: "huracan5.jpg")

listing7.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/batmobile1.jpg"), filename: "batmobile1.jpg")
listing7.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/batmobile2.jpg"), filename: "batmobile2.jpg")
listing7.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/batmobile3.jpg"), filename: "batmobile3.jpg")
listing7.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/batmobile4.jpg"), filename: "batmobile4.jpg")

listing8.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/mysterymachine1.jpeg"), filename: "mysterymachine1.jpg")
listing8.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/mysterymachine2.JPG"), filename: "mysterymachine2.jpg")
listing8.photos.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/mysterymachine3.jpg"), filename: "mysterymachine3.jpg")


flash.photo.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/flashProfile.jpg"), filename: "flashprofile.jpg")
dom.photo.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/Dominic_Toretto_profile.jpg"), filename: "domprofile.jpg")
batman.photo.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/batman_profile.jpg"), filename: "batmanprofile.jpg")
doc.photo.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/doc_profile.jpg"), filename: "docprofile.jpg")
paul.photo.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/paul_walker_profile.jpg"), filename: "paulprofile.jpg")
shaggy.photo.attach(io: URI.open("https://carro-developer.s3.us-west-1.amazonaws.com/Seed+Photos/shaggy_profile.png"), filename: "shaggyprofile.jpg")

