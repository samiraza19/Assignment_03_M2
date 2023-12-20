let  arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",

    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",

    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",

    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",

    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",

    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",

    },
]

const {brand,model,price,camera,ram,rom}=arr

function search(event){
  event.preventDefault();
  let input_js = document.getElementById("input_of_html").value.toLowerCase()
  let search = document.getElementById("search_bar")
  let list_of_html = document.getElementById("list_of_html")
  let select = document.getElementById("select").value  



  const arrFilter = arr.filter(s =>{
    const search = s[select].toString().toLowerCase();
    return search.includes(input_js);
  });


  if (arrFilter.length > 0) {
    list_of_html.innerHTML = '';
    arrFilter.map(s => {
      list_of_html.innerHTML += `
      <li>Brand: ${s.brand}</li>
        <li>Model: ${s.model}</li>
        <li>Price: Rs.${s.price}</li>
        <li>Camera: ${s.camera}</li>
        <li>ram: ${s.ram} GB</li>
        <li>rom: ${s.rom} GB</li>
        <hr>
      `;
    });
  }
   else {
    list_of_html.innerHTML = 'No results found.';
  }




}