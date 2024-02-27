function generateMatrixInput() {
    var Arow = document.getElementById("Arow").value;
    var Acolumn = document.getElementById("Acolumn").value;
    var Brow = document.getElementById("Brow").value;
    var Bcolumn = document.getElementById("Bcolumn").value;

    // Check if the number of columns in A matches the number of rows in B
    if (Acolumn != Brow) {
        alert("Number of columns in Matrix A must be equal to the number of rows in Matrix B.");
        return;
    }

    var matrixAInputsContainer = document.getElementById("matrixAInputs");
    var matrixBInputsContainer = document.getElementById("matrixBInputs");

    matrixAInputsContainer.innerHTML = ''; // Clear previous inputs
    matrixBInputsContainer.innerHTML = '';

    // Display Matrix A inputs
    matrixAInputsContainer.innerHTML += '<div class="matrix-label">Matrix A:</div>';
    for (var i = 0; i < Arow; i++) {
        matrixAInputsContainer.innerHTML += '<div>';
        for (var j = 0; j < Acolumn; j++) {
            var input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("class", "matrix-input");
            input.setAttribute("placeholder", "A[" + (i + 1) + "][" + (j + 1) + "]");
            matrixAInputsContainer.appendChild(input);
        }
        matrixAInputsContainer.innerHTML += '</div>';
    }

    // Display Matrix B inputs
    matrixBInputsContainer.innerHTML += '<div class="matrix-label">Matrix B:</div>';
    for (var i = 0; i < Brow; i++) {
        matrixBInputsContainer.innerHTML += '<div>';
        for (var j = 0; j < Bcolumn; j++) {
            var input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("class", "matrix-input");
            input.setAttribute("placeholder", "B[" + (i + 1) + "][" + (j + 1) + "]");
            matrixBInputsContainer.appendChild(input);
        }
        matrixBInputsContainer.innerHTML += '</div>';
    }

    // Clear previous output
    document.getElementById("result").innerHTML = '';
}

function calculateResult() {
    var Arow = document.getElementById("Arow").value;
    var Acolumn = document.getElementById("Acolumn").value;
    var Brow = document.getElementById("Brow").value;
    var Bcolumn = document.getElementById("Bcolumn").value;

    var matrixA = [];
    var matrixB = [];

    // Get values from Matrix A inputs
    for (var i = 0; i < Arow; i++) {
        var row = [];
        for (var j = 0; j < Acolumn; j++) {
            var input = document.getElementById("matrixAInputs").getElementsByTagName("input")[(i * Acolumn) + j];
            row.push(Number(input.value));
        }
        matrixA.push(row);
    }

    // Get values from Matrix B inputs
    for (var i = 0; i < Brow; i++) {
        var row = [];
        for (var j = 0; j < Bcolumn; j++) {
            var input = document.getElementById("matrixBInputs").getElementsByTagName("input")[(i * Bcolumn) + j];
            row.push(Number(input.value));
        }
        matrixB.push(row);
    }

    // Perform matrix multiplication
    var resultMatrix = [];
    for (var i = 0; i < Arow; i++) {
        var row = [];
        for (var j = 0; j < Bcolumn; j++) {
            var sum = 0;
            for (var k = 0; k < Acolumn; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        resultMatrix.push(row);
    }

    // Display the result
    var resultHtml = '<div class="matrix-label">Result:</div>';
    resultHtml += '<div>';
    for (var i = 0; i < Arow; i++) {
        for (var j = 0; j < Bcolumn; j++) {
            resultHtml += resultMatrix[i][j] + ' ';
        }
        resultHtml += '<br>';
    }
    resultHtml += '</div>';

    document.getElementById("result").innerHTML = resultHtml;
}
