export function registerUser(user) {
  console.log('register', user);
  return {
    type: '@user/REGISTER',
    user,
  };
}

export function unregisterUser() {
  return {
    type: '@user/UNREGISTER',
  };
}

export function updateUser() {
  return {
    type: '@user/UPDATE',
  };
}
