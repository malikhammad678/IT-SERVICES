import React from 'react'

const Location = () => {
  return (
    <div>
      <div className='map'>
      <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93902.24942574307!2d-83.37386640363887!3d42.6519182330588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824bfc993245f53%3A0x137932f574e93b0a!2sPontiac%2C%20MI%2C%20USA!5e0!3m2!1sen!2s!4v1732385833477!5m2!1sen!2s" 
  width="100%" 
  height="600" 
  style={{ border: 0 }} 
  allowFullScreen=""
  className='maps' 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>

    </div>
    </div>
  )
}

export default Location
