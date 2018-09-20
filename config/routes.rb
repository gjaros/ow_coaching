Rails.application.routes.draw do
  resources :tips
  resources :posts
  resources :reviews
  resources :profiles
  devise_for :users

  root 'posts#index'
  get 'notes' => 'home#notes'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
