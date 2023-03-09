// Write your code here
import './index.css'

const Message = props => {
  const {isStatus} = props
  const headingText = isStatus ? 'Please Login' : 'Welcome User'
  return <h1 className="heading">{headingText}</h1>
}

export default Message
