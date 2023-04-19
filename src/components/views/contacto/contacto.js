 document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jfwz9jkeha.execute-api.eu-west-1.amazonaws.com/default/contact-form-lambda");
        xhr.addEventListener("load", function() {
          if (xhr.status === 200) {
            document.getElementById("alert-success").style.display = "block";
          } else {
            document.getElementById("alert-error").style.display = "block";
          }
        });
        xhr.addEventListener("error", function() {
          document.getElementById("alert-error").style.display = "block";
        });
        var formData = new FormData(document.getElementById("contact-form"));
        var jsonData = JSON.stringify(Object.fromEntries(formData));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(jsonData);
      });