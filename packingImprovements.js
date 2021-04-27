/*
Author: Jake Grether
Date: 04/11/2020
*/

let str = '';
let barcodeFlag = true
const barcodeCheck = ["UF-RJ45-1G","UF-RJ45-10G","UF-MM-1G","UF-MM-10G","UF-MM-1G-20","UF-MM-10G-20","UF-SM-10G-20","UF-SM-10G","UF-SM-1G-S","UF-SM-1G-S-20","UF-SM-10G-S-20","UF-SM-10G-S","UF-GP-C+","PBE-5AC-GEN2-FEED-US","PBE-5AC-400-ISO-US","PBE-5AC-ISO-GEN2-US","UB-AM","POE-WM","AFi-P-HD-RM","AF11-CA","AF-11FX-DUP-H","AF-11FX-DUP-L","AF-11FX-H","AF-11FX-L"]
const aliases = [
    {
      oldSku: "UC-C6-CMR",
      newSku: "U-CABLE-C6-CMR"
    },
    {
      oldSku: "UVC-G4-Doorbell",
      newSku: "UVC-G4-Doorbell-us"
    },
    {
      oldSku: "TC-PRO",
      newSku: "UISP-Cable-Pro"
    },
    {
      oldSku: "TC-carrier",
      newSku: "UISP-Cable-Carrier"
    },
    {
      oldSku: "USW-Aggregation-PRO",
      newSku: "USW-PRO-Aggregation"
    },
    {
      oldSku: "UC-Patch-RJ45",
      newSku: "U-Cable-Patch-RJ45"
    },
    {
      oldSku: "UC-Patch-RJ45-BK",
      newSku: "U-Cable-Patch-RJ45-BK"
    },
    {
      oldSku: "UC-Patch-RJ45-BL",
      newSku: "U-Cable-Patch-RJ45-BL"
    },
    {
      oldSku: "UC-Patch-RJ45-50",
      newSku: "U-Cable-Patch-RJ45-50"
    },
    {
      oldSku: "UC-Patch-RJ45-BK-50",
      newSku: "U-Cable-Patch-RJ45-BK-50"
    },
    {
      oldSku: "UC-Patch-RJ45-BL-50",
      newSku: "U-Cable-Patch-RJ45-BL-50"
    },
    {
      oldSku: "UC-Patch-0.3M-RJ45",
      newSku: "U-Cable-Patch-0.3M-RJ45"
    },
    {
      oldSku: "UC-Patch-1M-RJ45",
      newSku: "U-Cable-Patch-1M-RJ45"
    },
    {
      oldSku: "UC-Patch-2M-RJ45",
      newSku: "U-Cable-Patch-2M-RJ45"
    },
    {
      oldSku: "UC-Patch-3M-RJ45",
      newSku: "U-Cable-Patch-3M-RJ45"
    },
    {
      oldSku: "UC-Patch-5M-RJ45",
      newSku: "U-Cable-Patch-5M-RJ45"
    },
    {
      oldSku: "UC-Patch-8M-RJ45",
      newSku: "U-Cable-Patch-8M-RJ45"
    },
    {
      oldSku: "UC-Patch-0.3M-RJ45-BK",
      newSku: "U-Cable-Patch-0.3M-RJ45-BK"
    },
    {
      oldSku: "UC-Patch-1M-RJ45-BK",
      newSku: "U-Cable-Patch-1M-RJ45-BK"
    },
    {
      oldSku: "UC-Patch-2M-RJ45-BK",
      newSku: "U-Cable-Patch-2M-RJ45-BK"
    },
    {
      oldSku: "UC-Patch-3M-RJ45-BK",
      newSku: "U-Cable-Patch-3M-RJ45-BK"
    },
    {
      oldSku: "UC-Patch-5M-RJ45-BK",
      newSku: "U-Cable-Patch-5M-RJ45-BK"
    },
    {
      oldSku: "UC-Patch-8M-RJ45-BK",
      newSku: "U-Cable-Patch-8M-RJ45-BK"
    },
    {
      oldSku: "UC-Patch-0.3M-RJ45-BL",
      newSku: "U-Cable-Patch-0.3M-RJ45-BL"
    },
    {
      oldSku: "UC-Patch-1M-RJ45-BL",
      newSku: "U-Cable-Patch-1M-RJ45-BL"
    },
    {
      oldSku: "UC-Patch-2M-RJ45-BL",
      newSku: "U-Cable-Patch-2M-RJ45-BL"
    },
    {
      oldSku: "UC-Patch-3M-RJ45-BL",
      newSku: "U-Cable-Patch-3M-RJ45-BL"
    },
    {
      oldSku: "UC-Patch-5M-RJ45-BL",
      newSku: "U-Cable-Patch-5M-RJ45-BL"
    },
    {
      oldSku: "UC-Patch-8M-RJ45-BL",
      newSku: "U-Cable-Patch-8M-RJ45-BL"
    },
    {
      oldSku: "810354021336",
      newSku: "UISP-Cable-Carrier"
    },
    {
      oldSku: "810354021367",
      newSku: "UISP-Cable-Pro"
    },
    {
      oldSku: "810354026249",
      newSku: "U-CABLE-C6-CMR"
    },
    {
      oldSku: "817882021401",
      newSku: "NS-WM"
    },
    {
      oldSku: "810354021176",
      newSku: "POE-15-12W"
    },
    {
      oldSku: "810354021183",
      newSku: "POE-24-12W"
    },
    {
      oldSku: "810354021190",
      newSku: "POE-24-12W-G"
    },
    {
      oldSku: "810354021206",
      newSku: "POE-24-24W"
    },
    {
      oldSku: "810354023552",
      newSku: "POE-24-24W-G"
    },
    {
      oldSku: "810354023569",
      newSku: "POE-24-30W"
    },
    {
      oldSku: "810354023316",
      newSku: "POE-24-AF5X"
    },
    {
      oldSku: "810354021213",
      newSku: "POE-48-24W"
    },
    {
      oldSku: "810354021220",
      newSku: "POE-48-24W-G"
    },
    {
      oldSku: "810354021237",
      newSku: "POE-50-60W"
    },
    {
      oldSku: "810354024580",
      newSku: "POE-54V-80W"
    },
    {
      oldSku: "817882025133",
      newSku: "POE-24-7W-G-WH"
    },
    {
      oldSku: "817882024877",
      newSku: "POE-24-12W-5P"
    },
    {
      oldSku: "817882024914",
      newSku: "POE-24-24W-5P"
    },
    {
      oldSku: "810354025723",
      newSku: "EP-54V-150W-AC"
    },
    {
      oldSku: "810354025730",
      newSku: "EP-54V-150W-DC"
    },
    {
      oldSku: "817882020527",
      newSku: "UDC-1"
    },
    {
      oldSku: "817882020534",
      newSku: "UDC-2"
    },
    {
      oldSku: "817882020541",
      newSku: "UDC-3"
    }
  ];


document.addEventListener('keydown', function(e) {
  console.log(e.keyCode)
  let items = document.getElementsByClassName('view-item-name')
  if (barcodeFlag && items.length > 0) {
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
  if(items.length > 0 && e.target.value && e.keyCode == 13){
    for(item of items){
      if(e.target.value != item.innerHTML.toUpperCase()){
        for(alias of aliases){
          if(e.target.value && e.target.value.toUpperCase() == alias.oldSku.toUpperCase()){
              e.target.value = alias.newSku.toUpperCase();
              console.log(e.target.value)
          }
        }
      }
    }
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
    alert('hello')
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
