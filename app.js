$(document).ready(function() {
    // console.log( "ready!" );

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

        //console.log(employee);

        $('#employeeinfo').find('input[type=text]').val('');

        appendDom(employee);


        function appendDom(employee){
          $("#container").append('<div class="person"></div>');
          var $el = $("#container").children().last();

          employee.employeesalary = parseInt(employee.employeesalary);

          $el.append('<p class="empInfo">' + employee.employeefirstname + ' ' + employee.employeelastname +
          + employee.employeeid + employee.employeejobtitle + employee.employeesalary +
          '<button class="delete">Delete</button></p>');



          monthlySalary = parseInt(employee.employeesalary) / 12;
          monthlyTotal = Math.round(monthlyTotal + monthlySalary);

          $('.monthlyAmount').empty();
          $('#money').append('<p class ="monthlyAmount"> Monthly Salary Expenditures: ' + monthlyTotal + '$ </p>');


          $('.testClass').empty();
          $('#test').append('<p class =".testClass"> Test class for ID: ' + employee.employeeid + '!!</p>');

        }

        $('.empInfo').click(function(){
          $(this).remove('.empInfo');


    });

  });

});
