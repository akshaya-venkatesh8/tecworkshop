const getDeviceType = width => {
  if (width > 1024) {
    return "desktop";
  } else if (width > 400 && width <= 1024) {
    return "tablet";
  } else {
    return "mobile";
  }
};

export default getDeviceType;
