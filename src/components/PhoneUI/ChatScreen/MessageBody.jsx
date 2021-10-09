export default function ({id, avatar, username, content, isCurrent}) {
  return (
    <div role="presentation" className={`msg ${isCurrent ? 'is_current' : ""}`}>
      {isCurrent || <img src={avatar} alt={id} />}
      <span>{content}</span>
    </div>
  )
}