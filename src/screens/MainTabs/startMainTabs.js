import { Navigation } from 'react-native-navigation';
import { Icon } from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30)
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
          label: "Share Event",
          title: "Share Event",
          icon: sourcesIcons[1]
        }
      ]
    });
  })
};

export default startTabs;