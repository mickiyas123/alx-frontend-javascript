import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  // Promise.allSettled([user, photo]).then(messages => messages)
  return Promise.allSettled([user, photo])
    .then((result) => result);
}
