const APi_KEY = "d2011ab1ce2c5a0740f9e7141bf4e66c";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMedias = async (type) => {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/${type}/day?api_key=${APi_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};


export const getTopratedMedias = async (type) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/top_rated?api_key=${APi_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getPopularMedias = async (type) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/popular?api_key=${APi_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};
