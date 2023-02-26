Rails.application.routes.draw do
  root to: 'pages#index'

  namespace :api do # API routes in our app, organize controllers
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all # all not pre-defined path in API will be redirected to index
end
