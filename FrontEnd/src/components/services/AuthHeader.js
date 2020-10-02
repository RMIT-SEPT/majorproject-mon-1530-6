export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  //store the access token for each user
  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };

  } else {
    return {};
  }
}
