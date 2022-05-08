import react from 'react'
import './CardScore.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Divider } from 'antd'
import mathLogo from './math-sign.svg'
import medal from './medal.svg'

const CardScore = () => {
  const mockupData = {
    id: '6998',
    name: 'สาขาวิชาเภสัชกรรมอุตสาหการ',
    logo: 'https://tcas-assets.skooldio.com/icons/edugroup/med.png',
    roundSeats: [5, 6, 80, 10, 6],
    score: {
      id: '18844',
      year: 2562,
      scoreType: 'ADMISSION',
      min: 20663.1,
      max: 22307.3,
      avg: 0,
    },
    faculty: {
      id: '1465',
      name: 'คณะเภสัชศาสตร์',
      tagId: '2',
      university: {
        id: '313',
        name: 'จุฬาลงกรณ์มหาวิทยาลัย',
      },
    },
    updatedAt: '2019-03-13T07:00:46.000Z',
    likes: 3014,
  }

  return (
    <div className='card-container'>
      <div className='card-content'>
        <div className='header'>
          <img
            src='https://tcas-assets.skooldio.com/icons/edugroup/med.png'
            className='faculty-logo'
          />
          <div className='faculty-info'>
            <div className='faculty-title'>คณะเภสัชศาสตร์</div>
            <div className='major-title'>สาขาวิชาเภสัชกรรมอุตสาหการ</div>
            <div className='university-title'>จุฬาลงกรณ์มหาวิทยาลัย</div>
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} />{' '}
          </div>
        </div>
        <Divider className='divider' />
        <div className='score-info-warpper'>
          <div className='seat-warp'>
            <div className='seat-text'>รอบที่เปิด</div>
            <div className='number-round'>1</div>
          </div>
          <div className='score-wrap'>
            <div>
              <div className='test-type'>รอบที่ 4 : Admission</div>
            </div>
            <div>
              <button className='btn-edit-score'>
                แก้ไขคะแนน <img src={mathLogo} />
              </button>
            </div>
          </div>
          <div>
            <div className='my-score-wrapper'>
              <img className='medal-logo' src={medal} alt='medal' />
              <div className='my-score-wrap'>
                <div className='title'>คะแนนของคุณคือ</div>
                <div className='score'>23,453</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardScore
