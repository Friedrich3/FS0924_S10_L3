import { Alert } from "react-bootstrap"

const Error = function (){
    return(
        <>
        <Alert variant="danger">
          <Alert.Heading>
            Oh snap! The Content you are searching for is unavailable!
          </Alert.Heading>
          <p>
            It seems you&apos;ve entered an incorrect word or the file you are searching for doesn&apos;t exist. Please try again!
          </p>
        </Alert>
      </>
    )
}
export default Error