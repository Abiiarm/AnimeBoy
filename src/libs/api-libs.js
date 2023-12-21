export const getAnimeResponse = async (resource, query) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);

    // Cek status response
    if (!response.ok && response.status === 429) {
      // Implementasikan backoff mechanism:
      const waitTime = calculateBackoffTime(attempts); // Fungsi untuk menghitung waktu tunggu
      await new Promise((resolve) => setTimeout(resolve, waitTime));
      return getAnimeResponse(resource, query, attempts + 1); // Coba request kembali
    }

    const anime = await response.json();

    // Cek apakah data anime tersedia
    if (!anime || !anime.data) {
      throw new Error("Data anime tidak ditemukan.");
    }

    return anime;
  } catch (error) {
    console.error("Error fetching anime data:", error);
    throw error;
  }
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  try {
    const response = await getAnimeResponse(resource);

    // Pastikan data.flatMap ada sebelum menggunakannya
    const nestedData = response.data?.flatMap((item) => item[objectProperty]);

    if (!nestedData) {
      throw new Error("Data nested anime tidak ditemukan.");
    }

    return nestedData;
  } catch (error) {
    console.error("Error fetching nested anime data:", error);
    throw error;
  }
};

// Fungsi reproduce tidak perlu revisi terkait error sebelumnya
export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
};
