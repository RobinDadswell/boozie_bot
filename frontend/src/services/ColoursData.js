export async function getAllColours() {
  try {
      const response = await fetch('http://localhost:3000/api/colours');
      return await response.json();
  }
  catch (error) {
      return [];
  }
}
