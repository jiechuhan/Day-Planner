$(document).ready(function () {
    // adding date
    var date = moment().format("dddd, MMMM Do");
    $(".jumbotron").append(date);


    // local storage
    function display() {
        for (i = 9; i <= 17; i++) {
            var store = localStorage.getItem(i);
            if (store != null) {
                $("#" + i).val(store)
            }
        }
    }
    display()
    

    // change color
    function changeColor() {
        for (i = 9; i <= 17; i++) {
            var hour = parseInt(moment().format("H"))
            if (hour === i) {
                $("#" + i).removeClass('bg-secondary').addClass('bg-danger');
            } else if (hour < i) {
                $("#" + i).removeClass('bg-secondary').addClass('bg-success');
            }
        }
    }
    changeColor()
});


function save(id) {
    localStorage.setItem(id, $("#" + id).val());
}
