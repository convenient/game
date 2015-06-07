var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {
    preload: preload, create: create, update: update, render: render
});

function preload() {
    game.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
}

var map;
var layerWalls;

function create() {

    game.stage.backgroundColor = '#2d2d2d';

    map = game.add.tilemap();

    map.addTilesetImage('ground_1x1');

    layerWalls = map.create('layer-walls', 15, 15, 32, 32);

    //  Resize the world
    layerWalls.resizeWorld();

    for (var i=0; i<map.height;i++) {
        for (var j = 0; j < map.width; j++) {
            if (i == 0 || j == 0 || (i == map.height - 1) || (j == map.width - 1)) {
                map.putTile(10, i, j, layerWalls);
            }
        }
    }
}

function update()
{

}

function render() {
    game.debug.text('debug text here');
}


function Main()
{

}
