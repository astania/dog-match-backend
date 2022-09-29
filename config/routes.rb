Rails.application.routes.draw do
  resources :dogs, only: [:create, :show]

  resources :users, only: [:create, :destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  get '/me', to: 'users#show'
  
  patch '/users/:id', to: 'users#update'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
