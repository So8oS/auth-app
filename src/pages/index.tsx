import { type NextPage } from "next";
import Register from "../components/Register";



const Home: NextPage = () => {
  return (
    <div className="flex flex-col p-4 ">
      <Register/>
    </div>
  );
};

export default Home;
