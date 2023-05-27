import * from React;

export default Intro({item}){
  return(
    <>
    <div>
      <p>{item.text}</p>
      { item.helpText && <p><i>{item.helpText}</i></p> }
    </div>
    </>
  )
}