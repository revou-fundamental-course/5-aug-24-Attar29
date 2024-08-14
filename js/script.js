let menuList = document.getElementById("menulist");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "100px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

document
  .getElementById("calculateBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    calculateBMI();
  });

document.getElementById("resetBtn").addEventListener("click", function (event) {
  event.preventDefault();
  resetForm();
});

function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  if (isNaN(weight) || isNaN(height) || height === 0) {
    alert("Mohon masukkan nilai berat dan tinggi yang valid");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  let category = "";

  if (bmi < 18.5) {
    category = "Kurus";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Gemuk";
  } else {
    category = "Obesitas";
  }

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `
        <p><strong>Berat Badan Anda:</strong> ${bmi}</p>
        <p><strong>Kategori:</strong> ${category}</p>
        <p>Ini adalah hasil evaluasi berdasarkan nilai BMI yang Anda berikan. Pastikan untuk berkonsultasi dengan profesional medis untuk informasi lebih lanjut tentang kesehatan Anda.</p>
        <p>Untuk informasi lebih lanjut tentang kategori BMI:</p>
        <ul>
            <li>Kurus: Kurang dari 18.5</li>
            <li>Normal: 18.5 - 24.9</li>
            <li>Gemuk: 25 - 29.9</li>
            <li>Obesitas: 30 atau lebih</li>
        </ul>
    `;
}

function resetForm() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("age").value = "";
  document.getElementById("result").innerHTML = "";
}