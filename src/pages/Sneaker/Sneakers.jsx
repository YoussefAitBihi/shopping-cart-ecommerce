import SneakerItem from "../../components/Sneaker/SneakerItem/SneakerItem";

const SneakersPage = () => {
  return (
    <ul className="sneakers-list" role="list">
      <li>
        <SneakerItem />
      </li>
      <li>
        <SneakerItem />
      </li>
      <li>
        <SneakerItem />
      </li>
      <li>
        <SneakerItem />
      </li>
    </ul>
  );
};

export default SneakersPage;
