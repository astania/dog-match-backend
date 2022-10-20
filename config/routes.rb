Rails.application.routes.draw do
  resources :playdate_requested_dogs
  resources :playdates
  
  resources :dogs, only: [:create, :show, :index, :destroy]

  resources :users, only: [:create, :destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/users/:id', to: 'users#show'
  
  get '/me', to: 'users#show'
  
  patch '/users/:id', to: 'users#update'

  patch 'dogs/:id', to: 'dogs#update'
  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
