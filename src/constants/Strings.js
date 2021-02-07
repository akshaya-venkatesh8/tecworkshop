import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const GOOGLE_DRIVE_URL = "https://drive.google.com/thumbnail?id=";

const Strings = {
  APPLICATION: {
    ROUTES: {
      HOME: "/",
      ALL: "*",
      WORK: "/work/:category",
      PROJECT: "/work/:category/:projectId",
      ABOUT: "/about",
      CONTACT: "/contact-us",
      FURNITURE: "/work/furniture",
      ERROR: "/error",
    },
    SHARED: {
      NAVBAR: [
        {
          NAME: "Home",
          LINK: "/",
        },
        {
          NAME: "About",
          LINK: "/about",
        },
        {
          NAME: "Work",
          LINK: "/work/hospitality",
          CHILD_PAGES: [
            // {
            //   NAME: "Hospitality",
            //   LINK: "/work/hospitality",
            // },
            {
              NAME: "Corporates",
              LINK: "/work/corporates",
            },
            {
              NAME: "Residential",
              LINK: "/work/residential",
            },
            {
              NAME: "Furniture",
              LINK: "/work/furniture",
            },
          ],
        },
        {
          NAME: "Contact",
          LINK: "/contact-us",
        },
      ],
      FOOTER: [
        {
          NAME: "Home",
          LINK: "/",
        },
        {
          NAME: "About",
          LINK: "/about",
        },
        // {
        //   NAME: "Hospitality",
        //   LINK: "/work/hospitality",
        // },
        {
          NAME: "Corporates",
          LINK: "/work/corporates",
        },
        {
          NAME: "Residential",
          LINK: "/work/residential",
        },
        {
          NAME: "Furniture",
          LINK: "/work/furniture",
        },
        {
          NAME: "Contact",
          LINK: "/contact-us",
        },
      ],
    },
    HOME: {
      CAROUSEL: [
        {
          IMAGE: require("../assets/images/carousel1.jpg"),
          ALT_TEXT: "Interior 1",
          DISPLAY_TEXT: ["Creative Turnkey Solutions", "FOR EVERY SPACE"],
        },
        {
          IMAGE: require("../assets/images/carousel2.jpg"),
          ALT_TEXT: "Interior 2",
          DISPLAY_TEXT: ["Creative Turnkey Solutions", "FOR EVERY SPACE"],
        },
        {
          IMAGE: require("../assets/images/carousel4.jpg"),
          ALT_TEXT: "Interior 3",
          DISPLAY_TEXT: ["Creative Turnkey Solutions", "FOR EVERY SPACE"],
        },
        {
          IMAGE: require("../assets/images/carousel5.jpg"),
          ALT_TEXT: "Interior 4",
          DISPLAY_TEXT: ["Creative Turnkey Solutions", "FOR EVERY SPACE"],
        },
      ],
      WORK: [
        {
          NAME: "HOSPITALITY",
          IMAGE: require("../assets/images/TWI CAROUSEL 01.jpg"),
          PATH: "/work/hospitality",
        },
        {
          NAME: "CORPORATES",
          IMAGE: require("../assets/images/TWI CAROUSEL 02.jpg"),
          PATH: "/work/corporates",
        },
        {
          NAME: "RESIDENTIAL",
          IMAGE: require("../assets/images/TWI CAROUSEL 03.jpg"),
          PATH: "/work/residential",
        },
        {
          NAME: "FURNITURE",
          IMAGE: require("../assets/images/TWI CAROUSEL 04.jpg"),
          PATH: "/work/furniture",
        },
      ],
      BANNER: {
        CLIENT_LOGOS: [
          require("../assets/images/ITC.png"),
          require("../assets/images/ITC.png"),
          require("../assets/images/ITC.png"),
          require("../assets/images/ITC.png"),
          require("../assets/images/ITC.png"),
        ],
      },
      FEATURED_PROJECTS: [
        {
          NAME: "JW Marriott, Mumbai",
          IMAGE: require("../assets/images/TWI CAROUSEL 01.jpg"),
          PATH: "/work/hospitality/jw-marriot-mumbai",
        },
        {
          NAME: "JW Marriott, Mumbai",
          IMAGE: require("../assets/images/TWI CAROUSEL 02.jpg"),
          PATH: "/work/corporates/jw-marriot-mumbai",
        },
        {
          NAME: "JW Marriott, Mumbai",
          IMAGE: require("../assets/images/TWI CAROUSEL 03.jpg"),
          PATH: "/work/residential/jw-marriot-mumbai",
        },
        {
          NAME: "JW Marriott, Mumbai",
          IMAGE: require("../assets/images/TWI CAROUSEL 04.jpg"),
          PATH: "/work/furniture/jw-marriot-mumbai",
        },
      ],
    },
    TEXT: {
      SECTION1: {
        TITLE: "WHAT WE OFFER",
        SUB_TITLE: "Transform Your Space with Sophistication",
        DESCRIPTION:
          "Tec Workshop Interiors is an organization with innovative solutions for the industry with sensitivity up to the roots of design aspects from conceptualization to execution.",
      },
      SECTION2: {
        TITLE: "OUR PROJECTS",
        SUB_TITLE: "Our Featured Projects",
        DESCRIPTION:
          "More than a decade of service in the industry has given us opportunities to work on some of the best project for clients around the nation. Below are some of those projects",
      },
    },
    SOCIAL: {
      FACEBOOK: {
        ICON: faFacebookF,
        LINK: "https://facebook.com/",
      },
      YOUTUBE: {
        ICON: faYoutube,
        LINK: "https://youtube.com/",
      },
      INSTAGRAM: {
        ICON: faInstagram,
        LINK: "https://instagram.com/",
      },
      TWITTER: {
        ICON: faTwitter,
        LINK: "",
      },
      LINKEDIN: {
        ICON: faLinkedin,
        LINK: "",
      },
    },
    ABOUT_US_PAGE: {
      ETHICS: [
        {
          TITLE: "Mission",
          IMAGE: require("../assets/images/twi assets-02.png"),
          DESCRIPTION:
            "To committedly deliver high quality products in the given stipulated time while adhering to industry standards.",
        },
        {
          TITLE: "Vision",
          IMAGE: require("../assets/images/twi assets-06.png"),
          DESCRIPTION:
            "To enable and enhance the quality of life for our people by creating better standrads of living for tomorrow.",
        },
        {
          TITLE: "Values",
          IMAGE: require("../assets/images/twi assets-05.png"),
          DESCRIPTION:
            "Reliability, authenticity, mutual respect and excellence are the core values of our company.",
        },
      ],
      OUR_CLIENTS: {
        TITLE: "OUR CLIENTS",
        SUB_TITLE: "Our Valued Clientelle",
        DESCRIPTION:
          "Amongst many, our portfolio includes a number of prestigious Indian and Foreign brands like :",
        CLIENT_LOGOS: [
          require("../assets/images/Taj_Hotels.png"),
          require("../assets/images/Westin_Hotels_and_Resorts_logo.png"),
          require("../assets/images/Taj_Hotels.png"),
          require("../assets/images/Westin_Hotels_and_Resorts_logo.png"),
          require("../assets/images/Taj_Hotels.png"),
          require("../assets/images/Westin_Hotels_and_Resorts_logo.png"),
          require("../assets/images/Taj_Hotels.png"),
          require("../assets/images/Westin_Hotels_and_Resorts_logo.png"),
          require("../assets/images/Taj_Hotels.png"),
          require("../assets/images/Westin_Hotels_and_Resorts_logo.png"),
          require("../assets/images/Taj_Hotels.png"),
          require("../assets/images/Westin_Hotels_and_Resorts_logo.png"),
          require("../assets/images/Taj_Hotels.png"),
          require("../assets/images/Westin_Hotels_and_Resorts_logo.png"),
          require("../assets/images/Taj_Hotels.png"),
        ],
      },
    },
    CONTACT_US_PAGE: {
      TITLE: "Contact",
      OFFICE_LOCATIONS: [
        {
          TITLE: "Mumbai",
          ADDRESS:
            "D/5, Amar Deep CHSL., Charkop Kandivali West, Plot No.714/0-24, Sector-7, Mumbai, (M.CORP) - 400067",
        },
        {
          TITLE: "Hyderabad",
          ADDRESS:
            "Balamaithri Nivas, Flat No.202, Hindi Nagar Colony, Panjagutta, Hyderabad - 500082",
        },
        {
          TITLE: "Kolkata",
          ADDRESS:
            "Metropolitan Co-op, Housing Society Limited, B-73, Canal South Road, Kolkata - 700105",
        },
        {
          TITLE: "Bangalore",
          ADDRESS:
            "6, Dharmanna Garden, Near HMT Layout, Dinnur, R.T. Nagar, Bangalore - 560032",
        },
      ],
      CONTACT_DETAILS: [
        {
          TITLE: "Corporate Office",
          TEXT:
            "Tec Workshop Interiors India Pvt Ltd. 224/1 Kamarajan Street, Mettukupam, Thoraipakkam, Chennai (TN), India - 600097",
        },
        {
          TITLE: "Telephone",
          TEXT: "044 24329251 / 52",
        },
        {
          TITLE: "Email",
          TEXT: "twich@twiindia.com",
        },
      ],
    },
  },
};
export default Strings;
