/*
Author: Jake Grether
Date: 04/11/2020
*/

let str = '';
let barcodeFlag = true
const barcodeCheck = ["TC-CARRIER","TC-PRO","AF11-CA","AF-11FX-DUP-H","AF-11FX-DUP-L","AF-11FX-H","AF-11FX-L","POE-WM","POE-15-12W","POE-24-12W","POE-24-12W-G","POE-24-24W","POE-24-24W-G","POE-24-30W","POE-24-AF5X","POE-48-24W","POE-48-24W-G","POE-50-60W","POE-54V-80W","POE-24-7W-G-WH","POE-24-12W-5P","POE-24-24W-5P","EP-54V-150W-AC","EP-54V-150W-DC","UDC-1","UDC-2","UDC-3","UF-RJ45-1G","UF-RJ45-10G","UF-MM-1G","UF-MM-10G","UF-MM-1G-20","UF-MM-10G-20","UF-SM-10G-20","UF-SM-10G","UF-SM-1G-S","UF-SM-1G-S-20","UF-SM-10G-S-20","UF-SM-10G-S","UF-GP-C+","NS-WM","AFi-P-HD-RM","PBE-5AC-GEN2-FEED-US","PBE-5AC-400-ISO-US","PBE-5AC-ISO-GEN2-US","UB-AM"];

document.addEventListener('keydown', function(e) {
  alert('hello you happy people');
  let items = document.getElementsByClassName('view-item-name')
  if (barcodeFlag & items.length > 0) {
    for (item of items) {
        if(barcodeCheck.includes(item.innerHTML.toUpperCase())){
            let brcd = document.createElement('img');
            brcd.src = `https://www.webarcode.com/barcode/image.php?code=${item.innerHTML}&type=C128B&xres=1&height=50&width=167&font=3&output=png&style=68`;
            brcd.width = '200'
            brcd.style='margin:0px 10px 0px 10px;'
            item.appendChild(brcd);
        }
    }
    barcodeFlag = false;
  }

  //Scanning Multiple MAC Addresses
  if (e.target.id == 'scannedMACAddress' && (e.keyCode == 13 || e.keyCode == 17 || e.keyCode == 74)) {
    if (e.target.value && e.target.value.toUpperCase().includes('MAC_END')) {
      let tempStr = e.target.value
      e.target.value = tempStr.replace(",MAC_END", "")
      return true;
    } else {
      e.target.value += ","
      e.preventDefault();
      return false;
    }
  }
  if (e.target.value && e.target.value.includes("MAC_END") && e.keyCode == 13) {
    e.preventDefault()
    return false
  }

  //Scan barcode to get weight
  if (e.target.value && e.target.value.toUpperCase() == "GET_WEIGHT" && e.keyCode == 13) {
    let weightBtn = document.getElementsByClassName('weighthis');
    weightBtn[0].click();
    e.preventDefault()
    return false
  }

  //Scan barcode to submit
  if (e.target.value && e.target.value.toUpperCase() == "SUBMIT" && e.keyCode == 13) {
    let submitBtn = document.getElementsByClassName('btn_submit');
    submitBtn[0].click()
    e.preventDefault()
    return false
  }

  //Scan barcode to add box
  if (e.target.value && e.target.value.toUpperCase() == "ADD_BOX" && e.keyCode == 13) {
    if (document.getElementsByClassName('itemholder')[0].firstElementChild != null) {
      let addBoxBtn = document.getElementsByClassName("inline-list");
      addBoxBtn[0].firstElementChild.firstElementChild.click()
      e.preventDefault()
      return false
    } else {
      e.preventDefault()
      return false
    }
  }

  //Scan Box Dimensions
  let m = $('#modal-editbox').hasClass('md-show')
  m ? str += e.key.replace(/[^0-9]/g, '') : null
  if (m && e.keyCode == 13) {
    let boxes = document.getElementsByClassName('list_boxtype')[1].childNodes;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].tagName == 'LI' && boxes[i].nodeType != Node.TEXT_NODE) {
        if (boxes[i].innerHTML.replace(/[^0-9]/g, '').includes(str)) {
          boxes[i].click()
          document.getElementById('editBoxSubmit').click()
          str = ''
          break;
        }
      }
    }
    str = ''
  }

})
