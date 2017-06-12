function Cell(x, y)
{
	this.sides = [true, true, true, true];
 	this.visited = false;

 	this.fx = x;
 	this.fy = y;

 	this.x = x * cellSize;
 	this.y = y * cellSize;

 	this.cNeighbors = function()
 	{
 		var neighbors = [];
 		var top    = cells[index(x, y+1)];
 		var right  = cells[index(x+1, y)];
 		var left   = cells[index(x-1, y)];
 		var bottom = cells[index(x, y-1)];

 		if(top && !top.visited)
 		{
 			neighbors.push(top);
 		}
 		if(right && !right.visited)
 		{
 			neighbors.push(right);
 		}
 		if(left && !left.visited)
 		{
 			neighbors.push(left);
 		}
 		if(bottom && !bottom.visited)
 		{
 			neighbors.push(bottom);
 		}

 		if(neighbors.length > 0)
 		{
 			var r = floor(random(0, neighbors.length));
 			return neighbors[r];
 		}
 		else
 		{
 			return undefined;
 		}
 	}

 	this.hlight = function()
 	{
 		noStroke();
 		fill(255);
 		rect(this.x, this.y, cellSize, cellSize);
 		
 	}

	this.show = function()
	{
		if(this.visited)
		{
			noStroke();
			fill(127, 69, 125);
			rect(this.x, this.y, cellSize, cellSize);
		}
		if(this.sides[0])
		{
			stroke(255);
			line(this.x, this.y, this.x+cellSize, this.y);	
		}
		if(this.sides[1])
		{
			stroke(255);
			line(this.x+cellSize, this.y, this.x+cellSize, this.y+cellSize);
		}
		if(this.sides[2])
		{
			stroke(255);
			line(this.x, this.y+cellSize, this.x+cellSize, this.y+cellSize);
			
		}
		if(this.sides[3])
		{
			stroke(255);
			line(this.x, this.y, this.x, this.y+cellSize);
		}
	}

function Cell(x, y)
{
	this.sides = [true, true, true, true];
 	this.visited = false;

 	this.fx = x;
 	this.fy = y;

 	this.x = x * cellSize;
 	this.y = y * cellSize;

 	this.cNeighbors = function()
 	{
 		var neighbors = [];
 		var top    = cells[index(x, y+1)];
 		var right  = cells[index(x+1, y)];
 		var left   = cells[index(x-1, y)];
 		var bottom = cells[index(x, y-1)];

 		if(top && !top.visited)
 		{
 			neighbors.push(top);
 		}
 		if(right && !right.visited)
 		{
 			neighbors.push(right);
 		}
 		if(left && !left.visited)
 		{
 			neighbors.push(left);
 		}
 		if(bottom && !bottom.visited)
 		{
 			neighbors.push(bottom);
 		}

 		if(neighbors.length > 0)
 		{
 			var r = floor(random(0, neighbors.length));
 			return neighbors[r];
 		}
 		else
 		{
 			return undefined;
 		}
 	}

 	this.hlight = function()
 	{
 		noStroke();
 		fill(255);
 		rect(this.x, this.y, cellSize, cellSize);
 		
 	}

	this.show = function()
	{
		if(this.visited)
		{
			noStroke();
			fill(127, 69, 125);
			rect(this.x, this.y, cellSize, cellSize);
		}
		if(this.sides[0])
		{
			stroke(255);
			line(this.x, this.y, this.x+cellSize, this.y);	
		}
		if(this.sides[1])
		{
			stroke(255);
			line(this.x+cellSize, this.y, this.x+cellSize, this.y+cellSize);
		}
		if(this.sides[2])
		{
			stroke(255);
			line(this.x, this.y+cellSize, this.x+cellSize, this.y+cellSize);
			
		}
		if(this.sides[3])
		{
			stroke(255);
			line(this.x, this.y, this.x, this.y+cellSize);
		}
	}
}