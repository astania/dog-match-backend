Rails.application.routes.draw do
  resources :playdate_requested_dogs, only: [:create, :destroy]

  resources :playdates, only: [:create, :destroy]
  
  resources :dogs, only: [:create, :show, :index, :destroy, :update]

  resources :users, only: [:create, :destroy, :update]

  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'
  
  get '/me', to: 'users#show'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
