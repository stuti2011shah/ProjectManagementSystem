// import React, { useState } from "react";
// import { FiLayers, FiFileText, FiUser, FiMenu } from "react-icons/fi";
// import {
// 	Avatar,
// 	Button,
// 	Divider,
// 	Flex,
// 	Heading,
// 	IconButton,
// 	Image,
// 	Popover,
// 	PopoverArrow,
// 	PopoverBody,
// 	PopoverContent,
// 	PopoverTrigger,
// 	Text,
// 	useDisclosure,
// } from "@chakra-ui/react";
// import NavItem from "./NavItem";
// import { useLocation } from "react-router-dom";
// import AuthService from "../../services/auth-service";
// import MiscellaneousService from "../../services/miscellaneous-service";
// import UpdateUser from "../administration/UpdateUser";
// import logo from "../../assests/logo.png";
// import { Permissions } from "../../util/Utils";
// import { usePermissions } from "../../hooks/usePermissions";
// const Navbar = () => {
// 	const [navSize, setNavSize] = useState("large");
// 	const location = useLocation();
// 	const user = AuthService.getCurrentUser();
// 	const { isOpen, onOpen, onClose } = useDisclosure();
// 	const canManageOtherUsers = usePermissions(Permissions.canUpdateUserProfile);
// 	const canManageCustomFields = usePermissions(Permissions.canManageRole);

// 	const menuItems = [
// 		// {
// 		// 	path: "/dashboard",
// 		// 	name: "Dashboard",
// 		// 	icon: FiHome,
// 		// },
// 		{
// 			path: "/projects",
// 			name: "Projects",
// 			icon: FiLayers,
// 		},
// 		{
// 			path: "/tickets",
// 			name: "Tickets",
// 			icon: FiFileText,
// 		},
// 		{
// 			path: "/administration",
// 			name: "Administration",
// 			icon: FiUser,
// 		},
// 	];

// 	const onProfileClick = () => {
// 		onOpen();
// 	};

// 	return (
// 		<>
// 			<Flex
// 				pos="sticky"
// 				h="100vh"
// 				// boxShadow="lg"
// 				direction="column"
// 				justifyContent="space-between"
// 				w={navSize === "small" ? "75px" : "250px"}
// 				background="white"
// 				boxShadow="xl"
// 			>
// 				<Flex
// 					p={5}
// 					direction="column"
// 					alignItems={navSize === "small" ? "center" : "flex-start"}
// 					as="nav"
// 				>
// 					<Image src={logo} width="140px" />
// 					<IconButton
// 						background="none"
// 						mt={5}
// 						_hover={{
// 							background: "none",
// 						}}
// 						icon={<FiMenu />}
// 						onClick={() => {
// 							if (navSize === "small") setNavSize("large");
// 							else setNavSize("small");
// 						}}
// 					/>

// 					{menuItems.map((item, index) => {
// 						if (
// 							item.name === "Administration" &&
// 							!canManageOtherUsers &&
// 							!canManageCustomFields
// 						) {
// 							return <></>;
// 						}

// 						return (
// 							<NavItem
// 								key={index}
// 								navSize={navSize}
// 								icon={item.icon}
// 								name={item.name}
// 								path={item.path}
// 								active={
// 									location.pathname.includes(item.path) ||
// 									(item.path === "/dashboard" && location.pathname === "/")
// 								}
// 							/>
// 						);
// 					})}
// 				</Flex>

// 				<Flex p={5} direction="column" w="100%" alignItems="flex-start" mb={4}>
// 					<Divider
// 						borderColor="gray.300"
// 						display={navSize === "small" ? "none" : "flex"}
// 					/>

// 					<Popover placement="right-end">
// 						<PopoverTrigger>
// 							<Flex mt={4} align="center" cursor="pointer">
// 								<Avatar
// 									size="sm"
// 									name={user.firstName + " " + user.lastName}
// 									alignItems={navSize === "small" ? "center" : "flex-start"}
// 								/>
// 								<Flex
// 									direction="column"
// 									ml={4}
// 									display={navSize === "small" ? "none" : "flex"}
// 								>
// 									<Heading as="h3" size="xs">
// 										{user.firstName} {user.lastName}
// 									</Heading>
// 									<Text fontSize="sm">
// 										{MiscellaneousService.getRoleInfo(user.roleId).name ||
// 											"No Data"}
// 									</Text>
// 								</Flex>
// 							</Flex>
// 						</PopoverTrigger>

