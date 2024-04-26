//used to know what is going to be stored in database


let Data = function(index,name,points) {
    this.index = index;
    this.name = name;
    this.points = points;


    if (this.index == 0 && this.name == "Earth"){
    	this.points++;
        console.log("Score = " + this.points);
        return (this.index,this.name,this.points);
    }
    else if (this.index == 0 && this.name != "Earth") {
    	return (this.points);
    }
    
    else if (this.index == 1 && this.name == "Jupiter"){
        this.points++;
        console.log("Score = " + this.points);
    	return (this.points);this.points
    }
    else if (this.index == 1 && this.name != "Jupiter") {
    	return (this.points);
    }
    
    else if (this.index == 2 && this.name == "Mars"){
        this.points++;
        console.log("Score = " + this.points);
    	return (this.points);
    }
    else if (this.index == 2 && this.name != "Mars") {
    	return (this.points);
    }
    
    else if (this.index == 3 && this.name == "Mercury"){
        this.points++;
        console.log("Score = " + this.points);
    	return (this.points);
    }
    else if (this.index == 3 && this.name != "Mercury") {
    	return (this.points);
    }
    
    else if (this.index == 4 && this.name == "Neptune"){
        this.points++;
        console.log("Score = " + this.points);
    	return (this.points);
    }
    else if (this.index == 4 && this.name != "Neptune") {
    	return (this.points);this.points
    }
   
    else if (this.index == 5 && this.name == "Saturn"){
        this.points++;
        console.log("Score = " + this.points);
    	return (this.points);
    }
    else if (this.index == 5 && this.name != "Saturn") {
    	return (this.points);
    }
   
    else if (this.index == 6 && this.name == "Uranus"){
        this.points++;
        console.log("Score = " + this.points);
    	return (this.points);
    }
    else if (this.index == 6 && this.name != "Uranus") {
    	return (this.points);
    }
   
    else if (this.index == 7 && this.name == "Venus"){
        this.points++;
        console.log("Score = " + this.points);
    	return (this.points);
    }
    else if (this.index == 7 && this.name != "Venus") {
    	return (this.points);
    }


}

module.exports = Data;

 