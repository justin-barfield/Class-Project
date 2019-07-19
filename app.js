var newDataCount = [];
    
$('#submit').on('click', function() {
    event.preventDefault();


    var employeeName = $('#employee-name').val();
    var role = $('#role').val();
    var startDate = $('#start-date').val();
    var monthlyRate = $('#monthly-rate').val();
    console.log(employeeName, role, startDate, monthlyRate);

    newDataCount.push(employeeName, role, startDate, monthlyRate);

    $.each(newDataCount, function(index, value) {
        var newDiv = $('<div>');
        $('#employee-chart').append(newDiv.text(value).attr({
            class: 'col-sm-2',
            
        }))
    });

    
    

    // look at id
    // var employeeChart = $('#employee-chart');
    // var newDiv = $('<div>');

    // employeeChart.append(newDiv.text(employeeName));
    // employeeChart.append(newDiv.text(role));
    // employeeChart.append(newDiv.text(startDate));
    // employeeChart.append(newDiv.text(monthlyRate));

    $('#employee-name').val('');
    $('#role').val('');
    $('#start-date').val('');
    $('#monthly-rate').val('');
})