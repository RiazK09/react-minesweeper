export const mineColour = () => {
  let colours = ["orange", "darkgreen", "cyan", "violet", "yellow"];
  return colours[Math.floor(Math.random() * colours.length)];
};

//The bombs will be allocated a random colour from the colour list above.
