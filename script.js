const GenerateBtn = document.querySelector('form button');
const qrBoxCode = document.querySelector('.qr-code');
const qrInput = document.querySelector('form input');
const qrImage = document.querySelector('.qr-code img');

GenerateBtn.addEventListener('click' , () => {
    let qrValue = qrInput.value;
    if (!qrValue){
        return alert('لطفا یه متن یا آدرس وارد بکن!')
    }
    GenerateBtn.innerHTML = 'درحال دریافت QR Code'
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImage.addEventListener('load' , ()=>{ 
        qrBoxCode.classList.remove('hidden');
        GenerateBtn.innerHTML = 'تولیدQR Code' 
    })
})
qrInput.addEventListener('keyup' , ()=>{
    if(!qrInput.value){
        qrBoxCode.classList.add('hidden');
    }
})