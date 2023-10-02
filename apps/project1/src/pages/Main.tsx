import { Card } from "../Component/Card";

const MainPage = () => {
  return (
    <>
      <Card {...dummy} />
    </>
  );
};

export default MainPage;

const dummy = {
  backgroundImg: "",
  logoImg: "",
  title: "testtesttesttesttesttesttesttesttesttesttesttest",
  subTitle:
    "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
  reward: 100,
  price: 10,
  tags: ["쉽다", "재밌다"],
  subscribe: false,
};
