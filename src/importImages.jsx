// importImages.js
const importAll = (context) => context.keys().map(context);
const images = importAll(require.context("./assets/", false, /\.(png)$/));

export default images;
