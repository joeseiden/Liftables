json.extract! article, :id, :title, :description, :published
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

json.comments do
  json.array! (article.comments) do |comment|
    json.partial! 'api/comments/comment', comment: comment
  end
end
