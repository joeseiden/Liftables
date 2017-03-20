json.extract! article, :id, :title, :description
json.user do
  json.partial! 'api/users/user', user: article.user
end

json.images do
  json.array! (article.article_images) do |image|
    json.url image.url
  end
end
