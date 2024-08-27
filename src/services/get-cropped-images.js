import image from "../assets/default.jpg";

const getCroppedImages = (url) => {
  if (!url) return image;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImages;
