import Button from 'react-bootstrap/Button'

// Cloudinary Widget Button
// The widget requires the following:
// imgUrl and setImgUrl - This is the URL value of the uploaded image
// cloudName and preset - This is required to establish the API connection with Cloudinary

function CloudinaryButton(props) {
    return(
        <>
            <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>
            <Button
                  disabled={props.imgUrl ? true : false}
                  type="button"
                  size="sm"
                  variant={props.imgUrl ? "success" : "primary"}
                  onClick={() => {
                    var myWidget = cloudinary.createUploadWidget(
                      {
                      cloudName: props.cloudName, 
                      uploadPreset: props.preset
                      }, (error, result) => { 
                        if (!error && result && result.event === "success") { 
                          console.log('Done! Here is the image info: ', result.info); 
                          props.setImgUrl(result.info.secure_url);
                          myWidget.close();
                        }
                      }
                    )
                    myWidget.open();}}
                >
                  {props.imgUrl ? "Uploaded" : "Upload Image"}
                </Button>
        </>
    )
}

export default CloudinaryButton;