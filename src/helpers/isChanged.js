export default function isChanged(oldObject, newObject, prop) {
  return oldObject[prop] !== newObject[prop];
}
