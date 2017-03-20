json.extract! step, :id, :title, :body, :order

json.images do
  json.array! (step.images) do |image|
    json.url image.url
  end
end
