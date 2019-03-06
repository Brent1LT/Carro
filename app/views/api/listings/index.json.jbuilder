@listings.each do |listing|
  car = listing.car
  json.partial! 'listing', listing: listing, car: car
end 