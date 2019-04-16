Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:create, :show, :update, :destroy, :index] do 
      resources :bookings, only: :create
    end 
    resources :cars, only: [:create, :destroy]
    resources :bookings, only: [:destroy, :index]
  end
  root to: 'static_pages#root'
end
