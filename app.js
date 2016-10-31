$(document).ready(function() {
    // console.log( "ready!" );


    //init monthly info variables
    var monthlySalary = 0;
    var monthlyTotal = 0;


    $("#employeeinfo").on("submit", function(event) {
        event.preventDefault();

        var employee = {};

            // converts the for inputs into an array
        var fields = $("#employeeinfo").serializeArray();

        fields.forEach(function(element, index, array) {
          employee[element.name] = element.value;
        });



        $('#employeeinfo').find('input[type=text]').val('');
        

        appendDom(employee);

          function appendDom(employee) {
            $('#employeeTable').append('<tr class="person"></tr>');               // append to table
            var $el = $('#employeetable').children().last();

            $el.append(
                      '<tr class="listData"><td>' + employee.employeefirstname + ' ' +  employee.employeelastname +'</td><td>' + employee.employeeid + '</td><td>' + employee.employeejobtitle + '</td><td>'+ employee.employeesalary + '</td><td>' + '<button class="delete">Delete</button></td></tr>');
                      //combine first and last names
                      //added delete button at end

          employee.employeesalary = parseInt(employee.employeesalary);

          monthlySalary = parseInt(employee.employeesalary) / 12;
          monthlyTotal = Math.round(monthlyTotal + monthlySalary);        // calculate monthly salary from annual salary


          //append monthly salary info to #money div
          $('.monthlyAmount').empty();
          $('#money').append('<p class ="monthlyAmount"> Monthly Salary Expenditures: ' + monthlyTotal + '$ </p>');


        }
        //delete button
        $('.listData').click(function(){
          $(this).remove('.listData');


    });

  });

});
