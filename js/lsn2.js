function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }

  return "You are a minor";
}

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}
