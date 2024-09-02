import styles from './NodeFive.module.css'
import PropTypes from "prop-types";

export const NodeFive = (props) => {
  NodeFive.propTypes = {
    value: PropTypes.array,
    priority: PropTypes.string
  }
  const isLeft = props.priority.indexOf('l') !== -1
  const isRight = props.priority.indexOf('r') !== -1

  return (
      <div className={styles.container}>
        <div className={styles.circle}>
          {props.value.map((item, index) => {
            return (
                <div key={index}>[{item.first}, {item.second}, {item.third}]</div>
            )
          })}
        </div>
        <div className={styles.Arrows}>
          {isLeft &&
              <div className={styles.leftArrowGreen}></div>}
          {!isLeft && <div className={styles.leftArrow}></div>}
          {isRight &&
              <div className={styles.rightArrowGreen}></div>}
          {!isRight &&
              <div className={styles.rightArrow}></div>}
        </div>
      </div>
  )
}