export function fetchImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '53252771-146265e1bedbafdc9d92a47ef';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
