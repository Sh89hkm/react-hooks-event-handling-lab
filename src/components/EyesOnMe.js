// Code EyesOnMe Component Here
function EyesOnMe() {
    function handleFocus(event) {
        
        console.log("Good!");
      }

      function handleBlur(event) {
        
        console.log("Hey! Eyes on me!");
      }

    return (
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur} >Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;