import React from 'react'
import GarageOwnerProfile from '../../components/header/GarageOwnerProfile'
import QuarterReport from '../../container/garageOwnerProfile/QuarterReport'
import Footer from '../../components/footer/Footer'

const GarageQuarterReport = () => {
    return (
        <div>
          <GarageOwnerProfile>
            < QuarterReport />
            
          </GarageOwnerProfile>
          < Footer />
        </div>
      )
    }

export default GarageQuarterReport