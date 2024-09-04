function generate()
{
    document.querySelector("button").addEventListener("click", function(event) {
        const start = document.getElementById('start').value;
        const startNum = parseInt(start);

        const end = document.getElementById('end').value;
        const endNum = parseInt(end);

        let evenNumber = [];
        let oddNumber = [];
    
        for(let i=startNum; i<=endNum; i++)
        {
            if(i%2 === 0)
                evenNumber.push(i);
            else
                oddNumber.push(i);
        }

        document.getElementById('even').innerHTML = `Even Numbers are: ${evenNumber}`;
        document.getElementById('odd').innerHTML = `Odd Numbers are: ${oddNumber}`;
        // console.log(evenNumber);
        // console.log(oddNumber);
        // console.log(start);
        // console.log(end);
    });
}

generate();