// 						<PopoverContent w="fit-content">
// 							<PopoverBody>
// 								<PopoverArrow />
// 								<Button variant="link" p={1} onClick={onProfileClick}>
// 									Profile
// 								</Button>
// 								<Divider />
// 								<Button
// 									variant="link"
// 									p={1}
// 									onClick={() => AuthService.logout()}
// 								>
// 									Logout
// 								</Button>
// 							</PopoverBody>
// 						</PopoverContent>
// 					</Popover>
// 				</Flex>
// 			</Flex>

// 			<UpdateUser
// 				isOpen={isOpen}
// 				closeModal={onClose}
// 				viewUser={user}
// 				isUpdateMyProfile={true}
// 			/>
// 		</>
// 	);
// };

// export default Navbar;
// // import React, { useState, useEffect } from "react";
// // import { FiLayers, FiFileText, FiUser, FiMenu, FiBell } from "react-icons/fi";
// // import {
// // 	Avatar,
// // 	Button,
// // 	Divider,
// // 	Flex,
// // 	Heading,
// // 	IconButton,
// // 	Image,
// // 	Popover,
// // 	PopoverArrow,
// // 	PopoverBody,
// // 	PopoverContent,
// // 	PopoverTrigger,
// // 	Text,
// // 	useDisclosure,
// // 	PopoverHeader,
// // 	PopoverCloseButton,
// // 	Badge,
// // } from "@chakra-ui/react";
// // import NavItem from "./NavItem";
// // import { useLocation } from "react-router-dom";
// // import AuthService from "../../services/auth-service";
// // import MiscellaneousService from "../../services/miscellaneous-service";
// // import UpdateUser from "../administration/UpdateUser";
// // import logo from "../../assests/logo.png";
// // import { Permissions } from "../../util/Utils";
// // import { usePermissions } from "../../hooks/usePermissions";

// // const Navbar = () => {
// // 	const [navSize, setNavSize] = useState("large");
// // 	const location = useLocation();
// // 	const user = AuthService.getCurrentUser();
// // 	const { isOpen, onOpen, onClose } = useDisclosure();
// // 	const canManageOtherUsers = usePermissions(Permissions.canUpdateUserProfile);
// // 	const canManageCustomFields = usePermissions(Permissions.canManageRole);
// // 	const [notifications, setNotifications] = useState([]);

// // 	// Fetch notifications from the backend
// // 	const fetchNotifications = async () => {
// // 		try {
// // 			const response = await fetch("/api/notifications");
// // 			const data = await response.json();
// // 			setNotifications(data);
// // 		} catch (error) {
// // 			console.error("Error fetching notifications:", error);
// // 		}
// // 	};

// // 	useEffect(() => {
// // 		// Fetch notifications when component mounts
// // 		fetchNotifications();
// // 	}, []);

// // 	const menuItems = [
// // 		{
// // 			path: "/projects",
// // 			name: "Projects",
// // 			icon: FiLayers,
// // 		},
// // 		{
// // 			path: "/tickets",
// // 			name: "Tickets",
// // 			icon: FiFileText,
// // 		},
// // 		{
// // 			path: "/administration",
// // 			name: "Administration",
// // 			icon: FiUser,
// // 		},
// // 	];

// // 	const onProfileClick = () => {
// // 		onOpen();
// // 	};

// // 	return (
// // 		<>
// // 			<Flex
// // 				pos="sticky"
// // 				h="100vh"
// // 				direction="column"
// // 				justifyContent="space-between"
// // 				w={navSize === "small" ? "75px" : "250px"}
// // 				background="white"
// // 				boxShadow="xl"
// // 			>
// // 				<Flex
// // 					p={5}
// // 					direction="column"
// // 					alignItems={navSize === "small" ? "center" : "flex-start"}
// // 					as="nav"
// // 				>
// // 					<Image width="150px" src={logo} />
// // 					<IconButton
// // 						background="none"
// // 						mt={5}
// // 						_hover={{
// // 							background: "none",
// // 						}}
// // 						icon={<FiMenu />}
// // 						onClick={() => {
// // 							if (navSize === "small") setNavSize("large");
// // 							else setNavSize("small");
// // 						}}
// // 					/>

// // 					{menuItems.map((item, index) => {
// // 						if (
// // 							item.name === "Administration" &&
// // 							!canManageOtherUsers &&
// // 							!canManageCustomFields
// // 						) {
// // 							return null;
// // 						}

// // 						return (
// // 							<NavItem
// // 								key={index}
// // 								navSize={navSize}
// // 								icon={item.icon}
// // 								name={item.name}
// // 								path={item.path}
// // 								active={
// // 									location.pathname.includes(item.path) ||
// // 									(item.path === "/dashboard" && location.pathname === "/")
// // 								}
// // 							/>
// // 						);
// // 					})}

