json.set! user.id do 
  json.extract! user, :id, :firstname, :lastname, :email
  if user.photo.attached?
      json.profile_picture url_for(user.photo)
    else
      json.profile_picture false
    end 
end 
