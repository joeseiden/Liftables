json.extract! comment, :content

json.user do
  json.partial! 'api/users/user', user: comment.user
end
