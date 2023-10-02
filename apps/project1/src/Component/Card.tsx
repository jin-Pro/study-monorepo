import { Box, Typography4, Typography5, Typography6, Gap, Flex } from "ui";
import { classNames } from "utils";

type CardProps = {
  backgroundImg: string;
  logoImg: string;
  title: string;
  subTitle: string;
  reward: number;
  price: number;
  tags: string[];
  subscribe: boolean;
};

export function Card({
  backgroundImg,
  logoImg,
  title,
  subTitle,
  reward,
  price,
  tags,
  subscribe,
}: CardProps) {
  return (
    <Box width={285} height={364} borderRadius={12}>
      <Thumbnail
        backgroundImg={backgroundImg}
        logoImg={logoImg}
        price={price}
      />
      <Context
        title={title}
        subTitle={subTitle}
        reward={reward}
        tags={tags}
        subscribe={subscribe}
      />
    </Box>
  );
}

const Thumbnail = ({
  backgroundImg,
  logoImg,
  price,
}: Pick<CardProps, "backgroundImg" | "logoImg" | "price">) => {
  return (
    <Box
      width={285}
      height={165}
      className="relative rounded-t-xl"
      backgroundColor="white"
    >
      <img src={backgroundImg} alt="배경이미지" width={285} height={160} />
      <img
        src={logoImg}
        alt="로고이미지"
        className="absolute bottom-3 left-5"
      />
      <Typography5 className="absolute bottom-3 right-5">{price}</Typography5>
    </Box>
  );
};

const Context = ({
  title,
  subTitle,
  reward,
  tags,
  subscribe,
}: Pick<CardProps, "title" | "subTitle" | "reward" | "tags" | "subscribe">) => {
  return (
    <Flex
      col
      justify="between"
      className={classNames("pt-4 pb-5 px-5 rounded-b-xl")}
      backgroundColor="white"
      width={285}
      height={204}
    >
      <Box>
        <Typography4 clamp={1}>{title}</Typography4>
        <Gap marginTop={2} marginBottom={8}>
          <Typography6 clamp={1}>{subTitle}</Typography6>
        </Gap>
        <Typography5>{reward.toLocaleString("kr-KR")}</Typography5>
      </Box>
      <Flex justify="between">
        <Flex as="ul" className="space-x-[2px]">
          {tags.map((tag) => (
            <Typography6 key={tag}>#{tag}</Typography6>
          ))}
        </Flex>
        <button>{subscribe ? "unlike" : "like"} </button>
      </Flex>
    </Flex>
  );
};