// // 					{/* Notification Icon */}
// // 					<Popover>
// // 						<PopoverTrigger>
// // 							<IconButton
// // 								aria-label="Notifications"
// // 								icon={<FiBell />}
// // 								position="relative"
// // 								onClick={fetchNotifications}
// // 							/>
// // 						</PopoverTrigger>
// // 						<PopoverContent>
// // 							<PopoverArrow />
// // 							<PopoverCloseButton />
// // 							<PopoverHeader>Notifications</PopoverHeader>
// // 							<PopoverBody>
// // 								{notifications.length > 0 ? (
// // 									notifications.map((notification, index) => (
// // 										<Flex key={index} align="center" mb={2}>
// // 											<Badge colorScheme="green">{notification.type}</Badge>
// // 											<Text ml={2}>{notification.message}</Text>
// // 										</Flex>
// // 									))
// // 								) : (
// // 									<Text>No new notifications</Text>
// // 								)}
// // 							</PopoverBody>
// // 						</PopoverContent>
// // 					</Popover>
// // 				</Flex>

// // 				<Flex p={5} direction="column" w="100%" alignItems="flex-start" mb={4}>
// // 					<Divider
// // 						borderColor="gray.300"
// // 						display={navSize === "small" ? "none" : "flex"}
// // 					/>

// // 					<Popover placement="right-end">
// // 						<PopoverTrigger>
// // 							<Flex mt={4} align="center" cursor="pointer">
// // 								<Avatar
// // 									size="sm"
// // 									name={user.firstName + " " + user.lastName}
// // 									alignItems={navSize === "small" ? "center" : "flex-start"}
// // 								/>
// // 								<Flex
// // 									direction="column"
// // 									ml={4}
// // 									display={navSize === "small" ? "none" : "flex"}
// // 								>
// // 									<Heading as="h3" size="xs">
// // 										{user.firstName} {user.lastName}
// // 									</Heading>
// // 									<Text fontSize="sm">
// // 										{MiscellaneousService.getRoleInfo(user.roleId).name ||
// // 											"No Data"}
// // 									</Text>
// // 								</Flex>
// // 							</Flex>
// // 						</PopoverTrigger>

// // 						<PopoverContent w="fit-content">
// // 							<PopoverBody>
// // 								<PopoverArrow />
// // 								<Button variant="link" p={1} onClick={onProfileClick}>
// // 									Profile
// // 								</Button>
// // 								<Divider />
// // 								<Button
// // 									variant="link"
// // 									p={1}
// // 									onClick={() => AuthService.logout()}
// // 								>
// // 									Logout
// // 								</Button>
// // 							</PopoverBody>
// // 						</PopoverContent>
// // 					</Popover>
// // 				</Flex>
// // 			</Flex>

// // 			<UpdateUser
// // 				isOpen={isOpen}
// // 				closeModal={onClose}
// // 				viewUser={user}
// // 				isUpdateMyProfile={true}
// // 			/>
// // 		</>
// // 	);
// // };

// // export default Navbar;

// import React, { useState } from "react";
// import { FiLayers, FiFileText, FiUser, FiMenu, FiSun, FiMoon } from "react-icons/fi";
// import {
// 	Avatar,
// 	Button,
// 	Divider,
// 	Flex,
// 	Heading,
// 	IconButton,
// 	Image,
// 	Popover,
// 	PopoverArrow,
// 	PopoverBody,
// 	PopoverContent,
// 	PopoverTrigger,
// 	Text,
// 	useDisclosure,
// 	useColorMode,
// 	useColorModeValue,
// } from "@chakra-ui/react";
// import NavItem from "./NavItem";
// import { useLocation } from "react-router-dom";
// import AuthService from "../../services/auth-service";
// import MiscellaneousService from "../../services/miscellaneous-service";
// import UpdateUser from "../administration/UpdateUser";
// import logo from "../../assests/logo.png";
// import { Permissions } from "../../util/Utils";
// import { usePermissions } from "../../hooks/usePermissions";

// const Navbar = () => {
// 	const [navSize, setNavSize] = useState("large");
// 	const location = useLocation();
// 	const user = AuthService.getCurrentUser();
// 	const { isOpen, onOpen, onClose } = useDisclosure();
// 	const canManageOtherUsers = usePermissions(Permissions.canUpdateUserProfile);
// 	const canManageCustomFields = usePermissions(Permissions.canManageRole);

