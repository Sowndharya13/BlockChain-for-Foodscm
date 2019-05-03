
/**
 * Write your transction processor functions here
 */
/**
 * Create Ticket Transaction
 * @param {org.marinefoods.foodscm.item.CreateItemLog} itemData
 * @transaction
 */


function  CreateItemLog(itemData){

    // 1. Get the asset registry
    return getAssetRegistry('org.marinefoods.foodscm.item.Item')
        .then(function(itemRegistry){
            // Now add new item
            // 2. Get resource factory
            var factory = getFactory();
            var NS      =  'org.marinefoods.foodscm.item';
            // generate the item ID
            // 2.1 Set the itemNumber, itemId ... 
            // 3. Create the Resource instance
            var  itemId     = generateItemtId(itemData.location,itemData.itemSource,itemData.FishingDate); ///Solution to exercise - Removed hardcoded value & invoked
            var  item       = factory.newResource(NS,'Item',itemId);   
            // 4. Set the relationship
            item.containerId    = itemData.containerId; //1
            item.itemId         = itemId; 
            let currentParticipant   = getCurrentParticipant();
            currentParticipant =   currentParticipant.getFullyQualifiedIdentifier();
            var myJSON = JSON.stringify(currentParticipant);
      
             var fcurrentParticipant = myJSON.split("#")[1];
             var participantName = fcurrentParticipant.split("\\\"")[0];
             participantName	=	participantName.replace("\\", "");

            item.participantKey = participantName;
            item.FishingDate    = itemData.FishingDate; //3
            item.outDate        = itemData.outDate; //4
            item.expiryDate     = itemData.expiryDate; //5 
            item.location       = itemData.location; //7
            item.CurrentOwner   = itemData.CurrentOwner; //8
            item.preservationDetail  = itemData.preservationDetail; //9
             // 5. Create a new concept using the factory & set the data in it
            var itemDetail = factory.newConcept(NS,"ItemDetail"); 
            
            itemDetail.itemSpecies = itemData.itemSpecies;
            itemDetail.itemtype    = itemData.itemtype;
            itemDetail.weightInKg  = itemData.weightInKg;
           
            item.itemDetail   = itemDetail; //c1
            
            // 6. Create a new concept using the factory & set the data in it
            var processingDetail = factory.newConcept(NS,"ProcessingDetail");
            
            processingDetail.processingAgentId = itemData.processingAgentId;
            processingDetail.processingMethod  = itemData.processingMethod;
            processingDetail.ingredientsUsed   = itemData.ingredientsUsed;
            processingDetail.processingTime    = itemData.processingTime;

            item.processingDetail   = processingDetail; //c2
            item.itemSource = itemData.itemSource; //e
             console.log("Item:", item);
            // 6. Emit the event FlightCreated
            var event = factory.newEvent(NS, 'LogCreated');
            event.itemId = itemId;
            emit(event);

            return itemRegistry.addAll([item]);
        });
}

/****
 * Creates the item id from the location, itemSource, FishingDate
 * Solution to Exercise.
 */
function generateItemtId(location, itemSource, FishingDate){
    var dt = new Date(FishingDate)

    // Date & Month needs to be in the format 01 02 
    // so add a '0' if they are single digits
    var month = dt.getMonth()+1;
    if((month+'').length == 1)  month = '0'+month;
    var dayNum = dt.getDate();
    if((dayNum+'').length == 1)  dayNum = '0'+dayNum;

    // console.log(dayNum,month,dt.getFullYear())

    return location+'-'+itemSource+'-'+dayNum+'-'+month+'-'+(dt.getFullYear()+'').substring(0,4);
}


/**
 * Create Ticket Transaction
 * @param {org.marinefoods.foodscm.item.UpdateItemLog} updateItemData
 * @transaction
 */

function    UpdateItemLog(updateItemData){
    var itemRegistry={}

    return getAssetRegistry('org.marinefoods.foodscm.item.Item')
    .then(function(registry){
        itemRegistry = registry
        return itemRegistry.get(updateItemData.itemId);
    }).then(function(item){
       if(!item) throw new Error("Item : "+updateItemData.itemId," Not Found!!!");
      
       var  factory = getFactory();
      
       item.outDate        = updateItemData.outDate
       item.location       = updateItemData.location;
       item.CurrentOwner   = updateItemData.CurrentOwner;
       item.containerId     = updateItemData.containerId;
       item.expiryDate     = updateItemData.expiryDate;
       item.processingDetail  = updateItemData.processingDetail;
    
       return itemRegistry.update(item);
   })  .then(function(){
    // Successful update
    var event = getFactory().newEvent('org.marinefoods.foodscm.item', 'LogUpdated');
    event.itemId = updateItemData.itemId;
    emit(event);
 }).catch(function(error){
    throw new Error(error);
});
  
}