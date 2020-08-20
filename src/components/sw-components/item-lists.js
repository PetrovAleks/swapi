import ItemList from "../item-list/item-list";
import withData from "../hoc/with-data";
import SwapiService from "../SwapiService/SwapiService";

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const PersoneList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);

export { PersoneList, PlanetList, StarshipList };
