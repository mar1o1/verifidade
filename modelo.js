function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano){
        res.innerHTML='[ERRO] Verifique o ano digitado'
        res.style.color = 'red'
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src','bebeH.png')
            }else if(idade <= 25){
                //Jovem
                img.setAttribute('src', 'jovemH.png')
            }else if(idade <=50){
                //Adulto
                img.setAttribute('src', 'adultoH.png')
            }else{
                //Idoso
                img.setAttribute('src', 'vovoH.png')
            }
        }else if(fsex[1].checked){
            genero = "Mulher"
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebeM.png')
            }else if(idade <= 25){
                //Jovem
                img.setAttribute('src', 'jovemM.png')
            }else if(idade <=50){
                //Adulto
                img.setAttribute('src', 'adultoM.png')
            }else{
                //Idoso                
                img.setAttribute('src', 'vovoM.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}
document.getElementById('txtano').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        verificar()
    }
}
)



