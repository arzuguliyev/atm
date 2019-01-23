var banknotes = [100, 50, 20, 20, 1];
var wdAmount  = 687

 for( var i = 0; i < banknotes.length; i++){
          var banknote = banknotes[i];
          if(wdAmount => banknote){
              var change = wdAmount % banknote;
              var banknoteCounte = (wdAmount - change) / banknote;
              console.log("Banknote " + banknote + " count: " + banknoteCounte);
              if(change == 0)
                  break
              wdAmount = change
          }
           

         

         
 }


