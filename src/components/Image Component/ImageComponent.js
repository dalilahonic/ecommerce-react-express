import classes from './ImageComponent.module.css';

function ImageComponent() {
  return (
    <div className={classes.imageContainer}>
      <img
        src='https://images.pexels.com/photos/3184191/pexels-photo-3184191.jpeg'
        alt=''
      />
    </div>
  );
}

export default ImageComponent;
