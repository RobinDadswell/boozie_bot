export const getAllColours = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/colours');
    const json = await response.json();
    console.log(json);
  }
  catch (e) {
    console.log('We have the error', e);
  }
}
