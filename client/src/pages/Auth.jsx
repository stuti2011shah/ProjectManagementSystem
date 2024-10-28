import React, { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { Text, Heading, VStack, Image } from "@chakra-ui/react";
import { Login } from "../components/authentication/Login";
import { SignUp } from "../components/authentication/SignUp";
import logo from "../assests/logo.png";

export const Auth = () => {
	const [isLogin, setisLogin] = useState(true);

	return (
		<>
			<VStack mt={10}>
				<Image width="150px" src={logo} /> {/* Adjusted logo size */}
				<Heading as="h3" size="lg" fontWeight="semibold" color={"pink.500"}>
					Login to your account
				</Heading>
				<HStack spacing={2}>
					<Text color="gray">
						{isLogin ? "Don't have an account?" : "Already have an account?"}
					</Text>
					<Button
						variant="link"
						colorScheme="blue"
						onClick={() => setisLogin((prevValue) => !prevValue)}
					>
						{isLogin ? "Register" : "Login"}
					</Button>
				</HStack>

				{isLogin ? <Login /> : <SignUp />}
			</VStack>
		</>
	);
};
