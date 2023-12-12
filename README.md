# WebfleetConnect

![Webfleet logo](./webfleet_logo.svg)

#

Library to consume WEBFLEET.connect API.

[![npm version](https://badge.fury.io/js/webfleetconnect.svg)](https://badge.fury.io/js/webfleetconnect)

The WEBFLEET.connect API connects software appli­ca­tions with the Webfleet fleet management solution. Via WEBFLEET.connect you can enhance the value of all types of business solutions, including routing and scheduling optimization, ERP, Transport Management System (TMS), supply chain planning, asset management, and much more.

Check also the version for:

- [ruby](https://github.com/movomx/webfleet_connect)
- [python](https://github.com/movomx/webfleet_connect_python)

## Installation

```javascript
npm install webfleetconnect
```

## Usage

```javascript
const WebfleetConnect = require('webfleetconnect')

const webfleetConnect = WebfleetConnect.create()

webfleetConnect.showObjectReportExtern()
  .then(response => console.log(response))
  .catch(error => console.error(error))
```

`WebfleetConnect.create()` returns a new `Session` object which has the capabilities to request info from the WEBFLEET.connect API.

The Webfleet credential are taken from the env variables `WEBFLEET_CONNECT_ACCOUNT`, `WEBFLEET_CONNECT_USERNAME`, `WEBFLEET_CONNECT_PASSWORD` and `WEBFLEET_CONNECT_APIKEY` (if you want to know more about env variables check [this link](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)).

If your system needs to work with multiple accounts or you need to specify the credentials dynamically for some other reason, you can do it this way:

```javascript
const credentials = { account: 'companyName', username: 'dev', password: 'VLm5PpiZST6U', apikey: 'ZSksD88s-F7Uf' }

const webfleetConnect = WebfleetConnect.create(credentials)
```

When one of the methods is used, for example `showVehicleReportExtern`, it returns an object with the next properties:

```javascript
webfleetConnect.showObjectReportExtern()
  .then(response => console.log(response))
  .catch(error => console.error(error))

response.data       // gets the data as an Array of objects
response.statusCode // gets the status code of the request
response.url        // gets the url to fetch the information from WEBFLEET.connect
response.toString() // returns the data as a string

// On get an error

error.error      // gets the error returned by WEBFLEET.connect
error.statusCode // gets the status code of the request
error.url        // gets the url to fetch the information from WEBFLEET.connect
```

The methods available in this library are the same that are documented in the [WEBFLEET.connect docs page](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html).

### Params

In order to add params to a request is as easy as passing an object of options in the request like:

```javascript
const options = { filterstring: 'ECO', objectgroupname: 'Vehiculos', ungroupedonly: true }

const response = await webfleetConnect.showObjectReportExtern(options)
```

### Extra config

The `Session` object works with the default configuration:

`{ lang: 'en', outputformat: 'csv', useISO8601: false, useUTF8: false }`

but you can change the default configuration when you create the object:

```javascript
const params = {
  account:  'companyName',
  username: 'dev',
  password: 'VLm5PpiZST6U',
  apikey:   'ZSksD88s-F7Uf',
  lang: 'de',
  outputformat: 'json'
}

const webfleetConnect = WebfleetConnect.create(params)
```

### Methods list

Mesage queues:

- [createQueueExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/createqueueextern.html)
- [deleteQueueExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/deletequeueextern.html)
- [popQueueMessagesExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/popqueuemessagesextern.html)
- [ackQueueMessagesExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/ackqueuemessagesextern.html)

Objects:

- [showObjectReportExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showobjectreportextern.html)
- [showVehicleReportExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showvehiclereportextern.html)
- [showNearestVehicles](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/shownearestvehicles.html)
- [showContracts](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showcontracts.html)
- [updateVehicle](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updatevehicle.html)
- [showObjectGroups](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showobjectgroups.html)
- [showObjectGroupObjects](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showobjectgroupobjects.html)
- [attachObjectToGroup](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/attachobjecttogroup.html)
- [detachObjectFromGroup](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/detachobjectfromgroup.html)
- [insertObjectGroup](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/insertobjectgroup.html)
- [deleteObjectGroup](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/deleteobjectgroup.html)
- [updateObjectGroup](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updateobjectgroup.html)
- [switchOutput](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/switchoutput.html)
- [showWakeupTimers](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showwakeuptimers.html)
- [updateWakeupTimers](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updatewakeuptimers.html)
- [getObjectFeatures](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getobjectfeatures.html)
- [updateContractInfo](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updatecontractinfo.html)
- [getObjectCanSignals](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getobjectcansignals.html)
- [getObjectCanMalfunctions](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getobjectcanmalfunctions.html)
- [getElectricVehicleData](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getelectricvehicledata.html)
- [getActiveAssetCouplings](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getactiveassetcouplings.html)

Orders:

- [sendOrderExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/sendorderextern.html)
- [sendDestinationOrderExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/senddestinationorderextern.html)
- [updateOrderExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updateorderextern.html)
- [updateDestinationOrderExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updatedestinationorderextern.html)
- [insertDestinationOrderExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/insertdestinationorderextern.html)
- [cancelOrderExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/cancelorderextern.html)
- [assignOrderExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/assignorderextern.html)
- [reassignOrderExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/reassignorderextern.html)
- [deleteOrderExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/deleteorderextern.html)
- [clearOrdersExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/clearordersextern.html)
- [showOrderReportExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showorderreportextern.html)
- [showOrderWaypoints](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showorderwaypoints.html)

Messages:

- [sendTextMessageExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/sendtextmessageextern.html)
- [clearTextMessagesExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/cleartextmessagesextern.html)
- [showMessages](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showmessages.html)
- [sendBinaryMessage](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/sendbinarymessage.html)
- [resetBinaryMessages](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/resetbinarymessages.html)
- [clearBinaryMessages](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/clearbinarymessages.html)

Drivers:

- [showDriverReportExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showdriverreportextern.html)
- [insertDriverExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/insertdriverextern.html)
- [updateDriverExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updatedriverextern.html)
- [deleteDriverExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/deletedriverextern.html)
- [showOptiDriveIndicator](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showoptidriveindicator.html)
- [showDriverGroups](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showdrivergroups.html)
- [showDriverGroupDrivers](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showdrivergroupdrivers.html)
- [attachDriverToGroup](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/attachdrivertogroup.html)
- [detachDriverFromGroup](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/detachdriverfromgroup.html)
- [insertDriverGroup](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/insertdrivergroup.html)
- [deleteDriverGroup](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/deletedrivergroup.html)
- [updateDriverGroup](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updatedrivergroup.html)
- [attachDriverToVehicle](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/attachdrivertovehicle.html)
- [detachDriverFromVehicle](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/detachdriverfromvehicle.html)
- [getDriverRdtRules](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getdriverrdtrules.html)
- [updateDriverRdtRules](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updatedriverrdtrules.html)

Addresses:

- [showAddressReportExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showaddressreportextern.html)
- [showAddressGroupReportExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showaddressgroupreportextern.html)
- [showAddressGroupAddressReportExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showaddressgroupaddressreporte.html)
- [insertAddressExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/insertaddressextern.html)
- [updateAddressExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updateaddressextern.html)
- [deleteAddressExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/deleteaddressextern.html)
- [attachAddressToGroupExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/attachaddresstogroupextern.html)
- [detachAddressFromGroupExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/detachaddressfromgroupextern.html)
- [insertAddressGroupExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/insertaddressgroupextern.html)
- [deleteAddressGroupExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/deleteaddressgroupextern.html)

Events:

- [showEventReportExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showeventreportextern.html)
- [acknowledgeEventExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/acknowledgeeventextern.html)
- [resolveEventExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/resolveeventextern.html)
- [getEventForwardConfigs](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/geteventforwardconfigs.html)
- [getEventForwardConfigRecipients](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/geteventforwardconfigrecipient.html)
- [insertEventForwardConfig](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/inserteventforwardconfig.html)
- [updateEventForwardConfig](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updateeventforwardconfig.html)
- [deleteEventForwardConfig](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/deleteeventforwardconfig.html)

Trips and working times:

- [showTripReportExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showtripreportextern.html)
- [showTripSummaryReportExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showtripsummaryreportextern.html)
- [showTracks](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showtracks.html)
- [updateLogbook](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updatelogbook.html)
- [showLogbook](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showlogbook.html)
- [showLogbook_history](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showlogbookhistory.html)
- [updateLogbookMode](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updatelogbookmode.html)
- [updateLogbookDriver](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updatelogbookdriver.html)
- [showWorkingTimes](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showworkingtimes.html)
- [showStandStills](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showstandstills.html)
- [showIdleExceptions](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showidleexceptions.html)
- [getObjectKpis](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getobjectkpis.html)
- [getDriverKpis](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getdriverkpis.html)
- [getRemainingDrivingTimesEu](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getremainingdrivingtimeseu.html)

Miscellaneous reports:

- [getChargerConnections](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getchargerconnections.html)
- [showIoReportExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showioreportextern.html)
- [showAccelerationEvents](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showaccelerationevents.html)
- [showSpeedingEvents](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showspeedingevents.html)
- [showDigitalInputStateMileage](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showdigitalinputstatemileage.html)
- [getChargerConnections](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getchargerconnections.html)

Geocoding and routing:

- [geocodeAddress](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/geocodeaddress.html)
- [calcRouteSimpleExtern](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/calcroutesimpleextern.html)

Configuration and security:

- [showSettings](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showsettings.html)
- [createSession](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/createsession.html)
- [terminateSession](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/terminatesession.html)
- [showAccountOrderStates](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showaccountorderstates.html)
- [updateAccountOrderState](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updateaccountorderstate.html)
- [showAccountOrderAutomations](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showaccountorderautomations.html)
- [updateAccountOrderAutomation](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updateaccountorderautomation.html)
- [getAccountStatusMessages](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getaccountstatusmessages.html)
- [getStatusMessages](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getstatusmessages.html)
- [setVehicleConfig](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/setvehicleconfig.html)
- [getVehicleConfig](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getvehicleconfig.html)
- [setStatusMessages](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/setstatusmessages.html)
- [setAccountStatusMessages](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/setaccountstatusmessages.html)

User management:

- [showUsers](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showusers.html)
- [changePassword](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/changepassword.html)

Vehicle maintenance:

- [insertMaintenanceSchedule](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/insertmaintenanceschedule.html)
- [updateMaintenanceSchedule](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updatemaintenanceschedule.html)
- [deleteMaintenanceSchedule](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/deletemaintenanceschedule.html)
- [showMaintenanceSchedules](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showmaintenanceschedules.html)
- [showMaintenanceTasks](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/showmaintenancetasks.html)
- [resolveMaintenanceTask](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/resolvemaintenancetask.html)

Reporting:

- [getArchivedReportList](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getarchivedreportlist.html)
- [getArchivedReport](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getarchivedreport.html)
- [deleteArchivedReport](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/deletearchivedreport.html)
- [getReportList](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getreportlist.html)
- [createReport](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/createreport.html)
- [sendReportViaMail](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/sendreportviamail.html)

Areas:

- [getAreas](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getareas.html)
- [insertArea](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/insertarea.html)
- [deleteArea](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/deletearea.html)
- [updateArea](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/updatearea.html)
- [getAreaPoints](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getareapoints.html)
- [getAreaAssignments](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getareaassignments.html)
- [insertAreaAssignment](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/insertareaassignment.html)
- [deleteAreaAssignment](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/deleteareaassignment.html)
- [getAreaSchedules](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getareaschedules.html)
- [insertAreaSchedule](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/insertareaschedule.html)
- [deleteAreaSchedule](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/deleteareaschedule.html)

LINK.connect:

- [sendAuxDeviceData](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/sendauxdevicedata.html)
- [getLocalAuxDeviceConfig](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getlocalauxdeviceconfig.html)
- [configureLocalAuxDevice](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/configurelocalauxdevice.html)
- [getRemoteAuxDeviceConfig](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/getremoteauxdeviceconfig.html)
- [configureRemoteAuxDevice](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/configureremoteauxdevice.html)
- [removeRemoteAuxDeviceConfig](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/removeremoteauxdeviceconfig.html)
- [clearAuxDeviceDataQueue](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/clearauxdevicedataqueue.html)
- [resetAuxDeviceData](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/resetauxdevicedata.html)

Plugins:

- [insertExternalEvent](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/insertexternalevent.html)
- [setExternalObjectData](https://www.webfleet.com/static/help/webfleet-connect/en_gb/index.html#data/setexternalobjectdata.html)
