import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_restaurants extends DataSheetBase {

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
    item['restaurantOpeningHours'] = "Sat-Sun 1pm-8pm";
    item['restaurantEmail'] = "hello@innaskitchen.com";
    item['restaurantName'] = "Inna's Kitchen";
    item['restaurantPhone'] = "617-487-2870";
    item['restaurantCoverImage'] = "https://static1.squarespace.com/static/556e3e2ae4b0cd951e0fa80d/t/59f92a53085229220f432a5d/1509501557035/Inna%27sKitchen_Swan-Name.png?format=750w";
    item['restaurantDescription'] = "We have moved out of our Newton location. You can now find us at the Boston Public Market downtown, though serving a limited selection than we had in Newton. Sign-up for our Newsletter to stay informed about our upcoming projects, such as mail-order and cooking classes!";
    item['key'] = "fkBYUdssuPWvwhvXaPDa";
    item['restaurantWWW'] = "http://innaskitchen.com/";
    item['restaurantAddress'] = "69 Hamlet street, Newton  MA";
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
