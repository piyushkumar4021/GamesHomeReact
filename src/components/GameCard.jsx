import { Card, Image, CardBody, Heading } from "@chakra-ui/react";

function GameCard({ game }) {
  return (
    <Card overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
export default GameCard;
