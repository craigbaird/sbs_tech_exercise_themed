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
  gridDataObject.item1 = $('#A1').text();
  gridDataObject.item2 = $('#B1').text();
  gridDataObject.item3 = $('#C1').text();
  gridDataObject.item4 = $('#D1').text();
  gridDataObject.item5 = $('#E1').text();

  gridDataObject.count1 = $('#A2').text();
  gridDataObject.count2 = $('#B2').text();
  gridDataObject.count3 = $('#C2').text();
  gridDataObject.count4 = $('#D2').text();
  gridDataObject.count5 = $('#E2').text();

  gridDataObject.unit1 = $('#A3').text();
  gridDataObject.unit2 = $('#B3').text();
  gridDataObject.unit3 = $('#C3').text();
  gridDataObject.unit4 = $('#D3').text();
  gridDataObject.unit5 = $('#E3').text();

  gridDataObject.length1 = $('#A4').text();
  gridDataObject.length2 = $('#B4').text();
  gridDataObject.length3 = $('#C4').text();
  gridDataObject.length4 = $('#D4').text();
  gridDataObject.length5 = $('#E4').text();

  gridDataObject.width1 = $('#A5').text();
  gridDataObject.width2 = $('#B5').text();
  gridDataObject.width3 = $('#C5').text();
  gridDataObject.width4 = $('#D5').text();
  gridDataObject.width5 = $('#E5').text();

  gridDataObject.height1 = $('#A6').text();
  gridDataObject.height2 = $('#B6').text();
  gridDataObject.height3 = $('#C6').text();
  gridDataObject.height4 = $('#D6').text();
  gridDataObject.height5 = $('#E6').text();

  gridDataObject.unitM1 = $('#A7').text();
  gridDataObject.unitM2 = $('#B7').text();
  gridDataObject.unitM3 = $('#C7').text();
  gridDataObject.unitM4 = $('#D7').text();
  gridDataObject.unitM5 = $('#E7').text();

  gridDataObject.weight1 = $('#A8').text();
  gridDataObject.weight2 = $('#B8').text();
  gridDataObject.weight3 = $('#C8').text();
  gridDataObject.weight4 = $('#D8').text();
  gridDataObject.weight5 = $('#E8').text();

  gridDataObject.unitWt1 = $('#A9').text();
  gridDataObject.unitWt2 = $('#B9').text();
  gridDataObject.unitWt3 = $('#C9').text();
  gridDataObject.unitWt4 = $('#D9').text();
  gridDataObject.unitWt5 = $('#E9').text();

  gridDataObject.cargoReadyDate = $('#cargoReadyDate').val();
  gridDataObject.cargoDueDate = $('#cargoDueDate').val();
  console.log('gridDataObject', gridDataObject);
}

function getQuoteFormData() {
  quoteDataObject.twentyFourHrs= $('input[name=24hrs]:checked').val();
  quoteDataObject.standard= $('input[name=standard]:checked').val();
  quoteDataObject.oneHour= $('input[name=1hour]:checked').val();
  quoteDataObject.thirtyMin= $('input[name=30minutes]:checked').val();

  if ( $('#truck').is(':checked') ) {
    quoteDataObject.truck = true;
  }
  else {
    quoteDataObject.truck = false;
  }

  quoteDataObject.specialRequests = $('#specialRequests').val();
  console.log('quoteDataObject', quoteDataObject);

}
