import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(fileName);
  const upload = uploadPhoto(firstName, lastName);

  return Promise.all([signUp, upload])
    .then((values) => console.log(values)).catch(() => console.log());
}
