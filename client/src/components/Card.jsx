import React from 'react'
import Tilt from 'react-parallax-tilt';

import styles from '../styles';
import { allCards } from '../assets';

const generateRandomCardImage = () => allCards[Math.floor(Math.random() * allCards.length - 1)];

const img1 = generateRandomCardImage();
const img2 = generateRandomCardImage();


const Card = ({ card, title, restType, cardRef, playerTwo }) => {
  return (
    <Tilt>
      <div className={`${styles.cardContainer} ${restType}`} ref={cardRef}>
        <img src={playerTwo ? img2 : img1} alt="card" className={styles.cardImg}/>

        <div className={`${styles.cardPointContainer} sm:left-[21.2%] left-[22%] ${styles.flexCenter}`}>
          <p className={`${styles.cardPoint} text-yellow-400`}>{card.attack}</p>
        </div>

        <div className={`${styles.cardPointContainer} sm:right-[14.2%] right-[15%] ${styles.flexCenter}`}>
          <p className={`${styles.cardPoint} text-red-700`}>{card.defense}</p>
        </div>

        <div className={`${styles.cardTextContainer} ${styles.flexCenter}`}>
          <p className={styles.cardText}>{title}</p>
        </div>

      </div>
    </Tilt>
  )
}

export default Card