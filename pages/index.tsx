import { GetServerSidePropsContext } from "next";
import { services } from "../data";

const index = () => {
  return <div>Bye bye world</div>;
};

export default index;

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
