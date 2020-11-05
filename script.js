$(".to-pack-button").click(function(){
    let items =$(".to-pack-input").val();
$(".packing-list").append(`<li> ${items}. </li>`);
});
$(".to-do-button").click(function(){
    let chores =$(".to-do-input").val();
$(".toDoList").append(`<ol> ${chores}. </ol>`);
});
