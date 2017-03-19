export const signup = user => (
  $.ajax({
    type: 'POST',
    url: 'api/users',
    data: { user }
  })
);

export const editAccount = user => (
  $.ajax({
    type: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user }
  })
);

export const deleteAccount = user => (
  $.ajax({
    type: 'DELETE',
    url: `api/users/${user.id}`
  })
);

export const login = user => (
  $.ajax({
    type: 'POST',
    url: 'api/session',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    type: 'DELETE',
    url: 'api/session'
  })
);
