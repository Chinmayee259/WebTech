        function append(x){
            document.getElementById('display').value += x
        }


        function calculate(){
            let ip = document.getElementById('display').value

            try {
                if (ip === "" || ip===NaN) {
                    throw new Error("Invalid input");
                }

                let result = eval(ip);
                if(!isFinite(result)){
                    throw new Error("Invalid Calculation")
                }
                document.getElementById('display').value = result

            } catch (error) {
                alert(error.message);
                clearScreen()
            }
        }

        function clearScreen(){
            document.getElementById('display').value = " "
        }

        function sq(){
            let num = document.getElementById('display').value

            if(num==="" || num===NaN){
                alert("Enter Valid Number")
                return
            }

            document.getElementById('display').value = `${num*num}`
        }

        function iPrompt(){
            let num = prompt("Enter a Number")
            if(num === null || num.trim() === "" || isNaN(num)){
                alert("Enter a Valid Number")
                return
            }

            document.getElementById('display').value = `${num}`
        }
