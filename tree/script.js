

var width = 4000;
    var height = 800;

    // Create the main SVG container
    var svg = d3.select("#svg-container").append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .call(d3.zoom().scaleExtent([0.22, 2]).on("zoom", zoomed)) // Enable zoom
        .append("g");

    // Append a group element inside SVG for transformations
    var g = svg.append("g")
        .attr("transform", "translate(-5150,-100) scale(4)");
    
        

    // Updated data with unique IDs
    var data =[
  { "id": "1", "child": "Emmanuel", "parent": "" },

  { "id": "2", "child": "Philip", "parent": "1" },
  { "id": "3", "child": "Paul", "parent": "1" },
  { "id": "4", "child": "John", "parent": "1" },
  { "id": "5", "child": "James", "parent": "1" },

  { "id": "6", "child": "Antony", "parent": "2" },
  { "id": "7", "child": "Alex", "parent": "2" },
  { "id": "8", "child": "Dominic", "parent": "2" },
  { "id": "9", "child": "Peter", "parent": "3" },
  { "id": "10", "child": "Sebastian", "parent": "3" },
  { "id": "11", "child": "Emmanuel", "parent": "3" },
  { "id": "12", "child": "Xavier", "parent": "4" },
  { "id": "13", "child": "Philip", "parent": "4" },
  { "id": "14", "child": "James", "parent": "4" },
  { "id": "15", "child": "Gabriel", "parent": "5" },
  { "id": "16", "child": "Paul", "parent": "5" },
  { "id": "17", "child": "Sebastian", "parent": "5" },
  { "id": "18", "child": "John", "parent": "5" },

  { "id": "19", "child": "Francis", "parent": "6" },
  { "id": "20", "child": "Thomas", "parent": "6" },
  { "id": "21", "child": "Philip", "parent": "7" },
  { "id": "22", "child": "Philip", "parent": "8" },
  { "id": "23", "child": "Joseph", "parent": "8" },
  { "id": "24", "child": "Luke", "parent": "8" },
  { "id": "25", "child": "George", "parent": "8" },
  { "id": "26", "child": "Andrew", "parent": "10" },
  { "id": "27", "child": "Paul", "parent": "10" },
  { "id": "28", "child": "Lawrence", "parent": "11" },
  { "id": "29", "child": "George", "parent": "11" },
  { "id": "30", "child": "Philip", "parent": "11" },
  { "id": "31", "child": "Thomas", "parent": "12" },
  { "id": "32", "child": "Custodis", "parent": "12" },
  { "id": "33", "child": "Francis", "parent": "12" },
  { "id": "34", "child": "Felix", "parent": "13" },
  { "id": "35", "child": "Emmanuel", "parent": "13" },
  { "id": "36", "child": "Louis", "parent": "13" },
  { "id": "37", "child": "Paschal", "parent": "14" },
  { "id": "38", "child": "Joseph", "parent": "14" },
  { "id": "39", "child": "Joseph Baptist", "parent": "15" },
  { "id": "40", "child": "Antony", "parent": "16" },
  { "id": "41", "child": "Lawrence", "parent": "16" },
  { "id": "42", "child": "Justine", "parent": "17" },
  { "id": "43", "child": "Faustine", "parent": "17" },
  { "id": "44", "child": "Constantine", "parent": "17" },
  { "id": "45", "child": "Stephen", "parent": "18" },
  { "id": "46", "child": "Joseph Antony", "parent": "18" },

  
  { "id": "47", "child": "Antony", "parent": "19" },
  { "id": "48", "child": "Isac", "parent": "20" },
  { "id": "49", "child": "Paschal", "parent": "21" },
  { "id": "50", "child": "Martin", "parent": "22" },
  { "id": "51", "child": "Paul", "parent": "22" },
  { "id": "52", "child": "Andrew", "parent": "23" },
  { "id": "53", "child": "Antony", "parent": "23" },
  { "id": "54", "child": "Peter", "parent": "25" },
  { "id": "55", "child": "Joseph", "parent": "26" },
  { "id": "56", "child": "Thomas", "parent": "26" },
  { "id": "57", "child": "Xavier", "parent": "26" },
  { "id": "58", "child": "Joachim", "parent": "26" },
  { "id": "59", "child": "Antony", "parent": "27" },
  { "id": "60", "child": "Philip", "parent": "27" },
  { "id": "61", "child": "Xavier", "parent": "28" },
  { "id": "62", "child": "George", "parent": "28" },
  { "id": "63", "child": "Lawrence", "parent": "30" },
  { "id": "64", "child": "John", "parent": "30" },
  { "id": "65", "child": "Ignatius", "parent": "31" },
  { "id": "66", "child": "Xavier", "parent": "32" },
  { "id": "67", "child": "Philip", "parent": "34" },
  { "id": "68", "child": "Peter", "parent": "35" },
  { "id": "69", "child": "Philip", "parent": "36" },
  { "id": "70", "child": "John", "parent": "37" },
  { "id": "71", "child": "Michael", "parent": "37" },
  { "id": "72", "child": "Monthu Marian", "parent": "38" },
  { "id": "73", "child": "Thomas", "parent": "38" },
  { "id": "74", "child": "Paul", "parent": "38" },
  { "id": "75", "child": "John", "parent": "38" },
  { "id": "76", "child": "Emmauel", "parent": "38" },
  { "id": "77", "child": "Rosario", "parent": "39" },
  { "id": "78", "child": "Joseph", "parent": "40" },
  { "id": "79", "child": "Baptist", "parent": "41" },
  { "id": "80", "child": "Babi", "parent": "41" },
  { "id": "81", "child": "Sebastian", "parent": "42" },
  { "id": "82", "child": "Paschal", "parent": "43" },
  { "id": "83", "child": "Seraphin", "parent": "43" },
  { "id": "84", "child": "Alexis", "parent": "43" },
  { "id": "85", "child": "Xavier", "parent": "44" },
  { "id": "86", "child": "Rosario", "parent": "45" },
  { "id": "87", "child": "John Peter", "parent": "45" },
  { "id": "88", "child": "Januvarius", "parent": "45" },
  { "id": "89", "child": "John", "parent": "46" },


  { "id": "90", "child": "Emmanuel", "parent": "47" },
  { "id": "91", "child": "Dominic", "parent": "47" },
  { "id": "92", "child": "Bonaventure", "parent": "48" },
  { "id": "93", "child": "Faustine", "parent": "49" },
  { "id": "94", "child": "John", "parent": "49" },
  { "id": "95", "child": "Marian", "parent": "50" },
  { "id": "96", "child": "Roasrio", "parent": "51" },
  { "id": "97", "child": "Emmanuel", "parent": "54" },
  { "id": "98", "child": "John", "parent": "55" },
  { "id": "99", "child": "Paul", "parent": "55" },
  { "id": "100", "child": "Louis", "parent": "55" },
  { "id": "101", "child": "Valerian", "parent": "56" },
  { "id": "102", "child": "Denis", "parent": "56" },
  { "id": "103", "child": "Lawrence", "parent": "56" },
  { "id": "104", "child": "Maurice", "parent": "57" },
  { "id": "105", "child": "Sylvester", "parent": "57" },
  { "id": "106", "child": "Marian", "parent": "57" },
  { "id": "107", "child": "Liguory", "parent": "57" },
  { "id": "108", "child": "Michael", "parent": "57" },
  { "id": "109", "child": "Gilbert", "parent": "57" },
  { "id": "110", "child": "Carmel", "parent": "57" },
  { "id": "111", "child": "Alexander", "parent": "58" },
  { "id": "112", "child": "Paul", "parent": "58" },
  { "id": "113", "child": "Thomas", "parent": "59" },
  { "id": "114", "child": "John", "parent": "59" },
  { "id": "115", "child": "Charles", "parent": "61" },
  { "id": "116", "child": "Jerald", "parent": "63" },
  { "id": "117", "child": "Michael", "parent": "63" },
  { "id": "118", "child": "Philip", "parent": "64" },
  { "id": "119", "child": "Aloysius", "parent": "65" },
  { "id": "120", "child": "Constantine", "parent": "66" },
  { "id": "121", "child": "Custodis", "parent": "66" },
  { "id": "122", "child": "Alex", "parent": "70" },
  { "id": "123", "child": "Ignatius", "parent": "70" },
  { "id": "124", "child": "Bonaventure", "parent": "70" },
  { "id": "125", "child": "Benjamin", "parent": "71" },
  { "id": "126", "child": "Sylvester", "parent": "71" },
  { "id": "127", "child": "Marcel", "parent": "71" },
  { "id": "128", "child": "Valerian", "parent": "72" },
  { "id": "129", "child": "John", "parent": "72" },
  { "id": "130", "child": "Urban", "parent": "72" },
  { "id": "131", "child": "Cyril", "parent": "72" },
  { "id": "132", "child": "Peter", "parent": "72" },
  { "id": "133", "child": "Eugene", "parent": "72" },
  { "id": "134", "child": "Baptist", "parent": "72" },
  { "id": "135", "child": "Stany", "parent": "73" },
  { "id": "136", "child": "Vincent", "parent": "73" },
  { "id": "137", "child": "Lawrence", "parent": "73" },
  { "id": "138", "child": "Lancy", "parent": "75" },
  { "id": "139", "child": "Maxim", "parent": "75" },
  { "id": "140", "child": "Melwyn", "parent": "76" },
  { "id": "141", "child": "Lawrence", "parent": "77" },
  { "id": "142", "child": "Joseph", "parent": "77" },
  { "id": "143", "child": "Federick", "parent": "77" },
  { "id": "144", "child": "Anthony", "parent": "78" },
  { "id": "145", "child": "John Baptist", "parent": "78" },
  { "id": "146", "child": "Paul", "parent": "86" },
  { "id": "147", "child": "Joseph", "parent": "86" },
  { "id": "148", "child": "Antony", "parent": "86" },
  { "id": "149", "child": "Baptist", "parent": "86" },
  { "id": "150", "child": "Albert", "parent": "87" },
  { "id": "151", "child": "Lancelot", "parent": "89" },
  { "id": "152", "child": "Antony", "parent": "89" },
  { "id": "153", "child": "Jerome", "parent": "89" },
  
  

  { "id": "154", "child": "William", "parent": "98" },
  { "id": "155", "child": "Walter", "parent": "98" },
  { "id": "156", "child": "Wilfred", "parent": "98" },
  { "id": "157", "child": "Wilson", "parent": "98" },
  
  { "id": "158", "child": "Brian", "parent": "101" },
  { "id": "159", "child": "Patrick", "parent": "101" },
  { "id": "160", "child": "Clitus", "parent": "102" },
  { "id": "161", "child": "Shawn", "parent": "103" },
  
  { "id": "162", "child": "Edward", "parent": "104" },
  { "id": "163", "child": "Vincent", "parent": "104" },
  { "id": "164", "child": "John", "parent": "104" },
  { "id": "165", "child": "Prakash", "parent": "104" },
  
  { "id": "166", "child": "Richard", "parent": "105" },
  
  { "id": "167", "child": "Victory", "parent": "106" },
  { "id": "168", "child": "Rony", "parent": "106" },
  
  { "id": "169", "child": "Godfrey", "parent": "107" },
  
  { "id": "170", "child": "Canute", "parent": "109" },
  { "id": "171", "child": "Danute", "parent": "109" },
  
  { "id": "172", "child": "Melwyn", "parent": "112" },
  
  { "id": "173", "child": "William", "parent": "113" },
  { "id": "174", "child": "John", "parent": "113" },
  
  { "id": "175", "child": "Walter", "parent": "114" },
  { "id": "176", "child": "Cyril", "parent": "114" },
  { "id": "177", "child": "Naveen", "parent": "114" },
  
  { "id": "178", "child": "Alwyn", "parent": "115" },
  { "id": "179", "child": "Walter", "parent": "115" },
  
  { "id": "180", "child": "Prashanth", "parent": "116" },
  { "id": "181", "child": "Prakash", "parent": "116" },
  
  { "id": "182", "child": "Praveen", "parent": "117" },
  
  { "id": "183", "child": "Patrick", "parent": "122" },
  
  { "id": "184", "child": "John", "parent": "123" },
  { "id": "185", "child": "Maurice", "parent": "123" },
  
  { "id": "186", "child": "Freddy", "parent": "124" },
  { "id": "187", "child": "Oswald", "parent": "124" },
  
  { "id": "188", "child": "Henry", "parent": "125" },
  { "id": "189", "child": "Victor", "parent": "125" },
  { "id": "190", "child": "Maxim", "parent": "125" },
  { "id": "191", "child": "Anil", "parent": "125" },
  
  { "id": "192", "child": "Rony", "parent": "126" },
  { "id": "193", "child": "Stany", "parent": "126" },
  { "id": "194", "child": "Noel", "parent": "126" },
  
  { "id": "195", "child": "Shammi", "parent": "127" },
  { "id": "196", "child": "Ramson", "parent": "127" },
  { "id": "197", "child": "Clement", "parent": "127" },
  
  { "id": "198", "child": "Cyril", "parent": "128" },
  { "id": "199", "child": "William", "parent": "128" },
  { "id": "200", "child": "Freddy", "parent": "128" },
  { "id": "201", "child": "Louis", "parent": "128" },
  { "id": "202", "child": "Sylvester", "parent": "128" },
  
  { "id": "203", "child": "Michael", "parent": "129" },
  
  { "id": "204", "child": "Alphonse", "parent": "130" },
  
  { "id": "205", "child": "Benedict", "parent": "131" },
  { "id": "206", "child": "Alwyn", "parent": "131" },
  
  { "id": "207", "child": "Kevin", "parent": "135" },
  
  { "id": "208", "child": "Shoan", "parent": "140" },
  
  { "id": "209", "child": "Valerian", "parent": "141" },
  { "id": "210", "child": "Joachim", "parent": "141" },
  { "id": "211", "child": "Gilbert", "parent": "141" },
  
  { "id": "212", "child": "Joachim", "parent": "142" },
  { "id": "213", "child": "John", "parent": "142" },
  
  { "id": "214", "child": "Jerome", "parent": "143" },
  { "id": "215", "child": "Maxim", "parent": "143" },
  
  { "id": "216", "child": "Lancy", "parent": "145" },
  { "id": "217", "child": "Prakash", "parent": "145" },
  
  { "id": "218", "child": "Rosario", "parent": "146" },
  { "id": "219", "child": "Thomas", "parent": "146" },
  { "id": "220", "child": "Xavier", "parent": "146" },
  { "id": "221", "child": "Joachim", "parent": "146" },
  { "id": "222", "child": "Emmanuel", "parent": "146" },
  { "id": "223", "child": "Louis", "parent": "146" },
  { "id": "224", "child": "Jerome", "parent": "146" },
  
  { "id": "225", "child": "Walter", "parent": "147" },
  { "id": "226", "child": "Alwyn", "parent": "147" },
  { "id": "227", "child": "Gilbert", "parent": "147" },
  { "id": "228", "child": "Norbert", "parent": "147" },
  
  { "id": "229", "child": "Dolphy", "parent": "148" },
  { "id": "230", "child": "Wilfred", "parent": "148" },
  { "id": "231", "child": "Pius", "parent": "148" },
  
  { "id": "232", "child": "Apoline", "parent": "150" },
  { "id": "233", "child": "George", "parent": "150" },
  { "id": "234", "child": "Raphael", "parent": "150" },
  { "id": "235", "child": "Sylvester", "parent": "150" },
  

  //generation
  { "id": "236", "child": "Rubin", "parent": "154" },
  { "id": "237", "child": "Collin", "parent": "154" },
  
  { "id": "238", "child": "Clayton", "parent": "155" },
  { "id": "239", "child": "Auston", "parent": "156" },
  { "id": "240", "child": "Elaton", "parent": "157" },
  
  { "id": "241", "child": "Borris", "parent": "158" },
  
  { "id": "242", "child": "Parikshith", "parent": "159" },
  
  { "id": "243", "child": "Stephen", "parent": "162" },
  
  { "id": "244", "child": "Rohan", "parent": "166" },
  
  { "id": "245", "child": "Nihal", "parent": "172" },
  
  { "id": "246", "child": "Rathan", "parent": "185" },
  
  { "id": "247", "child": "Nithin", "parent": "188" },
  { "id": "248", "child": "Jeetan", "parent": "188" },
  
  { "id": "249", "child": "Allan", "parent": "189" },
  
  { "id": "250", "child": "Milton", "parent": "190" },
  
  { "id": "251", "child": "Aston", "parent": "191" },
  
  { "id": "252", "child": "Gladson", "parent": "199" },
  
  { "id": "253", "child": "Joswin", "parent": "203" },
  { "id": "254", "child": "Marvin", "parent": "203" },
  
  { "id": "255", "child": "Vincent", "parent": "209" },
  
  { "id": "256", "child": "Sunil", "parent": "210" },
  
  { "id": "257", "child": "Jason", "parent": "214" },
  
  { "id": "258", "child": "Robert", "parent": "218" },
  
  { "id": "259", "child": "Ivan", "parent": "219" },
  { "id": "260", "child": "Dona", "parent": "219" },
  { "id": "261", "child": "Rony", "parent": "219" },
  
  { "id": "262", "child": "Erwin", "parent": "222" },
  { "id": "263", "child": "Elston", "parent": "222" },
  
  { "id": "264", "child": "Joel", "parent": "224" },
  
  { "id": "265", "child": "Jerald", "parent": "232" },
  
  { "id": "266", "child": "Denzil", "parent": "233" },
  
  { "id": "267", "child": "Vivian", "parent": "234" },
  
  { "id": "268", "child": "Ivan", "parent": "235" },



  //Gen
  { "id": "269", "child": "Brain", "parent": "255" },
  { "id": "270", "child": "Roshan", "parent": "258" },
  { "id": "271", "child": "Daniel", "parent": "260" },

];




    // Stratify using the unique "id"
    var dataStructure = d3.stratify()
        .id(d => d.id)  // Unique ID
        .parentId(d => d.parent)
        (data);

        var treeStructure = d3.tree().size([width - 100, height - 100]);
 

    var information = treeStructure(dataStructure);

    var connections = g.append("g").selectAll("path")
        .data(information.links());
    connections.enter().append("path")
        .attr("d", function(d) {
          return "M" + d.source.x + "," + d.source.y + " v 50 H" + d.target.x + " V " + d.target.y;
        });

    /*var rectangles = g.append("g").selectAll("rect")
        .data(information.descendants());
    rectangles.enter().append("rect")
        .attr("x", d => d.x - 40)
        .attr("y", d => d.y - 20)
        .attr("rx", 10) 
        .attr("ry", 10) 
        .attr("width", 80)
        .attr("height", 40)
        .style("fill", "yellow")
        .style("stroke", "black");*/

    var names = g.append("g").selectAll("text")
        .data(information.descendants());
    names.enter().append("text")
        .text(d => d.data.child) // Uses "child" for display
        .attr("x", d => d.data.id >= 19 ? d.x + 25 : d.x)
        .attr("y", d => d.y) // Add 4px for IDs 47+
        .attr("transform", d => d.data.id >= 19 ? `rotate(90, ${d.x}, ${d.y})` : "")
        
        .style("font-size", "15px")
        .style("font-weight", "400")
        .style("fill", "#EEEEEE")
        .style("font-family", "Martel");

        


        function zoomed() {
      g.attr("transform", d3.event.transform + "translate(-5150,-100) scale(4)");
      
    }
