console.log('hello world');
url="https://api.dictionaryapi.dev/api/v2/entries/en/"



let btn=document.querySelector('#btn');

async function meaning(){
    let para=document.querySelector('p');
    try{
        let word=document.querySelector('#input').value;
        let ans=await axios.get(url+word);
        let data=ans.data[0];
        let meaning=data.meanings[0];
        let part_of_Speech=meaning.partOfSpeech;
        let definitions=meaning.definitions;
        console.log(word);
        console.log(part_of_Speech);
        para.innerHTML="";
        let ol=document.querySelector('#defination_list');
        ol.innerText=""
        for(i of definitions){
            let li=document.createElement('li');
            li.innerText=i.definition;
            ol.appendChild(li);
        }
        console.log(meaning);
        console.log('in meaning');
        console.log('done');
    }
    catch(err){
        para.innerHTML='sorry there is no meaning <br>please enter a valid word';
        console.log('sorry not meaning please enter a valid word');
    }
}

btn.addEventListener('click',async(event)=>{ 
    let mean=await meaning();
    console.log(mean);
})