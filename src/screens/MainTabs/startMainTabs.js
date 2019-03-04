import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("ios-map", 30),
    Icon.getImageSource("ios-share", 30),
    Icon.getImageSource("ios-menu", 30)
  ]).then(sourcesIcons => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "benibla-events.FindEventScreen",
          label: "Find Event/Drop",
          title: "Find Event/Drop",
          icon: sourcesIcons[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sourcesIcons[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "benibla-events.ShareEventScreen",
          label: "Share Event/Drop",
          title: "Share Event/Drop",
          icon: sourcesIcons[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sourcesIcons[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: "black"
      },
      drawer: {
        left: {
          screen: "benibla-events.SideDrawerScreen"
        }
      }
    });
  });
};

export default startTabs;
