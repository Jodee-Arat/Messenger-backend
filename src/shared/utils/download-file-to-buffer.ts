export async function downloadFileToBuffer(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error download: ${response.status} ${response.statusText}`
      );
    }
    const buffer = await response.arrayBuffer();
    return buffer;
  } catch (error) {
    console.error("Error download:", error);
    throw error;
  }
}
