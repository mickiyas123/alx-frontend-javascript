import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const objList = [];
  objList.push(new ClassRoom(19));
  objList.push(new ClassRoom(20));
  objList.push(new ClassRoom(34));

  return objList;
}
