
    document.querySelector('input[type="checkbox"]').addEventListener('change',function(){
        var array = Array.from(document.querySelectorAll("button"))
        if(this.checked)
        {
            array.map(x=>x.style.color = 'white');
        }
        else
        {
            array.map(x=>x.style.color = 'blue');
        }
    });
        var first;
        var nr = 0;
        var antal = 0;
       var v=8; //antal rutor
        var mainarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I","K","L","M"];
       var array=mainarray.slice(0,8);
        array=array.concat(array);
        var kvar=array.length;
        var solved=[];
        array = shuffleArray(array);
        var buttons = array.map(x => `<button>${x}</button>`)
        var main = document.querySelector("main");
        main.innerHTML = buttons.join("");
        var array = Array.from(document.querySelectorAll("button"))
        var a = array.map(x => x.addEventListener('click', function () {
            this.style.color = 'white';
            compare(this)
        }))

        //Jämför first och second
        function compare(obj) {
            antal++;
            if (nr == 0) {
                first = obj; nr++;
                 first.disabled=true;
            }
            else {
             
                if (first.innerHTML == obj.innerHTML) {
                   hit(first,obj)
                }
                else {
                    miss(first, obj)
                }
                nr = 0;
            }
           end()
        }
       
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
        function hit(first,obj)
        {
           kvar-=2;
           first.classList.add("klar");
            obj.classList.add("klar");
          first.disabled=true;
          obj.disabled=true;
          solved.push(first);
          solved.push(obj);
          
        }
        
        function miss(first, obj) {
            first.style.color = 'white';
                        obj.style.color = 'white';  
           disable();
            var v = setTimeout(function () {
                enable();
                         first.style.color= "blue";
                          obj.style.color= "blue";
                    }, 1000);
        }
        
        function disable()
        {
           var array= Array.from(  document.querySelectorAll("button") );
           array.map(x=>x.disabled=true)
        }
        function enable()
        {
             var array= Array.from(  document.querySelectorAll("button") );
           array.map(x=>x.disabled=false)
           solved.map(x=>x.disabled=true)
        }
        function end()
        {
            if (kvar == 0)
            { alert("Spelet är slut =" + antal) }
        }
   