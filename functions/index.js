const functions = require('firebase-functions');
const admin = require("firebase-admin");
const cors = require('cors')({origin: true});
const fs = require('fs');
const UUID = require("uuid-v4");
const {Storage} = require("@google-cloud/storage");

const gcconfig = {
  projectId: "beniblaproto",
  keyFilename: "beniblaproto.json"
};

const gcs = new Storage(gcconfig);

admin.initializeApp({
  credential: admin.credential.cert(require("./beniblaproto.json"))
});

exports.storeImage = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
  if (!request.headers.authorization || !request.headers.authorization.startsWith("Bearer ")) {
    console.log("No token");
    response.status(403).json({error: " Unauthorized"});
    return;
  }
  let idToken;
  idToken = request.headers.authorization.split("Bearer ")[1];
  admin.auth().verifyIdToken(idToken)
  .then(decodedToken => {
    const body = JSON.parse(request.body);
    fs.writeFileSync("/tmp/uploaded-image.jpg", body.image, "base64", err => {
      console.log(err);
      return response.status(500).json({error: err});
      });
      const bucket = gcs.bucket("beniblaproto.appspot.com");
      const uuid = UUID();
  
      return bucket.upload(
      "/tmp/uploaded-image.jpg",
      {
        uploadType: "media",
        destination: "/events/" + uuid + ".jpg",
        metadata: {
        metadata: {
          contentType: "image/jpeg",
          firebaseStorageDownloadTokens: uuid
        }
        }
      },
      (err, file) => {
      if (!err) {
        return response.status(201).json({
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/" +
          bucket.name + 
          "/o/" + 
          encodeURIComponent(file.name) + 
          "?alt=media&token=" + 
          uuid
        });
      } else {
        console.log(err);
        return response.status(500).json({error: err});
      }
      }
    );
    })
    .catch(error  => {
      console.log("Token invalid");
      response.status(403).json({error: "Unauthorized"});
    });
  });
});
