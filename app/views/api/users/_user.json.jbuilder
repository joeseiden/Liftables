json.extract! user, :id, :username

json.articles do
  json.array! (user.articles) do |article|
    json.extract! article, :id, :title, :description
    json.images do
      json.array! (article.images) do |image|
        json.url image.url
      end
    end
  end
end
