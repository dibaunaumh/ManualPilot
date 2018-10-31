import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_weeks extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Firebase (Cloud Firestore)'.
    
    item = {};
    this.items.push(item);
    item['weekNumActivities'] = "3";
    item['weekScore'] = "2";
    item['weekNumberAtCurrentYear'] = "28";
    item['weekNumPlans'] = "5";
    item['weekStartDate'] = "{\"nanoseconds\":0,\"seconds\":1535230800}";
    item['key'] = "cAurL56s8m2u1MfEnunn";
    item['weekEndDate'] = "{\"nanoseconds\":0,\"seconds\":1535749200}";
    item['weekNumber'] = "2008";
    item['userEmail'] = "dima.razgon@gmail.com";
    
    item = {};
    this.items.push(item);
    item['weekNumActivities'] = "2";
    item['weekScore'] = "4";
    item['weekNumberAtCurrentYear'] = "29";
    item['weekNumPlans'] = "6";
    item['weekStartDate'] = "{\"nanoseconds\":0,\"seconds\":1536465600}";
    item['key'] = "pT5j2lOU9A6cEKTH3HYb";
    item['weekEndDate'] = "{\"nanoseconds\":0,\"seconds\":1536984000}";
    item['weekNumber'] = "2009";
    item['userEmail'] = "dima.razgon@gmail.com";
    
    item = {};
    this.items.push(item);
    item['weekNumActivities'] = "0";
    item['weekScore'] = "0";
    item['weekNumberAtCurrentYear'] = "30";
    item['weekNumPlans'] = "0";
    item['weekStartDate'] = "{\"nanoseconds\":0,\"seconds\":1537070400}";
    item['key'] = "efbID2WGIsURbgKg1zz8";
    item['weekEndDate'] = "{\"nanoseconds\":0,\"seconds\":1537588800}";
    item['weekNumber'] = "2010";
    item['userEmail'] = "dima.razgon@gmail.com";
  }

  
  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  
  addItem(item, options) {
    console.log("add to firebase: ", item);
      
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
      
    collection.add(item)
      .then((docRef) => {
        console.log("Firebase document added with id: ", docRef.id);
        item.key = docRef.id;
        //super.addItem(item, options);
      
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        this._fetchComplete(error, options);
      });
  }
  
  removeItem(item, options) {
    //super.removeItem(item, options);
    
    console.log("delete from firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.key);
    
    docRef.delete()
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  
  replaceItemByRowIndex(idx, item, options) {
    //super.replaceItemByRowIndex(idx, item, options);
    
    console.log("update in firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.key);
    
    docRef.update(item)
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  

}
