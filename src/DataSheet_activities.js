import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_activities extends DataSheetBase {

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
    item['weekID'] = "cAurL56s8m2u1MfEnunn";
    item['planID'] = "";
    item['activityDescription'] = "Taught my son scratch";
    item['activityPicture'] = "";
    item['key'] = "7pyWMcAnrRjo9DZGaKPv";
    item['activityTags'] = "[\"scratch\"]";
    item['importantThingID'] = "9WUVlbdDVnfkasyt25pI";
    item['activityDate'] = "1536707996484";
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
