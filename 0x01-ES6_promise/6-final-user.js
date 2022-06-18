import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo])
    .then((results) => {
      const resultArray = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          resultArray.push({ status: result.status, value: result.value });
        } else {
          resultArray.push({ status: result.status, value: `${result.reason}` });
        }
      });
      return resultArray;
    });
}
