json.set! @user.id do 
  json.extract! @user, :id, :firstname, :lastname
end 

# json.id @user.id

