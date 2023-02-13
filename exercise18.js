// Make an AJAX call to the server to add the new candidate
$(document).ready(function () {
  // Add click event handler to the "Add" button
  $("#add-candidate").click(function () {
    // Show a dialog to input the new candidate information
    var newCandidate = {};
    newCandidate.name = prompt("Enter the candidate's name:");
    newCandidate.lastName = prompt("Enter the candidate's last name:");
    newCandidate.phone = prompt("Enter the candidate's phone number:");

    $.ajax({
      type: "POST",
      url: "/candidates",
      data: newCandidate,
      success: function (data) {
        // Add the new candidate to the table
        $("#candidate-list").append(
          "<tr>" +
            "<td>" +
            data.name +
            "</td>" +
            "<td>" +
            data.lastName +
            "</td>" +
            "<td>" +
            data.phone +
            "</td>" +
            "<td><a class='edit-candidate'>Edit</a> / <a class='delete-candidate'>Delete</a></td>" +
            "</tr>"
        );
      },
    });
  });

  // Add click event handlers to the "Edit" and "Delete" links in the table
  $("#candidate-list").on("click", ".edit-candidate", function () {
    // Get the candidate information from the table
    // Get the candidate information from the table
    var candidateId = $(this).closest("tr").data("id");
    var candidateName = $(this).closest("tr").find("td:first").text();
    var candidateLastName = $(this)
      .closest("tr")
      .find("td:nth-child(2)")
      .text();
    var candidatePhone = $(this).closest("tr").find("td:nth-child(3)").text();

    var updatedCandidate = {};
    updatedCandidate.id = candidateId;
    updatedCandidate.name = prompt(
      "Enter the updated candidate name:",
      candidateName
    );
    updatedCandidate.lastName = prompt(
      "Enter the updated candidate last name:",
      candidateLastName
    );
    updatedCandidate.phone = prompt(
      "Enter the updated candidate phone number:",
      candidatePhone
    );

    // Make an AJAX call to the server to update the candidate
    $.ajax({
      type: "PUT",
      url: "/candidates/" + candidateId,
      data: updatedCandidate,
      success: function (data) {
        // Update the candidate information in the table
        $(this).closest("tr").find("td:first").text(data.name);
        $(this).closest("tr").find("td:nth-child(2)").text(data.lastName);
        $(this).closest("tr").find("td:nth-child(3)").text(data.phone);
      },
    });
  });

  $("#candidate-list").on("click", ".delete-candidate", function () {
    // Get the candidate information from the table
    var candidateId = $(this).closest("tr").data("id");
    var candidateName = $(this).closest("tr").find("td:first").text();
    var candidateLastName = $(this)
      .closest("tr")
      .find("td:nth-child(2)")
      .text();
    var candidatePhone = $(this).closest("tr").find("td:nth-child(3)").text();

    var updatedCandidate = {};
    updatedCandidate.id = candidateId;
    updatedCandidate.name = prompt(
      "Enter the updated candidate name:",
      candidateName
    );
    updatedCandidate.lastName = prompt(
      "Enter the updated candidate last name:",
      candidateLastName
    );
    updatedCandidate.phone = prompt(
      "Enter the updated candidate phone number:",
      candidatePhone
    );

    // Make an AJAX call to the server to delete the candidate
    $.ajax({
      type: "DELETE",
      url: "/candidates/" + candidateId,
      success: function () {
        // Remove the candidate from the table
        $(this).closest("tr").remove();
      },
    });
  });

  // Make an AJAX call to the server to retrieve all the candidates
  $.ajax({
    type: "GET",
    url: "/candidates",
    success: function (data) {
      // Populate the table with the candidate information
      for (let i = 0; i < data.length; i++) {
        $("#candidate-list").append(
          "<tr>" +
            "<td>" +
            data[i].name +
            "</td>" +
            "<td>" +
            data[i].lastName +
            "</td>" +
            "<td>" +
            data[i].phone +
            "</td>" +
            "<td><a class='edit-candidate'>Edit</a> / <a class='delete-candidate'>Delete</a></td>" +
            "</tr>"
        );
      }
    },
  });
});
