const photo = document.querySelector("photo");

barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.fromTo(
          data.current.container,
          1,
          { opacity: 1 },
          { opacity: 0 }
        );
      },
      enter(data) {
        return gsap.fromTo(
          data.next.container,
          1,
          { opacity: 0 },
          { opacity: 1 }
        );
        //.fromTo(photo, 1, { opacity: 0 }, { opacity: 1 });
      },
    },
  ],
});

// barba.init({
//   transitions: [
//     {
//       name: "opacity-transition",
//       leave(data) {
//         return gsap.to(data.current.container, { x: "0%" });
//       },
//       enter(data) {
//         return gsap.fromTo(data.next.container, 0.5, { x: "50%" }, { x: "0%" });
//       },
//     },
//   ],
// });
