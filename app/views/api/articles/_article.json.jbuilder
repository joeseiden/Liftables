json.extract! article, :id, :title, :description
json.user do
  json.partial! 'api/users/user', user: article.user
end

json.images do
  json.array! (article.images) do |image|
    json.url image.url
  end
end

json.steps do
  json.array! (article.steps) do |step|
    json.partial! 'api/steps/step', step: step
  end
end
