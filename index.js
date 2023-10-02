function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData),
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        const userId = data.id;
        document.body.innerHTML = userId;
      })
      .catch(function (error) {
        console.log(error);
        document.body.innerHTML = error.message;
      });
  }
  
  // Example usage:
  submitData("Steve", "steve@steve.com");
  