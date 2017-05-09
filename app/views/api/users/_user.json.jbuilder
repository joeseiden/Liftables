json.extract! user, :id, :username

json.articles do
  json.array! (user.articles) do |article|
    json.extract! article, :id, :title, :description, :published
    json.images do
      json.array! (article.images) do |image|
        json.url image.url
      end
    end
    json.user do
      json.username user.username
    end
  end
end
