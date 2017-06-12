var cells = [];
var cellSize = 20;
var cols, rows;
var current;

var stack = [];

function setup()
{
	frameRate(20);
	createCanvas(600, 600);
	noStroke();
	

	cols = floor(width / cellSize);
	rows = floor(height / cellSize);

	for(var x = 0; x < rows; x++)
	{
		for(var y = 0; y < cols; y++)
		{
			
			var cell = new Cell(x, y);
			cells.push(cell);
		}
	}
	current = cells[0];
}

function draw()
{
	background(55);
	for(var i = 0; i < cells.length; i++)
	{
		cells[i].show();
	}

	current.visited = true;
	current.hlight();
	

	var next = current.cNeighbors();
	if(next)
	{
		next.visited = true;

		stack.push(current);

		
		removeWalls(current, next);
		
		current = next;
	}
	else if(stack.length > 0)
	{
		current = stack.pop();
	}


}

function index(x, y)
{
	if(x < 0 || y < 0 || y > cols-1 || x > rows-1)
	{
		return -1;
	}

	return y + x * cols;
}

function removeWalls(a, b)
{
	var x = a.fx - b.fx;
	if (x === 1)
	{
		a.sides[3] = false;
		b.sides[1] = false;
	}
	else if (x === -1)
	{
		a.sides[1] = false;
		b.sides[3] = false;
	}

	var y = a.fy - b.fy;
	if(y === 1)
	{
		a.sides[0] = false;
		b.sides[2] = false;
	}
	else if (y === -1)
	{
		a.sides[2] = false;
		b.sides[0] = false;
	}
}
