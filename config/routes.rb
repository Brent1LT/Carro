Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:create, :show, :update, :delete, :index]
  end
  root to: 'static_pages#root'
end
