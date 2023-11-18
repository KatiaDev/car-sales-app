import React from "react";
import cars from "../cars";
import {
  Text,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  SimpleGrid,
  Badge,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'

const ShopCars = () => {
  return (
    <SimpleGrid columns={4} spacing={10} m={20}>
      {cars.map((car) => (
        <Card maxW="sm">
          <CardBody>
            <Image
              src={car.image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{car.name}</Heading>
              <List>
                <ListItem>
                  <Icon as={MdSettings} color="black.500"/>
                  Engine: {car.engine}
                </ListItem>
                <ListItem>
                  <Icon as={MdSettings} color="black.500"/>
                  Transmission: {car.transmission}
                </ListItem>
                <ListItem>
                  <Icon as={MdSettings} color="black.500"/>
                  Body Style: {car.bodyStyle}
                </ListItem>
                <ListItem>
                  <Icon as={MdSettings} color="black.500"/>
                  Mileage: {car.mileage}
                </ListItem>
                <ListItem>
                  <Icon as={MdSettings} color="black.500"/>
                  Fuel efficiency: {car.fuelEfficiency}
                </ListItem>
              </List>
              <Text>
                <Badge variant="subtle" colorScheme="purple">
                  Sale Price
                </Badge>
                <Text color="blue.600" fontSize="2xl">
                  ${car.price}
                </Text>
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Details
              </Button>
              <Button variant="ghost" colorScheme="blue">
                {car.phone}
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default ShopCars;
