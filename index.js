document.getElementById('address-submit').onclick = () => {
  let address = document.getElementById('address-input').value
  let div1 = document.createElement('div');
  div1.className = 'address-block rubberBand animated';
  for (let char of address) {
    let div2 = document.createElement('div');
    div2.className = 'color-block';div2.className = 'color-block';
    div2.style.backgroundColor = colors[char]
    div1.appendChild(div2)
  }
  document.getElementsByClassName('address-container')[0].appendChild(div1)
}

var colors = {
  "0": "#1F8DD6",
  "1": "#FBB44C",
  "2": "#FC797A",
  "3": "#2ABB9B",
  "4": "#FC797A",
  "5": "#2ABB9B",
  "6": "#858585",
  "7": "#1F8DD6",
  "8": "#FBB44C",
  "9": "#FFA0A0",
  "0": "#6EB6E5",
  "a": "#FF9672",
  "b": "#68E9AB",
  "c": "#FF9672",
  "d": "#2ABB9B",
  "e": "#FFCE44",
  "f": "#111111",
  "x": "grey"
}
