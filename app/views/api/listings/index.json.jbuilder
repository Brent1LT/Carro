@listings.each do |listing|
  json.partial! 'listing', listing: listing
end 