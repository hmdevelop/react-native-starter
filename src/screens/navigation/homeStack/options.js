export const homeOptions = {
  bottomTab: {
    text: "Home",
    badgeColor: "red",
    testID: "bottomTabTestID",
    icon: require("../../../assets/Home.png"),
    iconColor: "#979191",
    textColor: "#979191",
    selectedTextColor: "#F54B64",
    selectedIconColor: "#F54B64",
    fontSize: 10
  },
  bottomTabs: {
    elevation: 8, // BottomTabs elevation in dp
    titleDisplayMode: "alwaysShow" // Sets the title state for each tab.
  },
  topBar: {
    visible: false,
    drawBehind: true
  }
};
