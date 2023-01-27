import axios from "axios";

export const fetchSuperheroes = () => {
  return axios.get('http://localhost:4000/superheroes').then(({ data }) => data);
}

export const fetchSuperhero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroe/${heroId}`).then(({ data }) => data);

}

export const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheroes', hero)
}
