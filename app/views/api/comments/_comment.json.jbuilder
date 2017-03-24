json.extract! comment, :id, :content

json.user do
  json.partial! 'api/users/user', user: comment.user
end
