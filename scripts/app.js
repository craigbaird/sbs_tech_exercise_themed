var originDataObject = {};
var destinationDataObject = {};
var requesterDataObject = {};
var gridDataObject = {};
var quoteDataObject = {};

$(document).ready(function(){

    $('#submitReqBtn').on('click', function(){
      getOriginFormData();
      getDestinationFormData();
      getRequesterFormData();
      getGridFormData();
      getQuoteFormData();
    });

  }); // end document.ready

function getOriginFormData() {
  originDataObject.name = $('#originName').val();
  originDataObject.contact = $('#originContact').val();
  originDataObject.street = $('#originStreet').val();
  originDataObject.city = $('#originCity').val();
  originDataObject.state = $('#originState').val();
  originDataObject.postalcode = $('#originPostalCode').val();
  originDataObject.country = $('#originCountry').val();
  originDataObject.phone = $('#originPhone').val();
  originDataObject.email = $('#originEmail').val();
  originDataObject.incoterms = $('#originIncoterms').val();
  console.log('originDataObject', originDataObject);
}

function getDestinationFormData() {
  destinationDataObject.name = $('#destinationName').val();
  destinationDataObject.contact = $('#destinationContact').val();
  destinationDataObject.street = $('#destinationStreet').val();
  destinationDataObject.city = $('#destinationCity').val();
  destinationDataObject.state = $('#destinationState').val();
  destinationDataObject.postalCode = $('#destinationPostalCode').val();
  destinationDataObject.country = $('#destinationCountry').val();
  destinationDataObject.phone = $('#destinationPhone').val();
  destinationDataObject.email = $('#destinationEmail').val();
  console.log('destinationDataObject', destinationDataObject);
}

function getRequesterFormData() {
  requesterDataObject.name = $('#requesterName').val();
  requesterDataObject.department = $('#requesterDepartment').val();
  requesterDataObject.location = $('#requesterLocation').val();
  requesterDataObject.phone = $('#requesterPhone').val();
  requesterDataObject.email = $('#requesterEmail').val();
  console.log('requesterDataObject', requesterDataObject);
}

function getGridFormData() {
  gridDataObject.item1 = $('#A1').val();
  gridDataObject.item2 = $('#B1').val();
  gridDataObject.item3 = $('#C1').val();
  gridDataObject.item4 = $('#D1').val();
  gridDataObject.item5 = $('#E1').val();

  gridDataObject.count1 = $('#A2').val();
  gridDataObject.count2 = $('#B2').val();
  gridDataObject.count3 = $('#C2').val();
  gridDataObject.count4 = $('#D2').val();
  gridDataObject.count5 = $('#E2').val();

  gridDataObject.unit1 = $('#A3').val();
  gridDataObject.unit2 = $('#B3').val();
  gridDataObject.unit3 = $('#C3').val();
  gridDataObject.unit4 = $('#D3').val();
  gridDataObject.unit5 = $('#E3').val();

  gridDataObject.length1 = $('#A4').val();
  gridDataObject.length2 = $('#B4').val();
  gridDataObject.length3 = $('#C4').val();
  gridDataObject.length4 = $('#D4').val();
  gridDataObject.length5 = $('#E4').val();

  gridDataObject.width1 = $('#A5').val();
  gridDataObject.width2 = $('#B5').val();
  gridDataObject.width3 = $('#C5').val();
  gridDataObject.width4 = $('#D5').val();
  gridDataObject.width5 = $('#E5').val();

  gridDataObject.height1 = $('#A6').val();
  gridDataObject.height2 = $('#B6').val();
  gridDataObject.height3 = $('#C6').val();
  gridDataObject.height4 = $('#D6').val();
  gridDataObject.height5 = $('#E6').val();

  gridDataObject.unitM1 = $('#A7').val();
  gridDataObject.unitM2 = $('#B7').val();
  gridDataObject.unitM3 = $('#C7').val();
  gridDataObject.unitM4 = $('#D7').val();
  gridDataObject.unitM5 = $('#E7').val();

  gridDataObject.weight1 = $('#A8').val();
  gridDataObject.weight2 = $('#B8').val();
  gridDataObject.weight3 = $('#C8').val();
  gridDataObject.weight4 = $('#D8').val();
  gridDataObject.weight5 = $('#E8').val();

  gridDataObject.unitWt1 = $('#A9').val();
  gridDataObject.unitWt2 = $('#B9').val();
  gridDataObject.unitWt3 = $('#C9').val();
  gridDataObject.unitWt4 = $('#D9').val();
  gridDataObject.unitWt5 = $('#E9').val();

  gridDataObject.cargoReadyDate = $('#cargoReadyDate').val();
  gridDataObject.cargoDueDate = $('#cargoDueDate').val();
  console.log('gridDataObject', gridDataObject);
}

function getQuoteFormData() {
  quoteDataObject.twentyFourHrs = $('#24hrs').val();
  quoteDataObject.standard = $('#standard').val();
  quoteDataObject.oneHour = $('#1hour').val();
  quoteDataObject.thirtyMin = $('#30minutes').val();
  quoteDataObject.truck = $('#truck').val();
  quoteDataObject.specialRequests = $('specialRequests').val();
  console.log('quoteDataObject', quoteDataObject);

}
