import styles from './BasicNode.module.css'
import PropTypes from "prop-types";

export const BasicNode = (props) => {
  BasicNode.propTypes = {
    value: PropTypes.array,
    priority: PropTypes.number
  }


  return (
      <div className={styles.container}>
        <div className={styles.circle}>
          {props.value.map((item, index) => {
            return (
                <div key={index}>[{item.first}, {item.second}, {item.third}]</div>
            )
          })}
        </div>
        {<div className={styles.Arrows}>
          <div className={styles.leftArrow}></div>
          <div className={styles.rightArrow}></div>
        </div>
        }
      </div>
  )


}