:gift::gift::gift::gift::gift::gift::gift::gift::gift::gift:
# React Native Apollo Starter Kit
:christmas_tree::christmas_tree::christmas_tree::christmas_tree::christmas_tree::christmas_tree::christmas_tree::christmas_tree::christmas_tree::christmas_tree:

### This is a starter kit for React Native and Apollo, using ExponentJS framework

references:
- Apollo: https://github.com/apollostack/apollo
- React Native: https://facebook.github.io/react-native/
- ExponentJS: https://getexponent.com/

#Running on Device/Si(E)mulator
Since this is built on top of ExponentJS, refer to their awesome documentation
https://docs.getexponent.com/versions/v12.0.0/introduction/installation.html

# What is included?
- Redux
- Immutable
- Sagas for dealing with async redux
- Navigation with tabs and stacks
- Apollo containers with queries and mutations
- Lists for displaying contents from GraphQL with pull to refresh, using Apollo refetch
- Basic screens like Onboarding, Login, Register, Forgot password
- Login with password and facebook (uses LocalStorage to store JWT)
- Fastlane with pilot to upload .ipa app to TestFlight (The .ipa can be generated with ExponentJS)
- A screen that uses camera
- HOCS pattern

# Configuration
## Facebook
To configure Facebook login, open the file ```config/facebook.js```
## Colors
To configure colors, change the file ```resoures/colors.js```
## GraphQL
To configure the GraphQL endpoint, change the file ```apollo/client.js```

# GraphQL Server
You can create your own graphql server or use this awesome GraphQL-as-a-service:
https://scaphold.io/

# TODO
- [ ] Drawer for android
- [ ] A screen that uses maps
- [ ] Better fastlane configuration
- [ ] Clear some old files/code
- [ ] Push notifications with ExponentJS
