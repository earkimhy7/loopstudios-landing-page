import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    overview: "Immersive experiences that deliver",
    about: {
      title: "The leader in interactive VR",
      description:
        "Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand."
    },
    creations: {
      title: "Our creations",
      items: [
        {
          name: "Deep earth",
          mobileImg: "/assets/images/mobile/image-deep-earth.jpg",
          desktopImg: "/assets/images/desktop/image-deep-earth.jpg"
        },
        {
          name: "Night arcade",
          mobileImg: "/assets/images/mobile/image-night-arcade.jpg",
          desktopImg: "/assets/images/desktop/image-night-arcade.jpg"
        },
        {
          name: "Soccer team VR",
          mobileImg: "/assets/images/mobile/image-soccer-team.jpg",
          desktopImg: "/assets/images/desktop/image-soccer-team.jpg"
        },
        {
          name: "The grid",
          mobileImg: "/assets/images/mobile/image-grid.jpg",
          desktopImg: "/assets/images/desktop/image-grid.jpg"
        },
        {
          name: "From up above VR",
          mobileImg: "/assets/images/mobile/image-from-above.jpg",
          desktopImg: "/assets/images/desktop/image-from-above.jpg"
        },
        {
          name: "Pocket borealis",
          mobileImg: "/assets/images/mobile/image-pocket-borealis.jpg",
          desktopImg: "/assets/images/desktop/image-pocket-borealis.jpg"
        },
        {
          name: "The curiosity",
          mobileImg: "/assets/images/mobile/image-curiosity.jpg",
          desktopImg: "/assets/images/desktop/image-curiosity.jpg"
        },
        {
          name: "Make it fisheye",
          mobileImg: "/assets/images/mobile/image-fisheye.jpg",
          desktopImg: "/assets/images/desktop/image-fisheye.jpg"
        }
      ]
    },
    menuItems: [
      { name: "About", link: "#" },
      { name: "Career", link: "#" },
      { name: "Events", link: "#" },
      { name: "Products", link: "#" },
      { name: "Support", link: "#" }
    ],
    socialItems: [
      { icon: "/assets/images/icon-facebook.svg", link: "#" },
      { icon: "/assets/images/icon-twitter.svg", link: "#" },
      { icon: "/assets/images/icon-pinterest.svg", link: "#" },
      { icon: "/assets/images/icon-instagram.svg", link: "#" }
    ]
  }
});

export default app;