// 	// Chakra UI color mode hook
// 	const { colorMode, toggleColorMode } = useColorMode();
// 	const bg = useColorModeValue("white", "gray.800"); // background color based on color mode
// 	const color = useColorModeValue("black", "white"); // text color based on color mode

// 	const menuItems = [
// 		{
// 			path: "/projects",
// 			name: "Projects",
// 			icon: FiLayers,
// 		},
// 		{
// 			path: "/tickets",
// 			name: "Tickets",
// 			icon: FiFileText,
// 		},
// 		{
// 			path: "/administration",
// 			name: "Administration",
// 			icon: FiUser,
// 		},
// 	];

// 	const onProfileClick = () => {
// 		onOpen();
// 	};

// 	return (
// 		<>
// 			<Flex
// 				pos="sticky"
// 				h="100vh"
// 				direction="column"
// 				justifyContent="space-between"
// 				w={navSize === "small" ? "75px" : "250px"}
// 				background={bg}
// 				color={color}
// 				boxShadow="xl"
// 			>
// 				<Flex
// 					p={5}
// 					direction="column"
// 					alignItems={navSize === "small" ? "center" : "flex-start"}
// 					as="nav"
// 				>
// 					<Image src={logo} width="140px" />
// 					<IconButton
// 						background="none"
// 						mt={5}
// 						_hover={{
// 							background: "none",
// 						}}
// 						icon={<FiMenu />}
// 						onClick={() => {
// 							if (navSize === "small") setNavSize("large");
// 							else setNavSize("small");
// 						}}
// 					/>

// 					{menuItems.map((item, index) => {
// 						if (
// 							item.name === "Administration" &&
// 							!canManageOtherUsers &&
// 							!canManageCustomFields
// 						) {
// 							return <></>;
// 						}

// 						return (
// 							<NavItem
// 								key={index}
// 								navSize={navSize}
// 								icon={item.icon}
// 								name={item.name}
// 								path={item.path}
// 								active={
// 									location.pathname.includes(item.path) ||
// 									(item.path === "/dashboard" && location.pathname === "/")
// 								}
// 							/>
// 						);
// 					})}

// 					{/* Dark mode toggle button */}
// 					<IconButton
// 						mt={5}
// 						icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
// 						onClick={toggleColorMode}
// 						background="none"
// 						_hover={{ background: "none" }}
// 						aria-label="Toggle Dark Mode"
// 					/>
// 				</Flex>

// 				<Flex p={5} direction="column" w="100%" alignItems="flex-start" mb={4}>
// 					<Divider borderColor="gray.300" display={navSize === "small" ? "none" : "flex"} />

// 					<Popover placement="right-end">
// 						<PopoverTrigger>
// 							<Flex mt={4} align="center" cursor="pointer">
// 								<Avatar
// 									size="sm"
// 									name={user.firstName + " " + user.lastName}
// 									alignItems={navSize === "small" ? "center" : "flex-start"}
// 								/>
// 								<Flex direction="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
// 									<Heading as="h3" size="xs">
// 										{user.firstName} {user.lastName}
// 									</Heading>
// 									<Text fontSize="sm">
// 										{MiscellaneousService.getRoleInfo(user.roleId).name || "No Data"}
// 									</Text>
// 								</Flex>
// 							</Flex>
// 						</PopoverTrigger>

// 						<PopoverContent w="fit-content">
// 							<PopoverBody>
// 								<PopoverArrow />
// 								<Button variant="link" p={1} onClick={onProfileClick}>
// 									Profile
// 								</Button>
// 								<Divider />
// 								<Button variant="link" p={1} onClick={() => AuthService.logout()}>
// 									Logout
// 								</Button>
// 							</PopoverBody>
// 						</PopoverContent>
// 					</Popover>
// 				</Flex>
// 			</Flex>

// 			<UpdateUser
// 				isOpen={isOpen}
// 				closeModal={onClose}
// 				viewUser={user}
// 				isUpdateMyProfile={true}
// 			/>
// 		</>
// 	);
// };

