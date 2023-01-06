import React from "react";
import "../scss/WelcomeScreen.scss";
import ImageOne from "../images/imgOne.jpeg";
import ImageTwo from "../images/imgTwo.webp";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const WelcomeScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="welcomeContainer">
      <div className="topBar"></div>
      <div className="middleBar">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Unofficial_fan_made_Windows_XP_logo_variant.svg/2560px-Unofficial_fan_made_Windows_XP_logo_variant.svg.png"
            alt=""
          />
          <p>Click on a profile to continue</p>
        </div>
        <div className="line"></div>
        <div className="profiles">
          <div className="profile" onClick={onOpen}>
            <img src={ImageOne} alt="" />
            <p>Profile One</p>
          </div>

          <div className="profile">
            <img src={ImageTwo} alt="" />
            <p>Profile Two</p>
          </div>
        </div>
      </div>
      <div className="bottomBar">
        <div className="containerBottom">
          <div className="turnOffSection">
            <i class="fas fa-power-off"></i>
            <p>Turn Off Computer</p>
          </div>
          <div className="infoSection">
            <p>No Right Reserved.</p>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Admin Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input placeholder="Username" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" type="password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green">Login</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default WelcomeScreen;
