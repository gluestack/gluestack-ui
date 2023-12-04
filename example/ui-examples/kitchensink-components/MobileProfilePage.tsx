import React from 'react';

import {
  HStack,
  Text,
  Heading,
  Avatar,
  VStack,
  Link,
  Icon,
  Pressable,
  Divider,
  Button,
  Image,
} from '../gluestack-ui-components';
import {
  Blinds,
  ChevronRight,
  Headphones,
  HeartHandshake,
  Settings,
  Tablets,
  User,
} from 'lucide-react-native';
import { ScrollView } from 'react-native';
import LogoutAlertDialog from './LogoutAlertDialog';

const MobileProfilePage = React.memo(({ isActive }: any) => {
  const [openLogoutAlertDialog, setOpenLogoutAlertDialog] =
    React.useState(false);

  return (
    <ScrollView style={{ display: isActive ? 'flex' : 'none' }}>
      <VStack px="$5" py="$4" space="lg" flex={1}>
        <Heading>Profile</Heading>
        <ProfileCard />
        <Divider />
        <PersonalInfoSection />
        <Divider />
        <HostingSection />
        <Divider />
        <SupportSection />
        <Divider />
        <LogoutButton
          openLogoutAlertDialog={openLogoutAlertDialog}
          setOpenLogoutAlertDialog={setOpenLogoutAlertDialog}
        />
      </VStack>
      <LogoutAlertDialog
        setOpenLogoutAlertDialog={setOpenLogoutAlertDialog}
        openLogoutAlertDialog={openLogoutAlertDialog}
      />
    </ScrollView>
  );
});

const ProfileCard = React.memo(() => {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <HStack space="md">
        <Avatar bg="$blue600">
          <Avatar.FallbackText>Henry Stan</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
        </Avatar>
        <VStack>
          <Text>Henry Stan</Text>
          <Link>
            <Text color="$textLight500" size="sm">
              Show Profile
            </Text>
          </Link>
        </VStack>
      </HStack>
      <Pressable>
        <Icon as={ChevronRight} />
      </Pressable>
    </HStack>
  );
});

const PersonalInfoSection = React.memo(() => {
  return (
    <VStack space="md">
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={User} />
          <Text>Personal Info</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={Settings} />
          <Text>Account</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
    </VStack>
  );
});

const HostingSection = React.memo(() => {
  return (
    <VStack space="md">
      <Heading>Hosting</Heading>
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={Blinds} />
          <Text>Host a home</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={Tablets} />
          <Text>Host an experience</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
    </VStack>
  );
});

const SupportSection = React.memo(() => {
  return (
    <VStack space="md">
      <Heading>Support</Heading>
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={HeartHandshake} />
          <Text>Get Help</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={Headphones} />
          <Text>Contact Support</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
    </VStack>
  );
});

const LogoutButton = ({ setOpenLogoutAlertDialog }: any) => {
  return (
    <Button
      action="secondary"
      variant="outline"
      onPress={() => {
        setOpenLogoutAlertDialog(true);
      }}
    >
      <Button.Text>Logout</Button.Text>
    </Button>
  );
};

export default MobileProfilePage;
