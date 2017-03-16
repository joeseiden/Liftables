json.extract! article, :id, :title, :description, :image_url
json.user do
  json.partial! 'api/users/user', user: article.user
end
