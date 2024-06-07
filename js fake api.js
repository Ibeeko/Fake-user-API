const apiURL = "https://randomuser.me/api/";

        async function getRandomUser(){
            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress1").textContent = user.email
                document.getElementById("user-img1").src = user.picture.large;
                document.getElementById("name1").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address1").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber1").textContent = user.phone;
            }
            
            catch(error){
                console.error("problem with fetch", error);
            }

            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress2").textContent = user.email
                document.getElementById("user-img2").src = user.picture.large;
                document.getElementById("name2").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address2").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber2").textContent = user.phone;
            }
            catch(error){
                console.error("problem with fetch", error);
            }

            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress3").textContent = user.email
                document.getElementById("user-img3").src = user.picture.large;
                document.getElementById("name3").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address3").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber3").textContent = user.phone;
            }
            catch(error){
                console.error("problem with fetch", error);
            }

            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress3").textContent = user.email
                document.getElementById("user-img3").src = user.picture.large;
                document.getElementById("name3").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address3").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber3").textContent = user.phone;
            }
            catch(error){
                console.error("problem with fetch", error);
            }

            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress4").textContent = user.email
                document.getElementById("user-img4").src = user.picture.large;
                document.getElementById("name4").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address4").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber4").textContent = user.phone;
            }
            catch(error){
                console.error("problem with fetch", error);
            }

            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress5").textContent = user.email
                document.getElementById("user-img5").src = user.picture.large;
                document.getElementById("name5").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address5").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber5").textContent = user.phone;
            }
            catch(error){
                console.error("problem with fetch", error);
            }

            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress5").textContent = user.email
                document.getElementById("user-img5").src = user.picture.large;
                document.getElementById("name5").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address5").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber5").textContent = user.phone;
            }
            catch(error){
                console.error("problem with fetch", error);
            }

            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress6").textContent = user.email
                document.getElementById("user-img6").src = user.picture.large;
                document.getElementById("name6").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address6").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber6").textContent = user.phone;
            }
            catch(error){
                console.error("problem with fetch", error);
            }

            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress7").textContent = user.email
                document.getElementById("user-img7").src = user.picture.large;
                document.getElementById("name7").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address7").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber7").textContent = user.phone;
            }
            catch(error){
                console.error("problem with fetch", error);
            }

            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress8").textContent = user.email
                document.getElementById("user-img8").src = user.picture.large;
                document.getElementById("name8").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address8").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber8").textContent = user.phone;
            }
            catch(error){
                console.error("problem with fetch", error);
            }

            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress9").textContent = user.email
                document.getElementById("user-img9").src = user.picture.large;
                document.getElementById("name9").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address9").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber9").textContent = user.phone;
            }
            catch(error){
                console.error("problem with fetch", error);
            }

            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress10").textContent = user.email
                document.getElementById("user-img10").src = user.picture.large;
                document.getElementById("name10").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address10").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber10").textContent = user.phone;
            }
            catch(error){
                console.error("problem with fetch", error);
            }

            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress11").textContent = user.email
                document.getElementById("user-img11").src = user.picture.large;
                document.getElementById("name11").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address11").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber11").textContent = user.phone;
            }
            catch(error){
                console.error("problem with fetch", error);
            }

            try{
                const response = await fetch(apiURL);
                if (!response.ok){
                    alert("Network issues")
                }
                const data = await response.json();
                console.log(data.results);
                let user = data.results[0];
                document.getElementById("emailaddress12").textContent = user.email
                document.getElementById("user-img12").src = user.picture.large;
                document.getElementById("name12").textContent = user.name.first + " " + user.name.last;
                document.getElementById("address12").textContent = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state + " " + user.location.country;
                document.getElementById("phonenumber12").textContent = user.phone;
            }
            catch(error){
                console.error("problem with fetch", error);
            }
        }
        document.getElementById("btn-card").addEventListener("click", getRandomUser);

        