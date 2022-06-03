// 6/1/22

// 1.0 - 1000 lihts
// input :
/* 
 The last sentence from the problem description makes it clear that there
 is only one input: the number of switches. The end of this sentence is 
 not as straightforward however, because the phrase—"count repetitions"
 —begs the question, "what is count?" If we read through the problem 
 description again, the first sentence tells us that every switch has 
 a number from 1 to count. We can therefore infer that the number of 
 repetitions is equal to the number of switches.
*/

// output : 
/* 
 n array of the lights that are turned on after toggling the appropriate
 switches count number of times.
*/
function lightsOn(switches) {
    // START 
    // Make container
    let container = [1];
    // FOR
     // Counts up to switchs
     /*
    for(let i = 1; i <= switches; i += 1) {
        if(i % 2 !== 0) {
            container.push(i); 
        }
              
    }
    */

    return container;
  }
  
  lightsOn(5);        // [1, 4]
  // Detailed result of each round for `5` lights
  // Round 1: all lights are on                                   EVERYLIGHT ON
  // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on  Everyother light on
  // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on      Multiples of 5 
  // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on  
  // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
  
  lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
  
  module.exports = {
      lightsOn
  }
