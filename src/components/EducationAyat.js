import React from 'react'
import Bismillah from '../images/bimillah.svg'
import '../css/EducationAyat.css'
const EducationAyat = () => {
  return (
    <div>
      <div className="education-aya">
        <div className="image">
          <img src={Bismillah} alt="Bismillah" />
        </div>
        <div className="contents">
          <h1>يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنْكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ</h1>
          <span>Yarfa‘i-llāhul-ladhīna āmanū minkum walladhīna ūtul-‘ilma darajāt</span>
          <p>Allah will raise in rank those of you who have faith and those who have been given knowledge.</p>
          <i>(Sūrat al-Mujādilah, No 58, Āyat 11)</i>
        </div>
      </div>
    </div>
  )
}

export default EducationAyat