// export default Navbar;
import React, { useState } from "react";
import { FiLayers, FiFileText, FiUser, FiMenu, FiSun, FiMoon, FiBell } from "react-icons/fi";
import {
	Avatar,
	Button,
	Divider,
	Flex,
	Heading,
	IconButton,
	Image,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Text,
	useDisclosure,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";
import AuthService from "../../services/auth-service";
import MiscellaneousService from "../../services/miscellaneous-service";
import UpdateUser from "../administration/UpdateUser";
import logo from "../../assests/logo.png";
import { Permissions } from "../../util/Utils";
import { usePermissions } from "../../hooks/usePermissions";

const Navbar = () => {
	const [navSize, setNavSize] = useState("large");
	const location = useLocation();
	const user = AuthService.getCurrentUser();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const canManageOtherUsers = usePermissions(Permissions.canUpdateUserProfile);
	const canManageCustomFields = usePermissions(Permissions.canManageRole);

	// Chakra UI color mode hook
	const { colorMode, toggleColorMode } = useColorMode();
	const bg = useColorModeValue("white", "gray.800"); // background color based on color mode
	const color = useColorModeValue("black", "white"); // text color based on color mode

	const menuItems = [
		{
			path: "/projects",
			name: "Project",
			icon: FiLayers,
		},
		{
			path: "/tickets",
			name: "Tickets",
			icon: FiFileText,
		},
		{
			path: "/administration",
			name: "Administration",
			icon: FiUser,
		},
	];

	const onProfileClick = () => {
		onOpen();
	};

	// Notification popover logic
	const { isOpen: isNotificationOpen, onOpen: onNotificationOpen, onClose: onNotificationClose } = useDisclosure();

	return (
		<>
			<Flex
				pos="sticky"
				h="100vh"
				direction="column"
				justifyContent="space-between"
				w={navSize === "small" ? "75px" : "250px"}
				background={bg}
				color={color}
				boxShadow="xl"
			>
				<Flex
					p={5}
					direction="column"
					alignItems={navSize === "small" ? "center" : "flex-start"}
					as="nav"
				>
					 <Flex w="100%" justifyContent="center">
    <Image src={logo} width="140px" />
  </Flex>
					<IconButton
						background="none"
						mt={5}
						_hover={{
							background: "none",
						}}
						icon={<FiMenu />}
						onClick={() => {
							if (navSize === "small") setNavSize("large");
							else setNavSize("small");
						}}
					/>

					{menuItems.map((item, index) => {
						if (
							item.name === "Administration" &&
							!canManageOtherUsers &&
							!canManageCustomFields
						) {
							return <></>;
						}

						return (
							<NavItem
								key={index}
								navSize={navSize}
								icon={item.icon}
								name={item.name}
								path={item.path}
								active={
									location.pathname.includes(item.path) ||
									(item.path === "/dashboard" && location.pathname === "/")
								}
							/>
						);
					})}

					{/* Dark mode toggle button */}
					<IconButton
						mt={5}
						icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
						onClick={toggleColorMode}
						background="none"
						_hover={{ background: "none" }}
						aria-label="Toggle Dark Mode"
					/>

					{/* Notification button */}
					<Popover
						placement="right"
						isOpen={isNotificationOpen}
						onOpen={onNotificationOpen}
						onClose={onNotificationClose}
					>
						<PopoverTrigger>
							<IconButton
								mt={5}
								icon={<FiBell />}
								background="none"
								_hover={{ background: "none" }}
								aria-label="Notifications"
							/>
						</PopoverTrigger>
						<PopoverContent>
							<PopoverArrow />
							<PopoverBody>
								<Text fontWeight="bold">Notifications</Text>
								{/* Placeholder for actual notifications */}
								<Text mt={2}>No new notifications</Text>
							</PopoverBody>
						</PopoverContent>
					</Popover>
				</Flex>

				<Flex p={5} direction="column" w="100%" alignItems="flex-start" mb={4}>
					<Divider borderColor="gray.300" display={navSize === "small" ? "none" : "flex"} />

					<Popover placement="right-end">
						<PopoverTrigger>
							<Flex mt={4} align="center" cursor="pointer">
								<Avatar
									size="sm"
									name={user.firstName + " " + user.lastName}
									alignItems={navSize === "small" ? "center" : "flex-start"}
								/>
								<Flex direction="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
									<Heading as="h3" size="xs">
										{user.firstName} {user.lastName}
									</Heading>
									<Text fontSize="sm">
										{MiscellaneousService.getRoleInfo(user.roleId).name || "No Data"}
									</Text>
								</Flex>
							</Flex>
						</PopoverTrigger>

						<PopoverContent w="fit-content">
							<PopoverBody>
								<PopoverArrow />
								<Button variant="link" p={1} onClick={onProfileClick}>
									Profile
								</Button>
								<Divider />
								<Button variant="link" p={1} onClick={() => AuthService.logout()}>
									Logout
								</Button>
							</PopoverBody>
						</PopoverContent>
					</Popover>
				</Flex>
			</Flex>

			<UpdateUser
				isOpen={isOpen}
				closeModal={onClose}
				viewUser={user}
				isUpdateMyProfile={true}
			/>
		</>
	);
};

export default Navbar;
