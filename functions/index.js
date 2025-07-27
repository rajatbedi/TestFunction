const {onRequest} = require("firebase-functions/v2/https");
const {onDocumentCreated, onDocumentUpdated} = require("firebase-functions/v2/firestore");
const {onSchedule} = require("firebase-functions/v2/scheduler");

const { initializeApp } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');


initializeApp();

const db = getFirestore();
const auth = getAuth();


exports.updateMarketingCampaign = onRequest( {
  region: "us-east4"
}, async (req, res) => {
  cors(req,  res, async () => {

    
      console.log("Update Data not found.")
    
    return res.status(200).send("done");

  });
});
