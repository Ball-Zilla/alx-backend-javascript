import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;

// export async function handleProfileSignup() {
//   const photo = uploadPhoto();
//   const user = createUser();

//   try {
//     const res = await Promise.all([photo, user]);
//     console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
//   } catch {
//     console.log('Signup system offline');
//   }
// }