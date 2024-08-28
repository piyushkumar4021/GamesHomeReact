import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImages from "../services/get-cropped-images";

function GameCard({ game }) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImages(game.background_image)}></Image>
      <CardBody>
        <Heading letterSpacing={1} fontSize="2xl">
          {game.name}
        </Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}
export default GameCard;
