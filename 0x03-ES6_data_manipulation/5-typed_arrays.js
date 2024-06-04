export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const dataview = new DataView(new ArrayBuffer(length), 0, length);
  dataview.setInt8(position, value);
  return dataview;
}
