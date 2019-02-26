json.set! user.id do 
  json.extract! user, :id, :username
end 

json.id user.id

