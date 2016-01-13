$(document).ready(init);
var myDate;
var amount;
var desc;
var transTotal = 0;
var balance = 10000;



console.log(formatNum(20000))

function formatNum(num){
	var intNum = parseInt(num).toFixed([2]).toString();
	return "$"+intNum.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

function colorBalance(){
	if (balance >= 0) {
		$('.balanceSpan').addClass('green')
	}  else {
		$('.balanceSpan').addClass('red')
	}
}

function init(){
	styleTable();
	colorBalance();
	var formattedBalance = formatNum(balance);
	var currentDate = moment().format('DD-MM-YYYY');
	$('.balanceSpan').text(formattedBalance);
	$('#dateInput').attr('min', currentDate);
	$('#newTransaction').submit(addTransaction);

}

function styleTable(){
	// $('td').firstChild().css('background-color','black');
	$('td:nth-child(1)').addClass('col-sm-6')
	$('td:nth-child(2)').addClass('col-sm-3')
	$('td:nth-child(3)').addClass('col-sm-3')
	

}


function addTransaction(e){
	e.preventDefault();

	var description = $('#descInput').val();
	var myDate = $('#dateInput').val();
	var myAmount = $('#transAmount').val();
	var formattedDate = moment(myDate).format('ll');
	var numAmount = parseInt(myAmount);
	transTotal += numAmount;
	balance += transTotal;
	$('.balanceSpan').text(balance);

	console.log('transtotal:', transTotal);
	console.log('numAmount:', numAmount);

		// var formattedAmount = formatAmount(myAmount);
	
	console.log(description, formattedDate, myAmount);
	var $tr = $('#template').clone();
	$tr.removeAttr('id');
	$tr.children('.desc').text(description);
	$tr.children('.datePosted').text(formattedDate);
	$tr.children('.amount').text(myAmount)
	$('#transactionList').append($tr);


}

