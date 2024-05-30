import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise]).then((res) => {
    const newArray = [];
    res.forEach((data) => {
      if (data.status === 'fulfilled') {
        newArray.push({
          status: data.status,
          value: data.value,
        });
      } else {
        newArray.push({
          status: data.status,
          value: `${data.reason}`,
        });
      }
    });
    return newArray;
  });
}
