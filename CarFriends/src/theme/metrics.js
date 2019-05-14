/**
 * To return width/height of the main screen, statusbar and navbar of the device
 */
import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const metrics = {
  screenWidth: width,
  screenHeight: height,
  statusbarHeight: Platform.OS === "ios" ? 50 : 0,
  navbarHeight: Platform.OS === "ios" ? 35 : 48,
};

export default metrics;
