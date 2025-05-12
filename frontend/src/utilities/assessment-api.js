export async function getAssessments() {
  try {
    const response = await fetch("http://localhost:3000/assessment");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
