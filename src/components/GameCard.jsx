import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

function GameCard({ game }) {
  return (
    <Card overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
}
export default GameCard;
