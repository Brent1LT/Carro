json.set! user.id do 
  json.extract! user, :id, :firstname, :lastname, :email
end 
