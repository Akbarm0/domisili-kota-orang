function simpanDomisili() {
  const nama = document.getElementById("nama").value;
  const kota = document.getElementById("kota").value;
  const output = document.getElementById("output");

  if (nama && kota) {
    output.innerHTML += `<p>${nama} tinggal di ${kota}</p>`;
  } else {
    alert("Lengkapi nama dan kota!");
  }
}
