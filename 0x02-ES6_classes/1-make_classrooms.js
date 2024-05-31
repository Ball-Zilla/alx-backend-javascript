import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const newArray = [];
  newArray.push(new ClassRoom(19));
  newArray.push(new ClassRoom(20));
  newArray.push(new ClassRoom(34));

  return newArray;
}