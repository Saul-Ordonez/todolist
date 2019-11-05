function ToDoLists() {
  this.people = [],
  this.currentId = 0
}
ToDoLists.prototype.addTask = function(person) {
  person.id = this.assignId();
  this.people.push(person);
}
ToDoLists.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
// ToDoLists.prototype.deleteTask = function(id){
//   for (var i=0; i< this.people.length; i++){
//     if(this.people[i]){
//       if(this.people[i].id == id){
//         delete this.people[i];
//         return true;
//       }
//     }
//   };
//   return false;

function Task(who, what, when){
  this.who = who,
  this.what = what,
  this.when = when
}
var toDoLists = new ToDoLists();

$(document).ready(function(){
  $(".form-Todo").submit(function(event){
    event.preventDefault()

  var nameInput = $("#name").val();
  var whatInput = $("#taskInput").val();
  var whenInput = $("#dateInput").val();

  console.log(toDoLists);
  // console.log(this.currentId);
  // console.log(Task.assignId)
  // $("#firstPersonInput").append("<li>" + person1 + "</li>");

  $("#firstPersonInput").append(`<li><input class="checked" type='checkbox' id='personId' value="${person.id}"> ${person.who} needs to ${person.what} ${person.when}</li>`);
 $(".deleteList").submit(function(event){
   event.preventDefault()
   var removeTask = $(".checked").val()
   console.log(removeTask)
   var person = new Task(nameInput, whatInput, whenInput)
   toDoLists.addTask(person)
   displayTaskInfo(toDoLists);
  //   $("removeTask").hide()
})



});
});
