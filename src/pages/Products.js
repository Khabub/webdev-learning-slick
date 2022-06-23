import classes from "./Products.module.css";

const Products = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.bestway}>The Best Way to</h1>
      <h1 className={classes.trackyour}>Track your Daily Progress</h1>
      <p className={classes.homeparagraf}>
        UNX Allows you to track all your daily task progress using gamification
        methods and earn rewards for specific coupons
      </p>
      <button className={classes["btn-trythisapp"]}>Try this app</button>
    </div>
  );
};

export default Products;
