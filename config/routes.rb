Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :articles, only: [:index, :show, :create, :destroy, :update] do
      resources :comments, only: [:index, :post, :delete]
      resources :steps, only: [:index, :show, :create, :destroy, :update]
    end
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
