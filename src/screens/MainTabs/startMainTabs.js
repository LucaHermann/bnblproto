import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30, "#000000"),
    Icon.getImageSource("ios-share-alt", 30, "#000000")
  ]).then(sourcesIcons => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "benibla-events.FindEventScreen",
          label: "Find Event",
          title: "Find Event",
          icon: sourcesIcons[0]
        },
        {
          screen: "benibla-events.ShareEventScreen",
          label: "Share Event/Drop",
          title: "Share Event/Drop",
          icon: sourcesIcons[1]
        }
      ]
    });
  })
};

export default startTabs;