import { useRecoilValue } from "recoil";
import { homeIniState } from "./home.recoil";

const Home = () => {
  const homeValue = useRecoilValue(homeIniState(1000));
  console.log("homeValue:::", homeValue);

  return <div>Home</div>;
};
export default Home;
