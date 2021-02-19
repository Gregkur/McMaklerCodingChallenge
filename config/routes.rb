Rails.application.routes.draw do
  # Api endpoints
  namespace :api do
    namespace :v1 do
      get 'properties', to: 'properties#index'
      post 'properties/create'
    end
  end

  # Routing react to be a frontend for rails
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
