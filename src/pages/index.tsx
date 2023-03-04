import { type NextPage } from "next";
import Register from "../components/Register";



const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Register/>
    </div>
  );
};

export default Home;
