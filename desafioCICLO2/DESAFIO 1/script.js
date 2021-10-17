window.onload = function (){

    
    let frutas = [
      
        {produto: "Camu-Camu", preco: 26.80},
        {produto: "Lichia", preco: 180.00},
        {produto: "Pessego da India",  preco: 55.90},   
        {produto: "Physalis", preco: 22.38},   
        {produto: "Pitanga Preta", preco: 19.50},
        {produto: "Romã Americana", preco: 29.90},  
            
    ]

    const lista = document.querySelector('#produtos');
    const cesta = document.querySelector('#cestaDoCliente');
    const totalCesta = document.querySelector('#mostraTotalCompra');
    let total = 0;
        
    (function(){
        for(let obj of frutas){

            const li = document.createElement('li');
            lista.appendChild(li).textContent = `${obj.produto}`;

            const compra = document.createElement('li');

            li.addEventListener('click',function(){ 
                if(li.textContent == compra.textContent){
                  alert('item já selecionado');
                } else {
                    cesta.appendChild(compra).textContent = `${obj.produto}`;
                    total += Number(obj.preco);
                    totalCesta.value = `R$ ${total.toFixed(2)}`;
                    
                }        
            }) 

                compra.addEventListener('click',function(){      
                cesta.removeChild(compra);   
                total -= Number(obj.preco);      
                totalCesta.value = `R$ ${total.toFixed(2)}`
            })     
        }
        
    })()
    
}
    
    