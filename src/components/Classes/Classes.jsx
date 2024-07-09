import styles from "./ClassesStyles.module.css";

export default function Classes() {
  return (
    <div className={styles.section}>
      <h1>Our Classes</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src="https://images.pexels.com/photos/1552102/pexels-photo-1552102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="classesImg"
          />
          <div className={styles.title}>
            <h1>CrossFit</h1>
          </div>
          <div className={styles.intro}>
            <p>Focus: High-intensity functional movements</p>
            <p>
              Benefits: Overall fitness, strength, endurance, and flexibility
            </p>
            <p>Structure: Workouts of the Day (WODs), varied routines</p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.pexels.com/photos/1638324/pexels-photo-1638324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="classesImg"
          />
          <div className={styles.title}>
            <h1>Strength Training</h1>
          </div>
          <div className={styles.intro}>
            <p>Focus: Building muscle strength</p>
            <p>Benefits: Increased muscle mass, bone density, and metabolism</p>
            <p>
              Structure: Use of free weights, machines, and resistance bands
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="classesImg"
          />
          <div className={styles.title}>
            <h1>Functional Training</h1>
          </div>
          <div className={styles.intro}>
            <p>Focus: Flexibility, balance, and mindfulness</p>
            <p>
              Benefits: Improved balance, coordination, and overall
              functionality
            </p>
            <p>
              Structure: Exercises using body weight, free weights, and
              equipment like kettlebells
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
