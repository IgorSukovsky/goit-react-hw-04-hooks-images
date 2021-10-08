import axios from "axios";

const API_URL = "https://pixabay.com/api/";
const API_KEY = "21692958-f8cd542283124fe4ad278ec7e";

const getImage = (searchQuery, page) => {
  return axios
    .get(
      `${API_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getImage };
