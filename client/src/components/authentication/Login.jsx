import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	Input,
	Flex,
	FormErrorMessage,
	Alert,
	VStack,
	Heading,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { LoginData, LoginSchema } from "../../util/ValidationSchemas";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-service";
import MiscellaneousService from "../../services/miscellaneous-service";

export const Login = () => {
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
	const navigate = useNavigate();

	const onHandleFormSubmit = async (values) => {
		setError("");

		try {
			await AuthService.login(values);
			await MiscellaneousService.fetchInitialData();

			navigate("/projects");
			window.location.reload();
		} catch (error) {
			setError(error.response.data.message);
		}
	};

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Box
			w={["full", "md"]}
			p={[8, 10]}
			mt={[10]}
			mx="auto"
			borderRadius={10}
			boxShadow="md"
		>
			<VStack spacing={2} align="flex-start" w="full">
				<Heading as="h4" size="md" textAlign="justify">
					Login
				</Heading>
				<Formik
					initialValues={LoginData}
					validationSchema={LoginSchema}
					onSubmit={onHandleFormSubmit}
				>
					{({ errors, touched }) => (
						<Form style={{ width: "100%" }}>
							{error && (
								<Alert status="error" variant="left-accent" mb={2} fontSize="md">
									{error}
								</Alert>
							)}

							<FormControl isInvalid={errors.email && touched.email}>
								<FormLabel fontWeight="regular">Email</FormLabel>
								<Field as={Input} name="email" type="email" />
								<FormErrorMessage>{errors.email}</FormErrorMessage>
							</FormControl>

							<FormControl mt={4} isInvalid={errors.password && touched.password}>
								<FormLabel fontWeight="regular">Password</FormLabel>
								<InputGroup>
									<Field
										as={Input}
										name="password"
										type={showPassword ? "text" : "password"} // Toggle between text and password
									/>
									<InputRightElement width="4.5rem">
										<Button h="1.75rem" size="sm" onClick={toggleShowPassword}>
											{showPassword ? "Hide" : "Show"}
										</Button>
									</InputRightElement>
								</InputGroup>
								<FormErrorMessage>{errors.password}</FormErrorMessage>
							</FormControl>

							<Flex direction="row" justifyContent="space-between" mt={4}>
								<Checkbox colorScheme="blue">Remember me</Checkbox>
								<Button variant="link" fontWeight="semibold" colorScheme="blue">
									Forgot Password?
								</Button>
							</Flex>

							<Button colorScheme="blue" w="full" mt={8} type="submit">
								Login
							</Button>
						</Form>
					)}
				</Formik>
			</VStack>
		</Box>
	);
};
