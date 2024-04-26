
const Data = require('./Data');

let myDatabase = function() {
    this.data = [];
}

let dataIndex = 0;

myDatabase.prototype.displayData = function() {
    for (let i=0;i<this.data.length;i++) {
        console.log(this.data[i]);
    }
}

//create
myDatabase.prototype.postData = function(_data) {
  console.log("Create _data = ");
  console.log(_data);

  for (let i=0;i<this.data.length;i++) {
    if (this.data[i] && this.data[i].index == _data.index) {
      return false;
    }
  }
  this.data[dataIndex++] = new Data(_data.index,_data.name,_data.points);
  console.log("this.data = ");
  console.log(this.data);
  return (this.data);
}

//read
myDatabase.prototype.getData = function(data) {
    console.log("Read data = " + data);
    
    if (data == 0)
    {   
      return ("You live on this Planet");
    }
    else if (data == 1)
    {
      //return ("Jupiter");
      return ("The biggest planet in our solar system");
    }
    else if (data == 2)
    {
      //return ("Mars");
      return ("Nicknamed the 'Red Planet' because of the iron in the soil");
    }
    else if (data == 3)
    {
      //return ("Mercury");
      return ("Closest Planet to the sun");
    }
    else if (data == 4)
    {
      //return ("Neptune");
      return ("Named After the Roman God of the Seas");
    }
    else if (data == 5)
    {
      //return ("Saturn");
      return ("This planet has the most moons in our Solar System");
    }
    else if (data == 6)
    {
      //return ("Uranus");
      return ("One of the two ice giants in the outer solar system");
    }
    else if (data == 7)
    {
      //return ("Venus");
      return ("The only planet named after a Woman");
      //return ("This planet has locked tectonic plates and rains boiling sulfuric acid");
    }
    else{
      for (let i=0;i<this.data.length;i++) {
        if (this.data[i] && ident == this.data[i].index)
        {
          return (new Data(this.data[i].index, this.data[i].name, this.data[i].points));
        }
      }
    }
  return null;
}


module.exports = myDatabase;

 